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
      'pale-blue':'var(--pale-blue)',
      'light-grey':'var(--light-grey)',
      'grey':'var(--grey)',
      'blue':'var(--blue)',
      'disabled':'var(--disabled)',
      'random-grey':'var(--random-grey)',
      'transparent': 'transparent'
    },
    extend: {
      boxShadow: {
        "button": "0px 4px 15px rgba(0, 0, 0, 0.1)",
        "modal": "0px 20px 40px rgba(0, 0, 0, 0.25)",
        "video-blue": "0px 0px 20px 0px #00E0FF",
        "video-pink": "0px 5.23982px 26.1991px #FF235B",
        "pink": "0px 0px 10px #FF235B",
        "pink-full": "2px 2px 10px #FF235B, -2px -2px 10px #FF235B",
        "blue": "0px 0px 10px #00E0FF",
        "blue-large": "0px 0px 15px #5DF6FF",
        "pink-sm": "0px 4px 20px #FF235B"
      },
      backgroundImage: {
        "main": "url(/bft-bg.jpg)" 
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
    backgroundSize: {
      "main-fill": "101% "
    },
    dropShadow: {
      "accent": "0px 0px 15px #00E0FF" 
    }
  },
  plugins: [],
}

