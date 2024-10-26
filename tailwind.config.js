// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,css}"], // Adjust paths as needed
  theme: {
    extend: {
      backgroundImage: {
        'full-background': "url('../assets/images/backgrounds/childhood_fear.jpg')",
        // Add more custom backgrounds here if needed
      },
      backgroundSize: {
        'cover': 'cover',
        'contain': 'contain',
      },
      backgroundPosition: {
        'center': 'center',
        'top': 'top',
        'bottom': 'bottom',
        // Add more positions if needed
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'], // Custom font family for headings
      },
      colors: {
        'dark-green': '#006400', // Custom dark green color
      },
    },
  },
  plugins: [],
};