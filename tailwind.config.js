/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [
    "./dist/**/*.html"
  ],
  content: ["./dist/index.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    colors: {
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
      "white": "#FFFF",
      "gray": "#E0E0E0",
      "graybg": "#9E9E9E",
      "black": "#000000",
      "gray900": "#111827",
      "gray700": "#374151",
      "gray800": "#1F2937",
    },
   
    fontFamily: { 
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('./img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('./img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('./img/yosemite.jpg')",
			  'LA': "url('./img/LA.jpg')",
			  'seattle': "url('./img/seattle.jpg')",
			  'new_york': "url('./img/new_york.jpg')",
			  'norway': "url('./img/norway.jpg')",
			  'sydney': "url('./img/sydney.jpg')",
			  'miami': "url('./img/miami.jpg')",
			  'switzerland': "url('./img/switzerland.jpg')",
			  'bali': "url('./img/bali.jpg')",
			  'norway': "url('./img/norway.jpg')",
			  'chicago': "url('./img/chicago.jpg')",
			  'europe': "url('./img/europe.jpg')",
			  'iceland': "url('./img/iceland.jpg')",
      }
    },
  },
  plugins: [],
}

