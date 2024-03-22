/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        playfair: ['"Playfair Display SC", "sans-serif"'],
        tektur: ['"Tektur"', "sans-serif"],
        protestguerrilla: ['"Protest Guerrilla"', "sans-serif"],
        gelasio: ['"Gelasio"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
