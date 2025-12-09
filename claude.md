# An Open Book: Digital Archive

## Project Overview

"An Open Book" is a two-part project exploring personal identity as both brand and human experience:
1. **Physical Component:** A brand guidelines book defining rules for self-presentation
2. **Digital Component:** This website—a living archive of images scored against those guidelines

The archive documents identity in four modes: directly (where the self appears), indirectly (objects and traces), relationally (others as mirrors), and interiorly (notes that reveal what images cannot).

This document specifies the requirements for the digital archive website.

---

## Tech Stack

**Required:** HTML + CSS + JavaScript (vanilla)

No frameworks. No libraries unless absolutely necessary. The codebase should be readable and editable by someone with intermediate HTML/CSS/JS knowledge.

---

## Visual Design System

### Typography

**Single typeface only:** Instrument Serif

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');

body {
  font-family: 'Instrument Serif', serif;
  letter-spacing: -0.02em; /* tight tracking */
}
```

### Colors

**Background:** White `#FFFFFF`
**Text:** Black `#000000`

**Mode Colors (for squares and metadata text):**

| Mode | Name | Hex Code |
|------|------|----------|
| Direct (Self) | Black | `#000000` |
| Indirect (Proxies) | Dark Green | `#0C391E` |
| Relational (Others) | Dark Blue | `#151747` |
| Interior (Notes) | Dark Purple | `#37154B` |

```css
:root {
  --color-bg: #FFFFFF;
  --color-text: #000000;
  --color-direct: #000000;
  --color-indirect: #0C391E;
  --color-relational: #151747;
  --color-interior: #37154B;
}
```

---

## Page Structure

There is ONE page only—the archive. No separate landing page.

### Layout Regions

```
┌─────────────────────────────────────────────────────────────┐
│ NAV BAR                                                     │
│ [Live Date/Time]      An Open Book           [i]            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                                                             │
│                    CLOUD OF IMAGES                          │
│                  (volumetric 3D field)                      │
│                                                             │
│                                                             │
├──────────────────┬──────────────────────────────────────────┤
│ FILTER PANEL     │                        METADATA PANEL    │
│ (bottom-left)    │                        (bottom-right)    │
│                  │                                          │
└──────────────────┴──────────────────────────────────────────┘
```

---

## Navigation Bar

**Position:** Fixed at top, full width
**Height:** ~60px
**Background:** White
**Border:** None or very subtle bottom border

### Contents:

**Left — Live Date/Time:**
- Format: `Tuesday, December 10, 2024 — 3:42:17 PM` (or similar readable format)
- Updates in real-time (every second)
- Left-aligned with padding

**Center — Title:**
- Text: "An Open Book"
- Centered horizontally
- Regular weight, ~16-18px

**Right — Info Button:**
- Letter "i" in Instrument Serif
- Inside a circle: white fill, black stroke (1px)
- Circle size: ~28-32px diameter
- On click: Opens an overlay/modal with project description
- Right-aligned with padding

### Info Modal Content:

When the info button is clicked, display an overlay with:

```
AN OPEN BOOK

This archive documents the construction of identity as both
authentic and performed.

Each image is scored against a set of self-defined guidelines—
rules for how the self is presented, documented, and constructed.
The scores measure authenticity, performance, vulnerability, and
presence. They do not judge. They document.

The archive holds four modes of evidence:

Direct — Images where the self appears
Indirect — Objects and spaces that hold identity in absence
Relational — Others whose presence reveals something about the self
Interior — Notes that show what images cannot

The contradictions are the most honest documentation.

[Close]
```

The modal should have a close button and close when clicking outside.

---

## Image Cloud (Main Content Area)

### Concept

Images exist in a **volumetric 3D field**—a loose, floating cluster like a dispersed cloud. They drift slowly and subtly, the way clouds move to the eye. The effect should feel alive but calm, intentional but organic.

### Image Specifications

**Supported aspect ratios:**
- 2:3 (portrait)
- 1:1 (square)
- 9:16 (vertical/story)

**Sizing:**
- All images should appear at the same **height** (recommended: 160-200px)
- Width varies based on aspect ratio
- **No cropping**—aspect ratios are preserved

**Example at 180px height:**
- 2:3 image → 180px tall × 120px wide
- 1:1 image → 180px tall × 180px wide
- 9:16 image → 180px tall × 101px wide

### Cloud Behavior

**Positioning:**
- Images are positioned algorithmically in a 3D space
- X, Y coordinates spread across the viewport (with padding from edges)
- Z-depth creates layering (range: -60px to +60px)
- Positions should feel scattered but balanced—not grid-like, not chaotic

**Movement:**
- Each image drifts very slowly (1-3px per second)
- Movement is sinusoidal/organic, not linear
- Different images move at slightly different rates
- The overall effect: like watching clouds drift imperceptibly

```javascript
// Example drift calculation per frame
const driftX = Math.sin((time + seed) / 10000) * 2;
const driftY = Math.cos((time + seed) / 12000) * 1.5;
```

**Overlapping:**
- Slight overlaps are acceptable and expected
- Overlaps should feel intentional, like images passing through fog
- Image labels must remain readable—ensure z-index layering keeps labels visible

### Image Labels

**Position:** Directly under each image, center-aligned to image width

**Contents:**
- Image name (e.g., `IMG_001`, `IMG_002`)
- Small square indicating mode color

**Layout:**
```
     [IMAGE]
  IMG_001  ■
```

**Square specifications:**
- Size: Approximately the height of the text (~12-14px)
- Color: Matches the image's mode (Direct=black, Indirect=green, etc.)
- Position: To the right of the text, small gap between

**Styling:**
```css
.image-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 8px;
  font-size: 12px;
  color: #000000;
}

.mode-square {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}
```

---

## Filter Panel (Bottom Left)

**Position:** Fixed, bottom-left corner
**Size:** Compact box, approximately 2:3 ratio or as needed to fit content
**Background:** White with subtle border
**Padding:** 16-24px

### Contents

**Title:** "Mode" (small, uppercase, subtle)

**Filter Options:**
Four clickable items, one for each mode:

```
MODE

■ Direct
■ Indirect
■ Relational
■ Interior

[Clear]
```

**Each filter item shows:**
- Small square in the mode's color
- Mode name in black text

**Behavior:**
- Click a mode to filter
- Only one mode can be active at a time
- Clicking the same mode again deselects it (shows all)
- "Clear" button resets to show all images

### Filter Behavior (CRITICAL)

When a filter is selected:

1. **Matching images:** Remain fully visible (opacity: 1)
2. **Non-matching images:** Fade to 25% opacity
3. **Layout does NOT change:** Images stay in their positions
4. **Cloud shape preserved:** No reflow, no rearrangement
5. **Transition:** Smooth fade (300ms)

```css
.image-tile.faded {
  opacity: 0.25;
  pointer-events: none;
}
```

When filter is cleared:
- All images return to full opacity
- No position changes

---

## Metadata Panel (Bottom Right)

**Position:** Fixed, bottom-right corner
**Size:** ~280-320px wide, height as needed (max ~50% viewport height)
**Background:** White with subtle border
**Padding:** 20-24px

### Default State (No Image Selected)

Show placeholder content with all possible metadata fields:

```
IMG_000

Mode: —

Authenticity: —
Performance: —
Space Occupied: —
Vulnerability: —

Gaze: —

Notes: —
```

The panel shows the structure but with em-dashes or blank values.

### When Image Is Selected

**Panel updates to show:**

1. **Image name** (e.g., `IMG_047`)
2. **Mode** label
3. **Scores/Annotations** (based on mode)
4. **Notes** (if any)

**Text color changes** to match the selected image's mode color.

**Example — Direct Mode (Black `#000000`):**
```
IMG_012

Mode: Direct

Authenticity: 7
Performance: 4
Space Occupied: 5
Vulnerability: 6

Gaze: Away

Notes: Unplanned moment. The performed
smile is absent.
```

**Example — Indirect Mode (Green `#0C391E`):**
```
IMG_023

Mode: Indirect

Presence: 8
Ritual Significance: 9
Visual Compliance: 7

Notes: The rings on the wooden tray.
What remains when the body is absent.
```

**Example — Relational Mode (Blue `#151747`):**
```
IMG_034

Mode: Relational

Relation: Closest witness
Proximity: Emotionally near
Activation: Permission to be unperformed
Interaction: Spontaneous

Notes: Identity formed in relation.
```

**Example — Interior Mode (Purple `#37154B`):**
```
IMG_045

Mode: Interior

Vulnerability: Deep
Intent: For self
Legibility: Fragmentary

Notes: 3am thoughts. What images
cannot show.
```

### Panel Behavior

- **Always visible** (persistent)
- **Content updates** when an image is selected
- **Text color changes** to match mode color
- **Smooth transition** when content changes (150ms fade)
- **Scrollable** if content exceeds panel height

---

## Image Interaction

### Hover

When hovering over an image:
- Subtle scale increase: `transform: scale(1.02)`
- Slight brightness increase: `filter: brightness(1.05)`
- Cursor changes to pointer
- Transition: 200ms ease

```css
.image-tile:hover {
  transform: scale(1.02) translateZ(5px);
  filter: brightness(1.05);
  cursor: pointer;
}
```

### Click / Select

When an image is clicked:

1. **Image enlarges slightly** around its original position
   - Scale: 1.15-1.2
   - Does NOT move to center of screen
   - Does NOT become a modal
   - Stays anchored where it was

2. **Z-index increases** so it appears above nearby images

3. **Metadata panel updates** with this image's data

4. **Text color in metadata panel** changes to mode color

5. **Previously selected image** returns to normal state

```css
.image-tile.selected {
  transform: scale(1.18);
  z-index: 100;
}
```

### Deselect

Clicking elsewhere (on background or another image) deselects the current image:
- Image returns to normal scale
- Z-index returns to normal
- Metadata panel returns to default state (or shows new image's data)

---

## Data Structure

### Image Data Format

```javascript
const archiveData = [
  {
    id: "IMG_001",
    src: "images/IMG_001.jpg",
    aspect_ratio: "2:3",  // "2:3" | "1:1" | "9:16"
    mode: "direct",       // "direct" | "indirect" | "relational" | "interior"

    // DIRECT MODE FIELDS:
    scores: {
      authenticity: 7,      // 0-10
      performance: 4,       // 0-10
      space_occupied: 5,    // 0-10
      vulnerability: 6      // 0-10
    },
    gaze: "away",          // "camera" | "away" | "obscured" | "absent"

    notes: "Optional notes about this image."
  },

  {
    id: "IMG_002",
    src: "images/IMG_002.jpg",
    aspect_ratio: "1:1",
    mode: "indirect",

    // INDIRECT MODE FIELDS:
    scores: {
      presence: 8,           // 0-10
      ritual_significance: 9, // 0-10
      visual_compliance: 7    // 0-10
    },

    notes: "Optional notes."
  },

  {
    id: "IMG_003",
    src: "images/IMG_003.jpg",
    aspect_ratio: "2:3",
    mode: "relational",

    // RELATIONAL MODE FIELDS (not scored):
    annotations: {
      relation: "Closest witness",
      proximity: "Emotionally near, physically distant",
      activation: "Permission to be unperformed",
      interaction_mode: "spontaneous"  // "performed" | "spontaneous"
    },

    notes: "Optional notes."
  },

  {
    id: "IMG_004",
    src: "images/IMG_004.jpg",
    aspect_ratio: "9:16",
    mode: "interior",

    // INTERIOR MODE FIELDS:
    classification: {
      vulnerability: "deep",      // "surface" | "partial" | "deep"
      intent: "for self",         // "for self" | "for record" | "for someone else"
      legibility: "fragmentary"   // "clear" | "fragmentary" | "private language"
    },

    notes: "Optional notes."
  }
];
```

### Mode-Specific Fields Reference

**Direct Mode:**
| Field | Type | Values |
|-------|------|--------|
| scores.authenticity | number | 0-10 |
| scores.performance | number | 0-10 |
| scores.space_occupied | number | 0-10 |
| scores.vulnerability | number | 0-10 |
| gaze | string | camera, away, obscured, absent |
| notes | string | optional |

**Indirect Mode:**
| Field | Type | Values |
|-------|------|--------|
| scores.presence | number | 0-10 |
| scores.ritual_significance | number | 0-10 |
| scores.visual_compliance | number | 0-10 |
| notes | string | optional |

**Relational Mode:**
| Field | Type | Values |
|-------|------|--------|
| annotations.relation | string | free text |
| annotations.proximity | string | free text |
| annotations.activation | string | free text |
| annotations.interaction_mode | string | performed, spontaneous |
| notes | string | optional |

**Interior Mode:**
| Field | Type | Values |
|-------|------|--------|
| classification.vulnerability | string | surface, partial, deep |
| classification.intent | string | for self, for record, for someone else |
| classification.legibility | string | clear, fragmentary, private language |
| notes | string | optional |

---

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>An Open Book</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- NAVIGATION BAR -->
  <nav class="nav-bar">
    <div class="nav-left">
      <span id="live-datetime"></span>
    </div>
    <div class="nav-center">
      <span class="nav-title">An Open Book</span>
    </div>
    <div class="nav-right">
      <button id="info-btn" class="info-button">i</button>
    </div>
  </nav>

  <!-- INFO MODAL -->
  <div id="info-modal" class="modal hidden">
    <div class="modal-content">
      <h2>An Open Book</h2>
      <p>This archive documents the construction of identity as both authentic and performed.</p>
      <p>Each image is scored against a set of self-defined guidelines—rules for how the self is presented, documented, and constructed. The scores measure authenticity, performance, vulnerability, and presence. They do not judge. They document.</p>
      <p>The archive holds four modes of evidence:</p>
      <p><strong>Direct</strong> — Images where the self appears<br>
         <strong>Indirect</strong> — Objects and spaces that hold identity in absence<br>
         <strong>Relational</strong> — Others whose presence reveals something about the self<br>
         <strong>Interior</strong> — Notes that show what images cannot</p>
      <p>The contradictions are the most honest documentation.</p>
      <button id="modal-close" class="modal-close">Close</button>
    </div>
  </div>

  <!-- MAIN CLOUD CONTAINER -->
  <main id="cloud-container" class="cloud-container">
    <!-- Images generated by JavaScript -->
  </main>

  <!-- FILTER PANEL -->
  <aside id="filter-panel" class="filter-panel">
    <h3 class="panel-label">Mode</h3>
    <ul class="filter-list">
      <li>
        <button class="filter-btn" data-mode="direct">
          <span class="filter-square" style="background: #000000;"></span>
          <span>Direct</span>
        </button>
      </li>
      <li>
        <button class="filter-btn" data-mode="indirect">
          <span class="filter-square" style="background: #0C391E;"></span>
          <span>Indirect</span>
        </button>
      </li>
      <li>
        <button class="filter-btn" data-mode="relational">
          <span class="filter-square" style="background: #151747;"></span>
          <span>Relational</span>
        </button>
      </li>
      <li>
        <button class="filter-btn" data-mode="interior">
          <span class="filter-square" style="background: #37154B;"></span>
          <span>Interior</span>
        </button>
      </li>
    </ul>
    <button id="clear-filter" class="clear-btn">Clear</button>
  </aside>

  <!-- METADATA PANEL -->
  <aside id="metadata-panel" class="metadata-panel">
    <div id="metadata-content">
      <!-- Content populated by JavaScript -->
    </div>
  </aside>

  <!-- SCRIPTS -->
  <script src="data.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

---

## File Structure

```
/an-open-book
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── data.js             # Image metadata array (archiveData)
├── app.js              # All JavaScript functionality
│
└── /images
    ├── IMG_001.jpg
    ├── IMG_002.jpg
    ├── IMG_003.jpg
    └── ... (up to 50+ images)
```

---

## Complete CSS Reference

See full CSS implementation in the specification above (includes all styles for navigation, modal, cloud, filters, metadata panel, and interactions).

---

## JavaScript Implementation Reference

See full JavaScript implementation in the specification above (includes initialization, datetime updates, modal handling, filtering, cloud generation, drift animation, image selection, and metadata panel updates).

---

## Interaction Summary

| Action | Result |
|--------|--------|
| Page loads | Cloud generates with drift animation, datetime starts updating |
| Hover image | Scale 1.02, brightness +5% |
| Click image | Scale 1.18, z-index 100, stays in position, metadata panel updates with mode color |
| Click elsewhere | Deselect image, metadata panel resets to default |
| Click filter | Non-matching images fade to 25% opacity, layout unchanged |
| Click active filter | Clears filter, all images visible |
| Click Clear | Clears filter, all images visible |
| Click info (i) | Modal opens with project description |
| Click modal close or outside | Modal closes |
| Press Escape | Modal closes (if open) |

---

## Development Checklist

- [ ] All images named IMG_001, IMG_002, etc.
- [ ] All images in /images folder
- [ ] Each image has entry in data.js with correct mode and metadata
- [ ] Tested with 50+ images for performance
- [ ] Tested on different screen sizes
- [ ] Info modal content finalized
- [ ] All mode colors displaying correctly
- [ ] Filter functionality working
- [ ] Metadata panel updating correctly for all modes
- [ ] Drift animation smooth and subtle
- [ ] Z-index layering prevents label overlap
- [ ] Responsive behavior on window resize
- [ ] Cross-browser testing (Chrome, Firefox, Safari)

---

## Future Enhancements (Optional)

- Add search/filter by date range
- Export selected images or filtered view
- Add keyboard navigation (arrow keys, ESC)
- Progressive image loading for better performance
- Mobile-optimized touch interactions
- Permalink to specific image selections
