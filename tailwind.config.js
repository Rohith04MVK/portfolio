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
      'gray': '#A29587',
      'white':'#deeafa',
      'blue': '#A3CBE7',
      'light-gray': '#9C9C9C',
      'pink':'#FBD2D1',
      'button-red':'#f56565',
      'button-green':'#68d391',
      'button-yellow':'#faf089',
    },

    extend: {
      backgroundImage: {
        'backgorund-img': "url('/public/background.png')",
     },
    },
  },
  plugins: [],
}
