# Images Directory

Place your archive images in this directory.

## Naming Convention

Images should be named sequentially:
- `IMG_001.jpg`
- `IMG_002.jpg`
- `IMG_003.jpg`
- etc.

## Supported Formats

- **File types:** JPG, JPEG, PNG
- **Aspect ratios:**
  - 2:3 (portrait) - e.g., 1200×1800px
  - 1:1 (square) - e.g., 1200×1200px
  - 9:16 (vertical/story) - e.g., 1080×1920px

## Image Guidelines

1. **Consistent height:** All images will display at 180px height (width varies by aspect ratio)
2. **Quality:** Use high-quality images, but optimize file size for web (recommended max: 500KB per image)
3. **No cropping:** Aspect ratios will be preserved - choose one of the three supported ratios

## Adding Images

1. Add image files to this directory
2. Update `data.js` with metadata for each image
3. Match the `id` in data.js to the filename (e.g., `IMG_001` → `IMG_001.jpg`)

## Example

If you add `IMG_007.jpg` to this directory, add a corresponding entry in `data.js`:

```javascript
{
  id: "IMG_007",
  src: "images/IMG_007.jpg",
  aspect_ratio: "2:3",
  mode: "direct",
  // ... rest of metadata
}
```
