/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nice-fonts': ['JetBrains Mono'],
      'robo': ['Roboto'],
      'cartoon': ['Mochiy Pop One']
    },
    colors: {
      'background': '#30304B',
      'black': '#1B1F23',
      'text': '#CEB5CC',
      'gray': '#161A1E',
      'white':'#deeafa',
      'blue': '#A3CBE7',
      'light-gray': '#9C9C9C',
      'button-red':'#f56565',
      'button-green':'#68d391',
      'button-yellow':'#faf089',
      'pink':'#FFDEDE',
      'purple':'#CEACE8',
      'indigo':'#A3CBE7'
    },

    extend: {
      backgroundImage: {
        'backgorund-img': "url('/public/background.png')",
     },
    },
  },
  plugins: [],
}
