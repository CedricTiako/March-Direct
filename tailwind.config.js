/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green': {
          600: '#4CAF50', // Main green
          700: '#3B8F3F', // Darker green
          800: '#2E7D32', // Even darker
          900: '#1B5E20', // Darkest green
        },
        'beige': {
          100: '#FFF8E1', // Light beige
        },
        'brown': {
          600: '#8D6E63', // Soft brown
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};