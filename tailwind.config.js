/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Pin: "#C04CFD",
        Whi: "#F0F7f4",
        Blu: "#00A6ED",
        Pur: "#442277",
        Bl: "#151512",
        bg: "#1E1E1E",
        Gr: "#04E824",
      },
      backgroundImage: {
        pattern: "url('/src/assets/star.jpg.jpg')",
      },
      fontFamily: {
        orb: ["Orbitron", "sans-serif"],
        mic: ["Michroma", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
