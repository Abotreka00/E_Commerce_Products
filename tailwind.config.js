/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redBisic: "#dc2626",
        hoverRedBisic: "#b91c1c",
      },
    },
  },
  plugins: [],
};
