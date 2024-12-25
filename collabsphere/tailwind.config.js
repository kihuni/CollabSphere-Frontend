module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#0f172a',
        'accent-color': '#3b82f6',
        'text-color': '#334155',
        'bg-light': '#f1f5f9',
        'bg-dark': '#1e293b',
        'white': '#ffffff',
        'error-color': '#ef4444',
        'success-color': '#22c55e',
      },
      spacing: {
        'sidebar-width': '250px',
        'header-height': '60px',
        'bottom-nav-height': '60px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};