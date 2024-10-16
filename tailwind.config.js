/** @type {import('tailwindcss').Config} */
/* eslint-disable */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle at center, rgba(81, 159, 165, 0.2), transparent 70%)",
      },
      colors: {
        "background-main": "#1b2626",
        "background-dark": "#17191B",
        "primary-font-blue": "#EAF3F3",
        "secondary-font-pink": "#e8776a",
        "tertiary-font-action-blue": "#2DA3AC",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fallDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(5deg)" },
        },
        fly: {
          "0%": {
            offsetDistance: "0%",
            transform: "scale(1)",
          },
          "50%": {
            offsetDistance: "50%",
            transform: "rotate(45deg) scale(3)",
          },
          "75%": {
            offsetDistance: "75%",
            transform: "rotate(45deg) scale(1.5)",
          },
          "100%": {
            offsetDistance: "100%",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-out",
        slideInRight: "slideInRight 1s ease-out forwards",
        fallDown: "fallDown 1s ease-out forwards",
        wiggle: "wiggle 0.5s ease-in-out 2",
        fly: "fly 2s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};