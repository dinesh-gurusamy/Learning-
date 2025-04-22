module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e1e5f8', // Set plain #e1e5f8 as the primary background color
        accent: '#001f54', // Accent color
        mathew : '#1b56fd', // Lighter shade for the fade effect
      },
      fontFamily: {
        sans: ['Google Sans', 'sans-serif'],// Set Roboto as the default sans-serif font
      },
    },
  },
  plugins: [],

};