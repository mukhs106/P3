// ========================================
// CONFIGURATION
// ========================================

const CONFIG = {
  imageHeight: 180,
  driftSpeed: 10000,
  cloudPadding: {
    top: 80,
    bottom: 220,
    left: 180,
    right: 320
  },
  zRange: { min: -60, max: 60 }
};

const MODE_COLORS = {
  direct: '#000000',
  indirect: '#0C391E',
  relational: '#151747',
  interior: '#37154B'
};

// ========================================
// STATE
// ========================================

let selectedImageId = null;
let activeFilter = null;
let animationStartTime = null;
let animationId = null;

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initDateTime();
  initModal();
  initFilters();
  initCloud();
  initMetadataPanel();
  startDriftAnimation();
});

// ========================================
// DATE/TIME
// ========================================

function initDateTime() {
  updateDateTime();
  setInterval(updateDateTime, 1000);
}

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  };
  const formatted = now.toLocaleDateString('en-US', options);
  document.getElementById('live-datetime').textContent = formatted;
}

// ========================================
// MODAL
// ========================================

function initModal() {
  const infoBtn = document.getElementById('info-btn');
  const modal = document.getElementById('info-modal');
  const closeBtn = document.getElementById('modal-close');

  infoBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });
}

// ========================================
// FILTERS
// ========================================

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const clearBtn = document.getElementById('clear-filter');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;

      if (activeFilter === mode) {
        // Clicking same filter clears it
        clearFilter();
      } else {
        setFilter(mode);
      }
    });
  });

  clearBtn.addEventListener('click', clearFilter);
}

function setFilter(mode) {
  activeFilter = mode;

  // Update button states
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });

  // Update image visibility
  document.querySelectorAll('.image-tile').forEach(tile => {
    if (tile.dataset.mode === mode) {
      tile.classList.remove('faded');
    } else {
      tile.classList.add('faded');
    }
  });
}

function clearFilter() {
  activeFilter = null;

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  document.querySelectorAll('.image-tile').forEach(tile => {
    tile.classList.remove('faded');
  });
}

// ========================================
// CLOUD GENERATION
// ========================================

function initCloud() {
  const container = document.getElementById('cloud-container');
  const bounds = container.getBoundingClientRect();

  // Calculate safe area
  const safeArea = {
    minX: CONFIG.cloudPadding.left,
    maxX: bounds.width - CONFIG.cloudPadding.right,
    minY: CONFIG.cloudPadding.top,
    maxY: bounds.height - CONFIG.cloudPadding.bottom
  };

  // Generate and render each image
  archiveData.forEach((imgData, index) => {
    const position = generatePosition(safeArea, index);
    createImageTile(imgData, position, index);
  });

  // Click on container to deselect
  container.addEventListener('click', (e) => {
    if (e.target === container) {
      deselectImage();
    }
  });
}

function generatePosition(safeArea, seed) {
  // Use seed for some variation but keep it deterministic
  const random = seededRandom(seed * 12345);

  return {
    x: safeArea.minX + random() * (safeArea.maxX - safeArea.minX),
    y: safeArea.minY + random() * (safeArea.maxY - safeArea.minY),
    z: CONFIG.zRange.min + random() * (CONFIG.zRange.max - CONFIG.zRange.min),
    seed: random() * 10000
  };
}

function seededRandom(seed) {
  return function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function createImageTile(imgData, position, index) {
  const container = document.getElementById('cloud-container');

  const tile = document.createElement('div');
  tile.className = 'image-tile';
  tile.dataset.id = imgData.id;
  tile.dataset.mode = imgData.mode;
  tile.dataset.index = index;
  tile.dataset.baseX = position.x;
  tile.dataset.baseY = position.y;
  tile.dataset.baseZ = position.z;
  tile.dataset.seed = position.seed;

  // Set initial position
  tile.style.transform = `translate3d(${position.x}px, ${position.y}px, ${position.z}px)`;
  tile.style.zIndex = Math.round(position.z + 60);

  // Create image
  const img = document.createElement('img');
  img.src = imgData.src;
  img.alt = `${imgData.id} - ${imgData.mode}`;
  img.loading = 'lazy';

  // Handle image load error (for missing images)
  img.onerror = function() {
    // Create a placeholder colored rectangle
    this.style.background = MODE_COLORS[imgData.mode] + '20';
    this.style.border = `1px solid ${MODE_COLORS[imgData.mode]}40`;
    this.style.height = CONFIG.imageHeight + 'px';
    this.style.width = getWidthFromRatio(imgData.aspect_ratio) + 'px';
  };

  // Create label
  const label = document.createElement('div');
  label.className = 'image-label';

  const labelText = document.createElement('span');
  labelText.textContent = imgData.id;

  const modeSquare = document.createElement('span');
  modeSquare.className = 'mode-square';
  modeSquare.style.background = MODE_COLORS[imgData.mode];

  label.appendChild(labelText);
  label.appendChild(modeSquare);

  tile.appendChild(img);
  tile.appendChild(label);

  // Click handler
  tile.addEventListener('click', (e) => {
    e.stopPropagation();
    selectImage(imgData.id);
  });

  container.appendChild(tile);
}

function getWidthFromRatio(ratio) {
  const height = CONFIG.imageHeight;
  switch(ratio) {
    case '1:1': return height;
    case '2:3': return height * (2/3);
    case '9:16': return height * (9/16);
    default: return height;
  }
}

// ========================================
// DRIFT ANIMATION
// ========================================

function startDriftAnimation() {
  animationStartTime = Date.now();

  function animate() {
    const elapsed = Date.now() - animationStartTime;

    document.querySelectorAll('.image-tile').forEach(tile => {
      // Don't animate selected images
      if (tile.classList.contains('selected')) return;

      const baseX = parseFloat(tile.dataset.baseX);
      const baseY = parseFloat(tile.dataset.baseY);
      const baseZ = parseFloat(tile.dataset.baseZ);
      const seed = parseFloat(tile.dataset.seed);

      // Sinusoidal drift - very slow and subtle
      const driftX = Math.sin((elapsed + seed) / CONFIG.driftSpeed) * 3;
      const driftY = Math.cos((elapsed + seed) / (CONFIG.driftSpeed * 1.2)) * 2;

      tile.style.transform = `translate3d(${baseX + driftX}px, ${baseY + driftY}px, ${baseZ}px)`;
    });

    animationId = requestAnimationFrame(animate);
  }

  animate();
}

function stopDriftAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

// ========================================
// IMAGE SELECTION
// ========================================

function selectImage(id) {
  // Deselect previous
  if (selectedImageId) {
    const prevTile = document.querySelector(`.image-tile[data-id="${selectedImageId}"]`);
    if (prevTile) {
      prevTile.classList.remove('selected');
      const baseZ = parseFloat(prevTile.dataset.baseZ);
      prevTile.style.zIndex = Math.round(baseZ + 60);
    }
  }

  // Select new
  selectedImageId = id;
  const tile = document.querySelector(`.image-tile[data-id="${id}"]`);
  const imgData = archiveData.find(img => img.id === id);

  if (tile && imgData) {
    tile.classList.add('selected');

    // Scale around current position
    const baseX = parseFloat(tile.dataset.baseX);
    const baseY = parseFloat(tile.dataset.baseY);
    const baseZ = parseFloat(tile.dataset.baseZ);
    tile.style.transform = `translate3d(${baseX}px, ${baseY}px, ${baseZ}px) scale(1.18)`;
    tile.style.zIndex = 100;

    updateMetadataPanel(imgData);
  }
}

function deselectImage() {
  if (selectedImageId) {
    const tile = document.querySelector(`.image-tile[data-id="${selectedImageId}"]`);
    if (tile) {
      tile.classList.remove('selected');
      const baseZ = parseFloat(tile.dataset.baseZ);
      tile.style.zIndex = Math.round(baseZ + 60);
    }
  }
  selectedImageId = null;
  resetMetadataPanel();
}

// ========================================
// METADATA PANEL
// ========================================

function initMetadataPanel() {
  resetMetadataPanel();
}

function resetMetadataPanel() {
  const panel = document.getElementById('metadata-panel');
  const content = document.getElementById('metadata-content');

  panel.style.color = '#000000';

  content.innerHTML = `
    <div class="image-id">IMG_000</div>
    <div class="mode-label">Mode: —</div>
    <div class="divider"></div>
    <div class="score-item"><span class="score-label">Authenticity</span><span class="score-value">—</span></div>
    <div class="score-item"><span class="score-label">Performance</span><span class="score-value">—</span></div>
    <div class="score-item"><span class="score-label">Space Occupied</span><span class="score-value">—</span></div>
    <div class="score-item"><span class="score-label">Vulnerability</span><span class="score-value">—</span></div>
    <div class="divider"></div>
    <div class="score-item"><span class="score-label">Gaze</span><span class="score-value">—</span></div>
    <div class="notes-section">
      <div class="notes-label">Notes</div>
      <div class="notes-text">—</div>
    </div>
  `;
}

function updateMetadataPanel(imgData) {
  const panel = document.getElementById('metadata-panel');
  const content = document.getElementById('metadata-content');

  const modeColor = MODE_COLORS[imgData.mode];
  panel.style.color = modeColor;

  let html = `
    <div class="image-id">${imgData.id}</div>
    <div class="mode-label">Mode: ${capitalize(imgData.mode)}</div>
    <div class="divider"></div>
  `;

  // Mode-specific content
  switch(imgData.mode) {
    case 'direct':
      html += renderDirectScores(imgData);
      break;
    case 'indirect':
      html += renderIndirectScores(imgData);
      break;
    case 'relational':
      html += renderRelationalAnnotations(imgData);
      break;
    case 'interior':
      html += renderInteriorClassification(imgData);
      break;
  }

  // Notes
  const hasNotes = imgData.notes && imgData.notes.trim() !== '';
  html += `
    <div class="notes-section ${hasNotes ? 'has-content' : ''}">
      <div class="notes-label">Notes</div>
      <div class="notes-text">${hasNotes ? imgData.notes : '—'}</div>
    </div>
  `;

  content.innerHTML = html;
}

function renderDirectScores(imgData) {
  const s = imgData.scores || {};
  return `
    <div class="score-item"><span class="score-label">Authenticity</span><span class="score-value">${s.authenticity ?? '—'}</span></div>
    <div class="score-item"><span class="score-label">Performance</span><span class="score-value">${s.performance ?? '—'}</span></div>
    <div class="score-item"><span class="score-label">Space Occupied</span><span class="score-value">${s.space_occupied ?? '—'}</span></div>
    <div class="score-item"><span class="score-label">Vulnerability</span><span class="score-value">${s.vulnerability ?? '—'}</span></div>
    <div class="divider"></div>
    <div class="score-item"><span class="score-label">Gaze</span><span class="score-value">${capitalize(imgData.gaze) || '—'}</span></div>
  `;
}

function renderIndirectScores(imgData) {
  const s = imgData.scores || {};
  return `
    <div class="score-item"><span class="score-label">Presence</span><span class="score-value">${s.presence ?? '—'}</span></div>
    <div class="score-item"><span class="score-label">Ritual Significance</span><span class="score-value">${s.ritual_significance ?? '—'}</span></div>
    <div class="score-item"><span class="score-label">Visual Compliance</span><span class="score-value">${s.visual_compliance ?? '—'}</span></div>
  `;
}

function renderRelationalAnnotations(imgData) {
  const a = imgData.annotations || {};
  return `
    <div class="annotation-item">
      <div class="annotation-label">Relation</div>
      <div class="annotation-value">${a.relation || '—'}</div>
    </div>
    <div class="annotation-item">
      <div class="annotation-label">Proximity</div>
      <div class="annotation-value">${a.proximity || '—'}</div>
    </div>
    <div class="annotation-item">
      <div class="annotation-label">Activation</div>
      <div class="annotation-value">${a.activation || '—'}</div>
    </div>
    <div class="annotation-item">
      <div class="annotation-label">Interaction</div>
      <div class="annotation-value">${capitalize(a.interaction_mode) || '—'}</div>
    </div>
  `;
}

function renderInteriorClassification(imgData) {
  const c = imgData.classification || {};
  return `
    <div class="annotation-item">
      <div class="annotation-label">Vulnerability</div>
      <div class="annotation-value">${capitalize(c.vulnerability) || '—'}</div>
    </div>
    <div class="annotation-item">
      <div class="annotation-label">Intent</div>
      <div class="annotation-value">${capitalize(c.intent) || '—'}</div>
    </div>
    <div class="annotation-item">
      <div class="annotation-label">Legibility</div>
      <div class="annotation-value">${capitalize(c.legibility) || '—'}</div>
    </div>
  `;
}

// ========================================
// UTILITIES
// ========================================

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/_/g, ' ');
}

// ========================================
// WINDOW RESIZE
// ========================================

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const container = document.getElementById('cloud-container');
    const bounds = container.getBoundingClientRect();

    const safeArea = {
      minX: CONFIG.cloudPadding.left,
      maxX: bounds.width - CONFIG.cloudPadding.right,
      minY: CONFIG.cloudPadding.top,
      maxY: bounds.height - CONFIG.cloudPadding.bottom
    };

    // Regenerate positions proportionally
    document.querySelectorAll('.image-tile').forEach((tile, index) => {
      const position = generatePosition(safeArea, index);
      tile.dataset.baseX = position.x;
      tile.dataset.baseY = position.y;
      tile.dataset.baseZ = position.z;

      if (!tile.classList.contains('selected')) {
        tile.style.transform = `translate3d(${position.x}px, ${position.y}px, ${position.z}px)`;
        tile.style.zIndex = Math.round(position.z + 60);
      }
    });
  }, 250);
});