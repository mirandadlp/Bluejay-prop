# Agree Realty Website Recreation

A static website recreation of agreerealty.com built with HTML, CSS, and vanilla JavaScript.

## Quick Start

Simply open `index.html` in any modern web browser. No build tools or server required.

## Project Structure

```
agree-realty-clone/
├── index.html          # Home page
├── about.html          # About page
├── acquire.html        # Acquire page with regional contacts
├── develop.html        # Develop page with project listings
├── styles.css          # All styles and CSS variables
├── script.js           # All JavaScript functionality
├── assets/             # Images and assets folder
└── README.md           # This file
```

---

## How to Customize

### 1. Edit Text Content

All text content is centralized in the `CONTENT` object at the top of `script.js`. Simply edit the values:

```javascript
const CONTENT = {
    // Site name
    siteName: 'Agree Realty',

    // Navigation labels - edit labels and hrefs
    navLinks: [...],

    // Hero section
    heroHeadline: 'Your headline here',
    heroSubheadline: 'Your subheadline here',
    heroCta: 'Button text',

    // Stats counters - edit values and labels
    statsCounters: [
        { value: 2603, suffix: '', label: 'Properties' },
        // Add more...
    ],

    // Footer content
    footerAddress1: '123 Main Street',
    footerPhone: '(555) 123-4567',
    footerEmail: 'info@example.com',

    // ... and many more
};
```

### 2. Edit Property Listings

Properties are stored in the `PROPERTIES` array in `script.js`:

```javascript
const PROPERTIES = [
    { tenant: 'Tenant Name', city: 'City', state: 'ST', type: 'lease' },
    { tenant: 'Another Tenant', city: 'City', state: 'ST', type: 'sale' },
    // Add more properties...
];
```

- `type: 'lease'` - Shows in "Properties for Lease" tab
- `type: 'sale'` - Shows in "Properties for Sale" tab

### 3. Edit Development Projects

Development projects are in `DEVELOPMENT_PROJECTS` in `script.js`:

```javascript
const DEVELOPMENT_PROJECTS = {
    underConstruction: [
        { tenant: 'Tenant', city: 'City', state: 'ST', sqft: '2,500' },
    ],
    recentlyCompleted: [
        { tenant: 'Tenant', city: 'City', state: 'ST', sqft: '3,000' },
    ]
};
```

### 4. Edit Regional Contacts

Regional contacts are in `CONTENT.regionalContacts`:

```javascript
regionalContacts: [
    {
        region: 'Northeast',
        name: 'John Smith',
        title: 'Senior Vice President',
        email: 'jsmith@example.com',
        phone: '(555) 123-4567'
    },
    // Add more regions...
]
```

### 5. Change Colors

Edit CSS variables in `styles.css` under `:root`:

```css
:root {
    /* Primary brand colors */
    --color-primary: #1a2744;        /* Deep navy */
    --color-primary-light: #2a3d5f;  /* Lighter navy */
    --color-accent: #4a7c59;         /* Forest green */

    /* Update these to match your brand */
}
```

### 6. Change Fonts

1. Update the Google Fonts import in the HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. Update the CSS variable:
```css
--font-primary: 'YourFont', sans-serif;
```

### 7. Replace Placeholder Images

Look for comments like:
```html
<!-- IMAGE PLACEHOLDER: Replace with actual image -->
```

Replace the placeholder divs with actual images:

```html
<!-- Hero image -->
<img src="assets/hero-image.jpg" alt="Description" loading="eager" class="hero-image">

<!-- Content images -->
<img src="assets/about-image.jpg" alt="Description" loading="lazy">
```

**Recommended image sizes:**
- Hero images: 1920x1080 or larger
- Content images: 600x450
- Property cards: 400x250

### 8. Replace Logo

Find the logo SVG in the header and footer:
```html
<svg class="logo-svg" viewBox="0 0 180 40">
    <text x="0" y="28" class="logo-text">AGREE REALTY</text>
</svg>
```

Replace with your own SVG logo or an `<img>` tag.

---

## CSS Variables Reference

### Colors
- `--color-primary` - Primary brand color (navy)
- `--color-primary-light` - Lighter variant
- `--color-accent` - Accent color (green)
- `--bg` - Background color
- `--text` - Main text color
- `--text-muted` - Muted text color
- `--border` - Border color

### Typography
- `--fs-xs` to `--fs-hero` - Font sizes (responsive with clamp)
- `--fw-light` to `--fw-bold` - Font weights
- `--ls-tight` to `--ls-widest` - Letter spacing

### Spacing
- `--space-1` to `--space-32` - Spacing scale (4px to 128px)
- `--container-max` - Max container width (1400px)

### Layout
- `--header-height` - Header height
- `--radius-sm` to `--radius-full` - Border radius values

---

## Features Implemented

- ✅ Sticky header with scroll behavior
- ✅ Mobile responsive navigation
- ✅ Search overlay with keyboard support
- ✅ Animated counters (IntersectionObserver)
- ✅ Scroll reveal animations
- ✅ Property list filtering with debounce
- ✅ Tab switching (Lease/Sale)
- ✅ Accordion components
- ✅ Respects `prefers-reduced-motion`
- ✅ Semantic HTML & ARIA attributes
- ✅ Skip link for accessibility
- ✅ Keyboard navigation support

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

## Performance Notes

- All images should use `loading="lazy"` except hero
- JavaScript is deferred
- CSS uses efficient selectors
- Animations use `transform` and `opacity` for GPU acceleration
- Intersection Observer for scroll-triggered effects

---

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigable
- Skip to main content link
- Focus indicators
- Reduced motion support
