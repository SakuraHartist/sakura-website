// tailwind.config.js
module.exports = {
  content: [
    "./index.html",           // Include index.html in the root
    "./src/**/*.{html,css}"    // Include all HTML and CSS files in the src directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        'full-background': "url('../assets/images/backgrounds/childhood_fear.jpg')",
      },
      backgroundSize: {
        'cover': 'cover',
        'contain': 'contain',
      },
      backgroundPosition: {
        'center': 'center',
        'top': 'top',
        'bottom': 'bottom',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'dark-green': '#006400',
      },
    },
  },
  plugins: [],
};