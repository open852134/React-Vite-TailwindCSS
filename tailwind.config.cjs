/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1280px",
    },

    colors: {
      almostWhite: "hsl(0, 0%, 98%)",
      mediumGray: "hsl(0, 0%, 41%)",
      almostBlack: "hsl(0, 0%, 8%)",
    },
    extend: {
      boxShadow: {
        navBar: "0px 0px 16px 3px rgba(204,204,204,0.7)",
      },
    },
  },
  plugins: [],
};
