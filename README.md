# CoW DAO Landing Page

A responsive React landing page that replicates the design and layout of the CoW DAO homepage using Tailwind CSS.

## Features

- 🚀 **Modern React**: Built with functional components and hooks
- 🎨 **Tailwind CSS**: Responsive design with custom color palette
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- ✨ **Interactive Elements**: Hover effects and smooth transitions
- 🎯 **Pixel-Perfect**: Faithful recreation of the original design

## Tech Stack

- React 18
- Tailwind CSS 3
- PostCSS & Autoprefixer
- Inter Font from Google Fonts

## Project Structure

```
src/
├── components/
│   ├── Header.js      # Navigation bar with logo and action buttons
│   ├── Hero.js        # Hero section with main headline and floating shapes
│   └── Products.js    # Product cards section (CoW Protocol & CoW Swap)
├── App.js            # Main app component
├── index.js          # React entry point
└── index.css         # Tailwind CSS imports and custom styles
```

## Design Features

### Header
- Dark navigation bar with CoW DAO logo
- Navigation links: About, Products, Learn
- Two action buttons: "LP on CoW AMM" (green) and "Trade on CoW Swap" (blue)
- Responsive design with mobile menu button

### Hero Section
- Large "Don't get milked!" headline
- Subheading with colored pill-shaped highlights:
  - "most user-protective" (orange)
  - "do more" (purple)
  - "less worry" (blue)
- Soft pastel pink background (#F5E1DF)
- Floating geometric shapes for visual interest

### Product Cards
- Two side-by-side cards with gradient backgrounds
- **CoW Protocol**: Deep purple gradient with binary code patterns
- **CoW Swap**: Sky blue gradient with circular patterns
- Hover effects with scale transforms
- Call-to-action buttons

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` to see the landing page.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Responsive Breakpoints

The design uses Tailwind's responsive breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm-lg)
- **Desktop**: > 1024px (lg+)

## Custom Colors

The project uses a custom Tailwind color palette:
- `pastel-pink`: #F5E1DF (Hero background)
- `cow-purple`: #8B5CF6 (Purple accents)
- `cow-blue`: #06B6D4 (Blue accents)
- `cow-green`: #10B981 (Green accents)
- `cow-orange`: #F97316 (Orange accents)
- `cow-dark`: #1F2937 (Dark backgrounds)

## Browser Support

This project supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational and demonstration purposes.
