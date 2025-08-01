# Multi-Theme React Application

A modern React application showcasing dynamic theme switching capabilities, responsive design, and integration with external APIs. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Multiple theme support (Light, Dark, and Colorful modes)
- 📱 Fully responsive design
- 🛍️ Product showcase with API integration
- 🔄 Dynamic pagination and product limiting
- 📱 Mobile-friendly navigation
- 🎯 Type-safe development with TypeScript
- 🎨 Styled with Tailwind CSS

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Context API for theme management

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/niteshsingh1701/NiteshSingh_ReactJS.git
   cd multi-theme-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:port-number`

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Header.tsx     # Navigation and theme switcher
│   ├── ProductCard.tsx
│   ├── ProductList.tsx
│   └── Sidebar.tsx
├── context/           # React Context providers
│   └── ThemeContext.tsx
├── hooks/             # Custom React hooks
│   └── useFetchProducts.ts
├── pages/             # Route components
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Home.tsx
├── types/             # TypeScript type definitions
└── assets/           # Static assets
```

## Features in Detail

### Theme Switching
- Supports three distinct themes: Light, Dark, and Colorful
- Persists theme preference across sessions
- Smooth transitions between themes

### Product Display
- Fetches products from Fake Store API
- Configurable product limit per page
- Loading states and error handling
- Responsive product grid layout

### Responsive Design
- Mobile-first approach
- Collapsible sidebar for mobile devices
- Adaptive navigation menu
- Optimized for all screen sizes

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Author

Nitesh Singh - [GitHub Profile](https://github.com/niteshsingh1701)

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for product data
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) community for amazing tools and resources
