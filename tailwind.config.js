/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mybgColor: "rgba(255, 255, 255, 0.3)",
      },
      boxShadow: {
        customboxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      borderColor: {
        customBorderColor: "rgba(255, 255, 255, 0.18)",
      },

      borderRadius: {
        customBorderRadius: "10px",
      },
      screens: {
        mr: "344px",
      },
    },
  },
  plugins: [],
};
