/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        protestguerrilla: ['"Protest Guerrilla"', "sans-serif"],
        gelasio: ['"Gelasio"', "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"]
      },
      colors:{
        secondary: "#4169E1",
      }
    },
  },
  plugins: [],
};
