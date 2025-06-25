/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",      
        secondary: "#F59E0B",    
        accent: "#10B981",       
        card: "#F3F4F6",         
        border: "#E5E7EB",     
        background: "#000",    
        dark: "#1F2937",          
      },
    },
  },
  plugins: [],
}
