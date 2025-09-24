# CoW DAO Landing Page

A responsive React landing page replica of the CoW DAO homepage, built with React and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Modern UI**: Clean, modern design with hover effects and animations
- **Component-Based**: Modular React components for easy maintenance
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Accessible**: Proper semantic HTML and accessibility considerations

## 🛠️ Tech Stack

- React 18
- Tailwind CSS 3
- HTML5 & CSS3
- JavaScript (ES6+)

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation bar with logo and action buttons
│   ├── Hero.js            # Hero section with main headline and floating shapes  
│   └── Products.js        # Product cards section (CoW Protocol & CoW Swap)
├── App.js                 # Main app component
├── index.js               # React DOM entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Components Overview

### Header Component
- Dark navigation bar with CoW DAO branding
- Navigation links: About, Products, Learn
- Action buttons: "LP on CoW AMM" (green), "Trade on CoW Swap" (blue)
- Fully responsive with mobile menu button

### Hero Section
- Large "Don't get milked!" headline
- Descriptive text with colored pill-shaped highlights:
  - "most user-protective" (orange)
  - "do more" (purple)  
  - "less worry" (blue)
- Soft pastel pink background (#F5E1DF)
- Floating decorative shapes for visual interest

### Products Section
- Two side-by-side product cards
- **CoW Protocol**: Purple gradient with binary art decoration
- **CoW Swap**: Blue gradient with geometric shapes
- Hover effects and animations
- Responsive stacked layout on mobile

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download the project files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## 🎨 Design Customization

### Colors
The project uses custom Tailwind colors defined in `tailwind.config.js`:
- `pastel-pink`: #F5E1DF (hero background)
- `cow-purple`: #8B5CF6 (purple elements)
- `cow-blue`: #06B6D4 (blue elements)
- `cow-green`: #10B981 (green elements)
- `cow-orange`: #F97316 (orange elements)
- `cow-dark`: #1F2937 (dark header)

### Typography
- Font: Inter (Google Fonts)
- Responsive text sizing using Tailwind's responsive prefixes
- Font weights: 300-700

### Responsive Breakpoints
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Stacked layouts on smaller screens
- Optimized touch targets for mobile devices
- Proper text scaling across all screen sizes
- Hidden decorative elements on mobile for cleaner appearance

## 🔧 Development Notes

- All styling done with Tailwind CSS utility classes
- No external UI component libraries used
- Functional React components with hooks
- Optimized for performance and accessibility
- Cross-browser compatible

## 📄 License

This project is for educational/demonstration purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!
