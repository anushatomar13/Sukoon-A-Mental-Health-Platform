/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
        Roca: ['Roca', 'sans-serif'],
        galpike : ['galpike','sans-serif'],
        mioge : ['mioge' , 'sans-serif' ]
      },
    },
  },
  
  plugins: [
    
  ],
}
