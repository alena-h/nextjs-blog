/** @type {import('tailwindcss').Config} */
/* eslint-disable */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Adjust paths as per your project
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/**/*.{html,js,ts,jsx,tsx,mdx}", // More specific path
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle at center, rgba(81, 159, 165, 0.3), transparent 70%)",
      },
      colors: {
        "background-main": "#1b2626",
        "background-dark": "#17191B",
        "primary-font-blue": "#EAF3F3",
        "secondary-font-pink": "#e8776a",
        "tertiary-font-action-blue": "#2DA3AC",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-30px)" },
          "50%": { transform: "translateY(0px)" },
          "75%": { transform: "translateY(30px)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-500px)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(500px)" },
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
        bounce: "bounce 0.6s ease-out",
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
