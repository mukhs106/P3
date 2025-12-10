// ========================================
// IMAGE ARCHIVE DATA
// ========================================

const archiveData = [
  // ----------------------------------------
  // DIRECT MODE (Self)
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
    src: "IMG/IMG_002.jpg",
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
    src: "IMG/IMG_003.jpg",
    aspect_ratio: "2:3",
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
    src: "IMG/IMG_004.jpg",
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
    src: "IMG/IMG_005.jpg",
    aspect_ratio: "2:3",
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
    src: "IMG/IMG_006.jpg",
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
  {
    id: "IMG_019",
    src: "IMG/IMG_19.JPG",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 6,
      performance: 6,
      space_occupied: 4,
      vulnerability: 4
    },
    gaze: "away",
    notes: "Somewhere between. Neither fully on nor fully off."
  },
  {
    id: "IMG_024",
    src: "IMG/IMG_024.JPG",
    aspect_ratio: "2:3",
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
    id: "IMG_025",
    src: "IMG/IMG_025.JPG",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 7,
      performance: 3,
      space_occupied: 3,
      vulnerability: 6
    },
    gaze: "obscured",
    notes: ""
  },
  {
    id: "IMG_026",
    src: "IMG/IMG_026.JPG",
    aspect_ratio: "1:1",
    mode: "direct",
    scores: {
      authenticity: 8,
      performance: 2,
      space_occupied: 4,
      vulnerability: 7
    },
    gaze: "away",
    notes: "Unguarded. The audience momentarily forgotten."
  },
  {
    id: "IMG_101",
    src: "IMG/IMG_101.JPG",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 4,
      performance: 6,
      space_occupied: 5,
      vulnerability: 3
    },
    gaze: "camera",
    notes: ""
  },
  {
    id: "IMG_102",
    src: "IMG/IMG_102.JPG",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 6,
      performance: 5,
      space_occupied: 4,
      vulnerability: 5
    },
    gaze: "away",
    notes: "The gaze directed elsewhere. Still aware of the frame."
  },
  {
    id: "IMG_103",
    src: "IMG/IMG_103.JPG",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 9,
      performance: 2,
      space_occupied: 3,
      vulnerability: 8
    },
    gaze: "absent",
    notes: "Almost candid. Almost."
  },
  {
    id: "IMG_2588",
    src: "IMG/IMG_2588.JPG",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 5,
      performance: 6,
      space_occupied: 6,
      vulnerability: 4
    },
    gaze: "camera",
    notes: ""
  },
  {
    id: "IMG_3011",
    src: "IMG/IMG_3011.JPG",
    aspect_ratio: "2:3",
    mode: "direct",
    scores: {
      authenticity: 7,
      performance: 4,
      space_occupied: 4,
      vulnerability: 6
    },
    gaze: "away",
    notes: "Looking elsewhere. The performance relaxed."
  },

  // ----------------------------------------
  // INDIRECT MODE (Proxies)
  // ----------------------------------------
  {
    id: "IMG_007",
    src: "IMG/IMG_007.jpg",
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
    src: "IMG/IMG_008.jpg",
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
    src: "IMG/IMG_009.JPG",
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
    id: "IMG_027",
    src: "IMG/IMG_027.JPG",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 8,
      ritual_significance: 9,
      visual_compliance: 8
    },
    notes: "Jewelry in the wooden tray. What remains when the body is absent."
  },
  {
    id: "IMG_028",
    src: "IMG/IMG_028.JPG",
    aspect_ratio: "2:3",
    mode: "indirect",
    scores: {
      presence: 6,
      ritual_significance: 5,
      visual_compliance: 8
    },
    notes: "Objects arranged by internal logic. Chaos to outsiders, system to self."
  },
  {
    id: "IMG_029",
    src: "IMG/IMG_029.JPG",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 7,
      ritual_significance: 6,
      visual_compliance: 9
    },
    notes: "Morning light on objects. Beauty documented."
  },
  {
    id: "IMG_030",
    src: "IMG/IMG_030.jpg",
    aspect_ratio: "2:3",
    mode: "indirect",
    scores: {
      presence: 9,
      ritual_significance: 8,
      visual_compliance: 7
    },
    notes: "Wire sculpture of a ship. Made by hand. Proof of making."
  },
  {
    id: "IMG_104",
    src: "IMG/IMG_104.JPG",
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
    id: "IMG_105",
    src: "IMG/IMG_105.JPG",
    aspect_ratio: "2:3",
    mode: "indirect",
    scores: {
      presence: 5,
      ritual_significance: 6,
      visual_compliance: 9
    },
    notes: ""
  },
  {
    id: "IMG_106",
    src: "IMG/IMG_106.JPG",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 7,
      ritual_significance: 8,
      visual_compliance: 7
    },
    notes: "Bedsheets with Indian patterns. Texture that holds memory."
  },
  {
    id: "IMG_107",
    src: "IMG/IMG_107.jpg",
    aspect_ratio: "2:3",
    mode: "indirect",
    scores: {
      presence: 9,
      ritual_significance: 9,
      visual_compliance: 6
    },
    notes: "The plants. Life that doesn't demand anything back."
  },
  {
    id: "IMG_3201",
    src: "IMG/IMG_3201.JPG",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 6,
      ritual_significance: 5,
      visual_compliance: 8
    },
    notes: ""
  },
  {
    id: "IMG_6595",
    src: "IMG/IMG_6595.JPG",
    aspect_ratio: "2:3",
    mode: "indirect",
    scores: {
      presence: 8,
      ritual_significance: 7,
      visual_compliance: 8
    },
    notes: "Space as identity. The room when empty still holds the self."
  },
  {
    id: "IMG_8029",
    src: "IMG/IMG_8029.JPG",
    aspect_ratio: "1:1",
    mode: "indirect",
    scores: {
      presence: 7,
      ritual_significance: 6,
      visual_compliance: 7
    },
    notes: "Trinkets accumulated. Each one proof of a moment."
  },

  // ----------------------------------------
  // RELATIONAL MODE (Others)
  // ----------------------------------------
  {
    id: "IMG_010",
    src: "IMG/IMG_010.HEIC",
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
    id: "IMG_011",
    src: "IMG/IMG_011.HEIC",
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
    id: "IMG_012",
    src: "IMG/IMG_012.HEIC",
    aspect_ratio: "1:1",
    mode: "relational",
    annotations: {
      relation: "Daily companion",
      proximity: "Physically present",
      activation: "Witness to routine",
      interaction_mode: "spontaneous"
    },
    notes: "Sky in an absurd position. Documentation without discrimination."
  },
  {
    id: "IMG_013",
    src: "IMG/IMG_013.heic",
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
    id: "IMG_014",
    src: "IMG/IMG_014.HEIC",
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
    id: "IMG_015",
    src: "IMG/IMG_015.HEIC",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Longest known",
      proximity: "Distance bridged by time",
      activation: "Continuity of self",
      interaction_mode: "spontaneous"
    },
    notes: "Since the beginning. The anchor of relation."
  },
  {
    id: "IMG_016",
    src: "IMG/IMG_016.HEIC",
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
    id: "IMG_017",
    src: "IMG/IMG_017.HEIC",
    aspect_ratio: "1:1",
    mode: "relational",
    annotations: {
      relation: "Inner circle",
      proximity: "Daily closeness",
      activation: "Safety to fail",
      interaction_mode: "spontaneous"
    },
    notes: "With them, the doors open further."
  },
  {
    id: "IMG_018",
    src: "IMG/IMG_018.HEIC",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Family",
      proximity: "Always there",
      activation: "Origin of performance",
      interaction_mode: "performed"
    },
    notes: "They don't know everything. The performance continues."
  },
  {
    id: "IMG_1290",
    src: "IMG/IMG_1290.HEIC",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Daily companion",
      proximity: "Constant presence",
      activation: "Unperformed care",
      interaction_mode: "spontaneous"
    },
    notes: "The cats. Life that asks nothing but presence."
  },
  {
    id: "IMG_2903",
    src: "IMG/IMG_2903.HEIC",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Inner circle",
      proximity: "Emotionally near",
      activation: "Permission to rest",
      interaction_mode: "spontaneous"
    },
    notes: ""
  },
  {
    id: "IMG_2965",
    src: "IMG/IMG_2965.HEIC",
    aspect_ratio: "1:1",
    mode: "relational",
    annotations: {
      relation: "Shared space",
      proximity: "Physical closeness",
      activation: "Witness without judgment",
      interaction_mode: "spontaneous"
    },
    notes: "Identity formed in proximity."
  },
  {
    id: "IMG_3042",
    src: "IMG/IMG_3042.HEIC",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Chosen family",
      proximity: "Built over time",
      activation: "Proof of being loved",
      interaction_mode: "spontaneous"
    },
    notes: "The people who stayed."
  },
  {
    id: "IMG_3252",
    src: "IMG/IMG_3252.HEIC",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Connection",
      proximity: "Variable",
      activation: "Reflection of different selves",
      interaction_mode: "performed"
    },
    notes: ""
  },
  {
    id: "IMG_3627",
    src: "IMG/IMG_3627.HEIC",
    aspect_ratio: "2:3",
    mode: "relational",
    annotations: {
      relation: "Shared history",
      proximity: "Deep familiarity",
      activation: "Memory keeper",
      interaction_mode: "spontaneous"
    },
    notes: "They remember versions of me I've forgotten."
  },

  // ----------------------------------------
  // INTERIOR MODE (Notes)
  // ----------------------------------------
  {
    id: "IMG_020",
    src: "IMG/IMG_020.HEIC",
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
    id: "IMG_021",
    src: "IMG/IMG_21.HEIC",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "partial",
      intent: "for record",
      legibility: "clear"
    },
    notes: "Lists and reminders. The system made visible."
  },
  {
    id: "IMG_022",
    src: "IMG/IMG_22.HEIC",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "surface",
      intent: "for someone else",
      legibility: "clear"
    },
    notes: "Words edited for sending. The softening of tone."
  },
  {
    id: "IMG_023",
    src: "IMG/IMG_023.HEIC",
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
    id: "IMG_031",
    src: "IMG/IMG_031.HEIC",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "partial",
      intent: "for record",
      legibility: "fragmentary"
    },
    notes: "Attempts to understand. Over-explanation in written form."
  },
  {
    id: "IMG_3902",
    src: "IMG/IMG_3902.HEIC",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "deep",
      intent: "for self",
      legibility: "fragmentary"
    },
    notes: "The question beneath everything. Am I enough?"
  },
  {
    id: "IMG_3920",
    src: "IMG/IMG_3920.HEIC",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "partial",
      intent: "for record",
      legibility: "clear"
    },
    notes: "Calendar reminders. Birthdays written down because they are forgotten."
  },
  {
    id: "IMG_3938",
    src: "IMG/IMG_3938.HEIC",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "surface",
      intent: "for someone else",
      legibility: "clear"
    },
    notes: "The message before sending. Rehearsed."
  },
  {
    id: "IMG_3957",
    src: "IMG/IMG_3957.HEIC",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "deep",
      intent: "for self",
      legibility: "private language"
    },
    notes: "Interior monologue. The audience only imagined."
  },
  {
    id: "IMG_3961",
    src: "IMG/IMG_3961.HEIC",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "partial",
      intent: "for record",
      legibility: "fragmentary"
    },
    notes: ""
  },
  {
    id: "IMG_5341",
    src: "IMG/IMG_5341.HEIC",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "deep",
      intent: "for self",
      legibility: "fragmentary"
    },
    notes: "The things not said. Documented anyway."
  },
  {
    id: "IMG_8654",
    src: "IMG/IMG_8654.HEIC",
    aspect_ratio: "9:16",
    mode: "interior",
    classification: {
      vulnerability: "surface",
      intent: "for record",
      legibility: "clear"
    },
    notes: "Notes to self. The system of remembering."
  },
  {
    id: "IMG_A",
    src: "IMG/IMG.JPG",
    aspect_ratio: "2:3",
    mode: "interior",
    classification: {
      vulnerability: "partial",
      intent: "for self",
      legibility: "fragmentary"
    },
    notes: "Unnamed. Uncategorized. Still evidence."
  },
  {
    id: "IMG_B",
    src: "IMG/IMGG.JPG",
    aspect_ratio: "2:3",
    mode: "interior",
    classification: {
      vulnerability: "deep",
      intent: "for self",
      legibility: "private language"
    },
    notes: "What the archive cannot fully hold."
  }
];