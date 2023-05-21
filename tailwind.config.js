/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hijau: "#64C5B1",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
