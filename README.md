# Shajahan's Boutique

A modern, responsive website for Shajahan's Boutique — hand-crafted bridal lehengas and ethnic couture. **Threaded in Tradition, Stitched with Legacy.**

## Overview

This is a production-ready React + TypeScript + Vite application featuring:

- ✅ **Modern Stack**: React 19, TypeScript, Vite, Tailwind CSS
- ✅ **Error Handling**: Error Boundary component with graceful error pages
- ✅ **Form Validation**: Contact form with comprehensive validation
- ✅ **Responsive Design**: Mobile-first approach, fully responsive
- ✅ **Performance**: Single-file build with Vite optimizations
- ✅ **Code Quality**: ESLint, Prettier, TypeScript strict mode
- ✅ **SEO**: Meta tags and semantic HTML
- ✅ **Accessibility**: ARIA labels and keyboard navigation

## Project Structure

```
src/
  ├── main.tsx              # Application entry point
  ├── App.tsx               # Main app component with routing
  ├── index.css             # Global styles with Tailwind
  ├── components/
  │   ├── Layout.tsx        # Main layout wrapper
  │   ├── Header.tsx        # Navigation header with mobile menu
  │   ├── Footer.tsx        # Footer with contact info
  │   ├── ErrorBoundary.tsx # React Error Boundary for crash handling
  │   └── ProductCard.tsx   # Reusable product card component
  └── pages/
      ├── Home.tsx          # Homepage with hero section
      ├── Collections.tsx   # Products with filtering
      ├── Contact.tsx       # Contact form with validation
      ├── Error.tsx         # Error page
      └── NotFound.tsx      # 404 page
```

## Setup & Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run type-check

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## Features

### Pages

1. **Home Page** - Hero section with features and call-to-action buttons
2. **Collections** - Filterable product grid with categories (Bridal, Festive, Sarees, Casual)
3. **Contact** - Validated contact form with error handling and success messages
4. **Error Pages** - Custom 404 and error boundary pages

### Components

- **Header** - Sticky navigation with responsive mobile menu
- **Footer** - Contact information and quick navigation links
- **ProductCard** - Reusable component with add-to-cart functionality
- **ErrorBoundary** - Catches React errors gracefully and displays error page

### Key Technologies

- **React 19** with TypeScript for type safety
- **React Router v7** for navigation
- **Tailwind CSS 4** for utility-first styling
- **Vite** for fast builds and development
- **ESLint + Prettier** for code quality and formatting
- **Lucide React** for beautiful icons

## Build & Deployment

The project uses Vite with single-file plugin for optimized production builds:

```bash
npm run build
```

Output: `dist/index.html` - single bundled file ready for deployment

## Development Guidelines

### TypeScript
- Strict mode enabled (`strict: true` in tsconfig.json)
- No unused variables or parameters allowed
- Full type safety across the application

### Code Quality
```bash
npm run format    # Format code with Prettier
npm run lint:fix  # Fix linting issues
npm run type-check # Run TypeScript checks
```

### Error Handling
- All async operations wrapped in try-catch blocks
- Form validation before submission
- Console errors logged for debugging
- User-friendly error messages displayed
- Error Boundary catches React rendering errors

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- ES2020+ JavaScript support required

## Performance

- ⚡ Optimized bundle with Vite
- 📦 Single-file output for faster delivery
- 🚀 Lazy loading with React Router
- 🖼️ Optimized images and assets
- 🎨 CSS optimization via Tailwind purging

## SEO & Accessibility

- Semantic HTML structure
- Meta description tags in index.html
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management for accessibility

## Future Enhancements

- Shopping cart with local storage
- Product detail pages
- Image gallery with optimization
- Customer reviews system
- Email notifications via backend
- Google Analytics integration
- Payment gateway integration (Stripe, Razorpay)

## License

All rights reserved © 2026 Shajahan's Boutique

## Support

For issues or inquiries, contact: info@shajahansboutique.com