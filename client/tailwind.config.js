/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'scroll': "url('https://www.pngkey.com/png/full/9-93927_parchment-scroll-png-banner-library-download-old-scroll.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
      
    },
    
  },
  plugins: [require("rippleui")],
}

