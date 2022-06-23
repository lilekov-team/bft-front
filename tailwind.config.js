module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-red' : 'var(--main-red)',
      'main-blue' : 'var(--main-blue)',
      'primary-text':'var(--primary-text)',
      'secondary-text':'var(--secondary-text)',
      'secondary':'var(--secondary)',
      'accent':'var(--accent)',
      'accent-dark':'var(--accent-dark)',
      'error':'var(--error)',
      'white':'var(--white)',
      'plae-blue':'var(--plae-blue)',
      'light-grey':'var(--light-grey)',
      'grey':'var(--grey)',
      'transparent': 'transparent'
    },
    extend: {
      boxShadow: {
        "button": "0px 4px 15px rgba(0, 0, 0, 0.1)"
      }
    },
    fontFamily: {
      "Roboto": "'Roboto', sans-serif"
    },
    screens: {
      'tablet': '390px',
      'desktop': '768px',
      'header-breakpoint': '930px',
      'xl': '1440px'
    },
  },
  plugins: [],
}

