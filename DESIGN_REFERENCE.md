# Pure Canada Website - Visual Design Reference

## Color Scheme
```
Primary: #00d7e6 (Bright Cyan)
Secondary: #01b1e2 (Blue)
Dark Text: #2b2b2b
Muted Text: #6f6f6f
Light Gray: #f6fdfe
White: #ffffff
```

## Typography
```
Headings: Cinzel (400-500 weight)
Body: Open Sans (400-600 weight)
Arabic: Tajawal (400-700 weight)

Hero Title: 28px - 44px (clamp)
Section Title: 28px - 36px (clamp)
Body Text: 14px - 16px
Small Text: 11px - 12px
```

## Spacing System
```
Hero padding: 48px top, 56px bottom
Section padding: 64-120px (clamp)
Card padding: 24px - 32px
Gap between items: 16px - 24px
Margin bottom buttons: 24px
```

## Border Radius
```
Hero gallery cards: 6px
Impact/Event cards: 6px
Icons: 10px
Buttons: 8px
Large containers: 10px
```

## Shadow System
```
Subtle: 0 1px 3px rgba(0, 0, 0, 0.05)
Light: 0 2px 6px rgba(0, 0, 0, 0.08)
Medium: 0 4px 12px rgba(0, 0, 0, 0.08)
Heavy: 0 8px 16px rgba(0, 0, 0, 0.12)
Gradient: 0 4px 12px rgba(1, 177, 226, 0.25)
```

## Component Styles

### Hero Section
- Background: White
- Max width: 1140px
- Headline weight: 400
- Description: 15px, 1.8 line-height
- Gallery gap: 16px
- Gallery cards: 220px height

### Impact Cards
- 4 columns on desktop
- Shadow: Subtle
- Border: Ultra-light (rgba(0, 0, 0, 0.03))
- Icon gradient: Primary to Secondary
- Hover lift: 4px
- Padding: 32px 24px

### Event Cards
- Max width: 760px (centered)
- Flex layout (icon + content)
- Icon size: 56px with gradient
- Metadata: 3-column grid
- Hover: Subtle shadow increase
- Border: Ultra-light

### Programs Section
- White background
- Tabs with gradient active state
- Panel with smooth animations
- Icon gradient: Primary to Secondary
- Checklist items with secondary color accent

### About Section
- 2-column grid on desktop
- Pillar cards with subtle shadows
- 3-column values grid (responsive)
- Left border on value items: 3px secondary

### Gallery (Hidden)
- Same as hero gallery style
- 4 columns, masonry layout
- Shows images with captions

### CTA Section
- Gradient background: Secondary to Primary
- White text
- Large headline
- Contact grid with 3 columns
- Responsive on mobile

### Footer
- Dark background: #1a1a1a
- 3-column grid on desktop
- Primary color headings
- Light gray text
- Border top: Ultra-light

## Hover States

### Gallery Cards
- Translate Y: -6px
- Shadow: Increased
- Image: Scale 1.02 (subtle zoom)
- Overlay: Fade in dark
- Title: Fade in and slide up

### Impact Cards
- Translate Y: -4px
- Shadow: Light to medium

### Buttons
- Solid: Maintains gradient, shadow increase
- Ghost: Border color to secondary, background tint

### Navigation Links
- Color: Ink to Secondary
- Underline: Scale X from 0 to 1

## Animation Timing
```
Duration: 0.3s for interactions
Easing: ease (default)
Gallery fade: 0.6s ease
Card stagger: 50ms increments
Button fade: 0.4s ease
Transitions: 0.2-0.3s ease
```

## Responsive Breakpoints

### Desktop (> 900px)
- Hero gallery: 4 columns × 220px
- Impact cards: 4 columns
- Event: Flex horizontal
- About: 2 columns
- Values: 3 columns

### Tablet (768px - 900px)
- Hero gallery: 3 columns × 180px
- Impact cards: 2 columns
- Tall cards: Normal height
- Event: Column layout
- About: 1 column
- Values: 2 columns

### Mobile (< 720px)
- Hero gallery: 1 column × 180px
- Impact cards: 1 or 2 columns
- Event: Full width, stacked
- About: 1 column
- Values: 1 column
- Buttons: Full width

### Ultra Mobile (< 480px)
- Reduced padding
- Smaller fonts
- Minimal gaps
- Full-width interactions

## Show More Feature

### Initial State (3 Images)
- Displays images 1, 2, 3
- Show More button visible
- Button text: "Show More"
- Animation: Fade in

### After Click (8 Images)
- All 8 images displayed
- Button hidden
- New images fade in with stagger
- Smooth grid transition

## Best Practices Applied

1. **Minimalism**: Clean, white backgrounds, minimal elements
2. **Typography**: Light font weights for elegance
3. **Photography**: Large, prominent image display
4. **Spacing**: Generous white space
5. **Consistency**: Uniform styling across components
6. **Performance**: Optimized animations, lazy loading
7. **Accessibility**: Semantic HTML, proper ARIA
8. **Responsiveness**: Mobile-first approach
9. **Hierarchy**: Clear visual focus on imagery
10. **Professionalism**: Sophisticated, polished appearance

## Comparison to Batool Photography

✓ Similar masonry gallery layout
✓ Emphasis on photography
✓ Minimal design language
✓ Light typography
✓ Soft shadows
✓ White space usage
✓ Smooth interactions
✓ Professional aesthetic
✓ Clean typography
✓ Elegant hover states

## Maintenance Notes

- CSS is organized by section with clear comments
- Animation definitions at top of section styles
- Responsive breakpoints grouped at end
- Color values use CSS variables for consistency
- Typography follows hierarchy system
- All measurements use consistent units (px, clamp)
- Hover states paired with base states
- Animations use hardware acceleration

## Future Customization

To adjust the design:
1. Colors: Edit CSS variables in index.css
2. Typography: Modify font sizes and weights in relevant sections
3. Spacing: Adjust padding/margin values
4. Shadows: Update rgba values
5. Animations: Modify duration/delay/easing
6. Border radius: Update radius values
7. Hover effects: Adjust transform/shadow on :hover
8. Layout: Modify grid-template-columns values

---

**Version**: 2.0
**Last Updated**: November 19, 2026
**Status**: Production Ready
