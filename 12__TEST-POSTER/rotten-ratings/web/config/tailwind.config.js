/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        almostBlack: '#242424',
        lemonLime: '#E6FF00' /* safety green */,
        onyx: '##111111' /* almost black */,
        nero: '#252525' /* dark gray */,
        dolphin: '#7e7f9a' /* purple gray */,
        turquoise: '#40ebd4' /* turquoise */,
        oriolesOrange: '#fe4e1c' /* red orange */,
        sunsetOrange: '#ff6054' /* coral */,
        chartreuse: '#80ff01' /* green */,
        tamarillo: '#911412' /* deep red */,
        eerieBlack: '#1e1e1e' /* almost black */,
        jet: '#353535' /* lighter - almost black rollover */,
      },
      dropShadow: {
        poster: '0px 0px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    fontFamily: {
      modern: ['Abril Fatface', 'cursive'],
      sansSerif: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
