// ========================================
// IMAGE ARCHIVE DATA
// ========================================

const archiveData = [
  // ----------------------------------------
  // DIRECT MODE (Self) - Images where you appear
  // ----------------------------------------
  {
    id: "IMG_001",
    src: "IMG/IMG_001.jpg",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 8,
      performance: 2,
      space_occupied: 4,
      vulnerability: 7
    },
    gaze: "away",
    notes: "Morning light through the window. The performed smile is absent."
  },
  {
    id: "IMG_002",
    src: "images/IMG_002.jpg",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 3,
      performance: 8,
      space_occupied: 6,
      vulnerability: 2
    },
    gaze: "camera",
    notes: "Assessment delay visible. The smile that survives calculation."
  },
  {
    id: "IMG_003",
    src: "images/IMG_003.jpg",
    aspect_ratio: "1:1",
    mode: "direct",
    scores: {
      authenticity: 9,
      performance: 1,
      space_occupied: 3,
      vulnerability: 8
    },
    gaze: "obscured",
    notes: "Caught unaware. The exterior not yet managed."
  },
  {
    id: "IMG_004",
    src: "images/IMG_004.jpg",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 5,
      performance: 5,
      space_occupied: 5,
      vulnerability: 5
    },
    gaze: "away",
    notes: "The condition itself. Authentic and performing simultaneously."
  },
  {
    id: "IMG_005",
    src: "images/IMG_005.jpg",
    aspect_ratio: "9:16",
    mode: "direct",
    scores: {
      authenticity: 7,
      performance: 4,
      space_occupied: 2,
      vulnerability: 6
    },
    gaze: "absent",
    notes: "Occupying less space. The edges preferred over center."
  },
  {
    id: "IMG_006",
    src: "images/IMG_006.jpg",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 4,
      performance: 7,
      space_occupied: 7,
      vulnerability: 3
    },
    gaze: "camera",
    notes: "Full visibility. Too much ground to cover."
  },

  // ----------------------------------------
  // INDIRECT MODE (Proxies) - Objects and spaces
  // ----------------------------------------
  {
    id: "IMG_007",
    src: "images/IMG_007.jpg",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 9,
      ritual_significance: 10,
      visual_compliance: 8
    },
    notes: "The four rings. Dents in fingers from permanent wear. The anchors."
  },
  {
    id: "IMG_008",
    src: "images/IMG_008.jpg",
    aspect_ratio: "2:3",
    mode: "indirect",
    scores: {
      presence: 8,
      ritual_significance: 7,
      visual_compliance: 9
    },
    notes: "The room. Green that stays alive without labor."
  },
  {
    id: "IMG_009",
    src: "images/IMG_009.jpg",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 7,
      ritual_significance: 8,
      visual_compliance: 7
    },
    notes: "Brass sculptures beside the vases. Internal logic made visible."
  },
  {
    id: "IMG_010",
    src: "images/IMG_010.jpg",
    aspect_ratio: "9:16",
    mode: "indirect",
    scores: {
      presence: 6,
      ritual_significance: 5,
      visual_compliance: 8
    },
    notes: "The bedsheets with Indian patterns. Texture that holds memory."
  },
  {
    id: "IMG_011",
    src: "images/IMG_011.jpg",
    aspect_ratio: "2:3",
    mode: "indirect",
    scores: {
      presence: 9,
      ritual_significance: 9,
      visual_compliance: 6
    },
    notes: "Jewelry in the wooden tray. What remains when the body is absent."
  },
  {
    id: "IMG_012",
    src: "images/IMG_012.jpg",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 5,
      ritual_significance: 6,
      visual_compliance: 9
    },
    notes: "Wire sculpture of a ship. Made by hand. Proof of making."
  },

  // ----------------------------------------
  // RELATIONAL MODE (Others) - People and creatures
  // ----------------------------------------
  {
    id: "IMG_013",
    src: "images/IMG_013.jpg",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Closest witness",
      proximity: "Emotionally near, physically distant",
      activation: "Permission to be unperformed",
      interaction_mode: "spontaneous"
    },
    notes: "The most authentic version exists here."
  },
  {
    id: "IMG_014",
    src: "images/IMG_014.jpg",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Daily companion",
      proximity: "Physically present, emotionally grounding",
      activation: "Care without performance",
      interaction_mode: "spontaneous"
    },
    notes: "Soap being strange and cute. Unperformed moments."
  },
  {
    id: "IMG_015",
    src: "images/IMG_015.jpg",
    aspect_ratio: "1:1",
    mode: "relational",
    annotations: {
      relation: "Shared space",
      proximity: "Daily closeness",
      activation: "Witness to routine",
      interaction_mode: "spontaneous"
    },
    notes: "Sky in an absurd position. Documentation without discrimination."
  },
  {
    id: "IMG_016",
    src: "images/IMG_016.jpg",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Those who came before",
      proximity: "Distance of time",
      activation: "Where the self was formed",
      interaction_mode: "performed"
    },
    notes: "The performance learned early. Exterior managed."
  },
  {
    id: "IMG_017",
    src: "images/IMG_017.jpg",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Inner circle",
      proximity: "Close enough to see the tells",
      activation: "Dilution of pressure",
      interaction_mode: "spontaneous"
    },
    notes: "Company preferred. The self distributed across the frame."
  },
  {
    id: "IMG_018",
    src: "images/IMG_018.jpg",
    aspect_ratio: "9:16",
    mode: "relational",
    annotations: {
      relation: "Longest known",
      proximity: "Distance bridged by time",
      activation: "Continuity of self",
      interaction_mode: "spontaneous"
    },
    notes: "Since the beginning. The anchor of relation."
  },

  // ----------------------------------------
  // INTERIOR MODE (Notes) - Written artifacts
  // ----------------------------------------
  {
    id: "IMG_019",
    src: "images/IMG_019.jpg",
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
    id: "IMG_020",
    src: "images/IMG_020.jpg",
    aspect_ratio: "2:3",
    mode: "interior",
    classification: {
      vulnerability: "partial",
      intent: "for record",
      legibility: "clear"
    },
    notes: "Lists and reminders. The system made visible."
  },
  {
    id: "IMG_021",
    src: "images/IMG_021.jpg",
    aspect_ratio: "1:1",
    mode: "interior",
    classification: {
      vulnerability: "surface",
      intent: "for someone else",
      legibility: "clear"
    },
    notes: "Words edited for sending. The softening of tone."
  },
  {
    id: "IMG_022",
    src: "images/IMG_022.jpg",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "deep",
      intent: "for self",
      legibility: "private language"
    },
    notes: "The doors that cannot be opened. Hidden even here."
  },
  {
    id: "IMG_023",
    src: "images/IMG_023.jpg",
    aspect_ratio: "2:3",
    mode: "interior",
    classification: {
      vulnerability: "partial",
      intent: "for record",
      legibility: "fragmentary"
    },
    notes: "Attempts to understand. Over-explanation in written form."
  },
  {
    id: "IMG_024",
    src: "images/IMG_024.jpg",
    aspect_ratio: "1:1",
    mode: "interior",
    classification: {
      vulnerability: "deep",
      intent: "for self",
      legibility: "fragmentary"
    },
    notes: "The question beneath everything. Am I enough?"
  },

  // ----------------------------------------
  // ADDITIONAL IMAGES (Mixed modes for density)
  // ----------------------------------------
  {
    id: "IMG_025",
    src: "images/IMG_025.jpg",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 6,
      performance: 6,
      space_occupied: 4,
      vulnerability: 4
    },
    gaze: "away",
    notes: ""
  },
  {
    id: "IMG_026",
    src: "images/IMG_026.jpg",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 8,
      ritual_significance: 7,
      visual_compliance: 8
    },
    notes: "The owl lamp. Objects that witness."
  },
  {
    id: "IMG_027",
    src: "images/IMG_027.jpg",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Shared becoming",
      proximity: "Side by side",
      activation: "Mutual witness",
      interaction_mode: "spontaneous"
    },
    notes: ""
  },
  {
    id: "IMG_028",
    src: "images/IMG_028.jpg",
    aspect_ratio: "9:16",
    mode: "direct",
    scores: {
      authenticity: 2,
      performance: 9,
      space_occupied: 8,
      vulnerability: 1
    },
    gaze: "camera",
    notes: "Full performance. The big smile hiding awkwardness."
  },
  {
    id: "IMG_029",
    src: "images/IMG_029.jpg",
    aspect_ratio: "2:3",
    mode: "indirect",
    scores: {
      presence: 7,
      ritual_significance: 6,
      visual_compliance: 7
    },
    notes: "Morning light on objects. Beauty documented."
  },
  {
    id: "IMG_030",
    src: "images/IMG_030.jpg",
    aspect_ratio: "1:1",
    mode: "interior",
    classification: {
      vulnerability: "partial",
      intent: "for record",
      legibility: "clear"
    },
    notes: "Calendar reminders. Birthdays written down because they are forgotten."
  }
];