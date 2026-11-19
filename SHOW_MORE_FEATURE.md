# Show More Feature Implementation

## Overview
Added a "Show More" feature to the hero gallery that displays only 3 images by default and loads all 8 images when the user clicks the "Show More" button.

## Implementation Details

### Component Changes (Hero.jsx)
- **Added State Management**: `useState` hook to track whether all images are shown
- **Dynamic Image Slicing**: `displayedImages = showAll ? HERO_IMAGES : HERO_IMAGES.slice(0, 3)`
- **Conditional Button Rendering**: "Show More" button only displays when not showing all images
- **Click Handler**: `onClick={() => setShowAll(true)}` to toggle visibility

### Key Features
1. **Initial Load**: Shows exactly 3 images (1 full-width, 1 tall card, 1 full-width)
2. **Smooth Transition**: Gallery and new images animate in smoothly
3. **Button Placement**: "Show More" button centered below the gallery
4. **Accessibility**: Button uses semantic HTML with proper styling

### CSS Animations Added

#### Gallery Animation
```css
.hero__gallery {
  animation: gallery-fade-in 0.6s ease;
}

@keyframes gallery-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Card Stagger Animation
Each card animates in with a staggered delay:
- Card 1: 50ms
- Card 2: 100ms
- Card 3: 150ms
- Card 4: 200ms
- Card 5: 250ms
- Card 6: 300ms
- Card 7: 350ms
- Card 8: 400ms

#### Show More Button
```css
.hero__show-more {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  animation: fade-in 0.4s ease;
}
```

## Responsive Behavior

### Desktop (> 900px)
- Initial: 4-column grid with 3 cards visible
  - Card 1: 240px height
  - Card 2: 480px height (2 rows)
  - Card 3: 240px height
- After "Show More": Full 8-card masonry grid
  - Cards 2 & 5 span 2 rows

### Tablet (< 900px)
- Grid changes to 2 columns
- Tall cards return to normal height: `grid-row: span 1`
- More balanced layout for medium screens

### Mobile (< 720px)
- Single column layout
- All cards same height: 200px
- Responsive stacking

## User Experience

### Initial State (3 Photos)
```
┌─────────────────────────┐
│   Photo 1 (240px)       │
├─────────────────────────┤
│   Photo 2 (480px tall)  │
│                         │
├─────────────────────────┤
│   Photo 3 (240px)       │
└─────────────────────────┘
     [Show More Button]
```

### After Clicking "Show More" (8 Photos)
```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│   Photo 1    │   Photo 2    │   Photo 4    │   Photo 7    │
│  (240px)     │  (480px tall)│  (240px)     │  (240px)     │
├──────────────┤              ├──────────────┼──────────────┤
│   Photo 3    │              │   Photo 5    │   Photo 8    │
│  (240px)     │              │  (480px tall)│  (240px)     │
├──────────────┼──────────────┤              ├──────────────┤
│   Photo 6    │   Photo 8    │              │   Photo ?    │
│  (240px)     │  (240px)     │              │  (240px)     │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

## Code Structure

### Hero Component State
```jsx
const [showAll, setShowAll] = useState(false);
const displayedImages = showAll ? HERO_IMAGES : HERO_IMAGES.slice(0, 3);
```

### Conditional Rendering
```jsx
{displayedImages.map((img, idx) => (
  // Gallery cards
))}

{!showAll && (
  <div className="hero__show-more">
    <button 
      className="btn btn--solid"
      onClick={() => setShowAll(true)}
    >
      Show More
    </button>
  </div>
)}
```

## Performance Considerations
- All images are imported upfront (can be optimized with lazy loading later)
- Smooth CSS animations use GPU acceleration
- Staggered animations prevent layout thrashing
- Button removal is instant (no re-render of entire gallery)

## Browser Compatibility
- Modern browsers with CSS Grid support
- CSS animations work in all major browsers
- React hooks supported in all modern versions
- Fallback styling for older browsers

## Future Enhancement Opportunities
1. **Infinite Scroll**: Load more images as user scrolls
2. **Image Lightbox**: Click to view full-size image
3. **Filter/Categories**: Group images by category
4. **Image Lazy Loading**: Load images only when needed
5. **Pagination**: Show X images per "page"
6. **Load Animation**: Skeleton loading while images fetch
7. **Dynamic Counts**: Make initial count configurable

## Testing Checklist
✅ Shows 3 images initially
✅ Show More button appears correctly
✅ Clicking Show More displays all 8 images
✅ Animations are smooth
✅ Responsive on all breakpoints
✅ No console errors
✅ Button styling matches design system
✅ Hover states work correctly
✅ Mobile layout is proper

## Updated Files
1. `client/src/components/Hero.jsx` - Added state and conditional rendering
2. `client/src/App.css` - Added animations for gallery and button
