// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initDateTime();
  initModal();
  initFilters();
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

      // If clicking the same filter, deselect it
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      } else {
        // Remove active from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked button
        btn.classList.add('active');
      }
    });
  });

  clearBtn.addEventListener('click', () => {
    // Remove active class from all filter buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
  });
}
