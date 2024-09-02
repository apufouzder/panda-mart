/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#244d4d',
        'black': '#1e293b',
        'lightBlack': '#f8fafc',
        'white': '#ffffff',
        
      },
    },
    
  },
  plugins: [],
}

