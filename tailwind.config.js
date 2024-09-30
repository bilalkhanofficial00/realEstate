// @ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JavaScript and TypeScript files in the src directory
    './public/index.html',        // Include the main HTML file
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'], // Add the Google Font here
      },
    
      
      container: {
        center: true, // Center the container by default
        padding: {
          DEFAULT: '1rem', // Default padding for all screen sizes
          sm: '1rem',      // Padding for small screens
          md: '2rem',      // Padding for medium screens
          lg: '3rem',      // Padding for large screens
          xl: '4rem',      // Padding for extra-large screens
        },
        screens: {
          sm: '100%',    // 100% width for small screens
          md: '100%',    // 100% width for medium screens
          lg: '1024px',  // Max width of 1024px for large screens
          xl: '1280px',  // Max width of 1280px for extra-large screens
          '2xl': '1536px' // Max width of 1536px for double extra-large screens
        }
      },

      animation: {
        'slide-left': 'slideLeft 5s linear infinite',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
