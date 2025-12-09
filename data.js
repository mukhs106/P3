// ========================================
// ARCHIVE DATA
// ========================================
// This file contains the metadata for all images in the archive.
// Each image should have mode-specific fields as documented in claude.md

const archiveData = [
  {
    id: "IMG_001",
    src: "images/IMG_001.jpg",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 7,
      performance: 3,
      space_occupied: 4,
      vulnerability: 6
    },
    gaze: "away",
    notes: "Morning light. The performed smile is absent."
  },
  {
    id: "IMG_002",
    src: "images/IMG_002.jpg",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 9,
      ritual_significance: 10,
      visual_compliance: 8
    },
    notes: "The rings on the wooden tray. What remains when the body is absent."
  },
  {
    id: "IMG_003",
    src: "images/IMG_003.jpg",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Closest witness",
      proximity: "Emotionally near, physically present",
      activation: "Permission to be unperformed",
      interaction_mode: "spontaneous"
    },
    notes: "Identity formed in relation."
  },
  {
    id: "IMG_004",
    src: "images/IMG_004.jpg",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "deep",
      intent: "for self",
      legibility: "fragmentary"
    },
    notes: "3am thoughts. What images cannot show."
  },
  {
    id: "IMG_005",
    src: "images/IMG_005.jpg",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 5,
      performance: 8,
      space_occupied: 6,
      vulnerability: 3
    },
    gaze: "camera",
    notes: "The constructed self. Aware of being watched."
  },
  {
    id: "IMG_006",
    src: "images/IMG_006.jpg",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 7,
      ritual_significance: 6,
      visual_compliance: 9
    },
    notes: "Daily objects arranged. The performance of order."
  }
];

// ========================================
// DATA VALIDATION (Optional)
// ========================================
// Uncomment to validate data structure on load

/*
function validateArchiveData() {
  const requiredModes = ['direct', 'indirect', 'relational', 'interior'];
  const requiredAspectRatios = ['2:3', '1:1', '9:16'];

  archiveData.forEach((item, index) => {
    // Check required fields
    if (!item.id || !item.src || !item.mode || !item.aspect_ratio) {
      console.warn(`Item ${index}: Missing required fields`);
    }

    // Check mode
    if (!requiredModes.includes(item.mode)) {
      console.warn(`Item ${item.id}: Invalid mode '${item.mode}'`);
    }

    // Check aspect ratio
    if (!requiredAspectRatios.includes(item.aspect_ratio)) {
      console.warn(`Item ${item.id}: Invalid aspect_ratio '${item.aspect_ratio}'`);
    }

    // Check mode-specific fields
    if (item.mode === 'direct' && (!item.scores || !item.gaze)) {
      console.warn(`Item ${item.id}: Missing direct mode fields (scores, gaze)`);
    }
    if (item.mode === 'indirect' && !item.scores) {
      console.warn(`Item ${item.id}: Missing indirect mode fields (scores)`);
    }
    if (item.mode === 'relational' && !item.annotations) {
      console.warn(`Item ${item.id}: Missing relational mode fields (annotations)`);
    }
    if (item.mode === 'interior' && !item.classification) {
      console.warn(`Item ${item.id}: Missing interior mode fields (classification)`);
    }
  });
}

// Run validation on load
validateArchiveData();
*/
