# An Open Book: Digital Archive

A single-page web application exploring personal identity through a 3D volumetric cloud of images.

## Quick Start

1. Add your images to the `/images` folder (named IMG_001.jpg, IMG_002.jpg, etc.)
2. Update `data.js` with metadata for each image
3. Open `index.html` in a web browser

## Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling (including 3D transforms)
- **Vanilla JavaScript** - Functionality
- **No frameworks or libraries** - Pure, readable code

## Project Structure

```
/P3
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── data.js             # Image metadata array
├── app.js              # All JavaScript functionality
├── claude.md           # Complete specification
├── README.md           # This file
└── images/             # Image assets
    ├── IMG_001.jpg
    ├── IMG_002.jpg
    └── ...
```

## Four Modes of Identity

1. **Direct** (Black #000000) - Images where the self appears
2. **Indirect** (Dark Green #0C391E) - Objects and spaces that hold identity
3. **Relational** (Dark Blue #151747) - Others as mirrors of self
4. **Interior** (Dark Purple #37154B) - Notes and thoughts

## Features

- **3D Volumetric Cloud** - Images drift in 3D space with subtle animation
- **Mode Filtering** - Filter by identity mode without changing layout
- **Dynamic Metadata** - Context-aware panel that adapts to each image's mode
- **Real-time Clock** - Live date/time display
- **Modal Info** - Project description overlay

## Development Notes

- Images maintain consistent height (180px) with varying widths based on aspect ratio
- Supports three aspect ratios: 2:3, 1:1, and 9:16
- All animations use CSS transforms for optimal performance
- Z-index based on depth creates natural layering

## See Also

- `claude.md` - Complete technical specification
