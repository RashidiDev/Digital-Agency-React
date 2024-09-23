/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Barlow"],
    },
    colors: {
      "primary-900": "#9EFF00",
      "primary-800": "#B1FF33",
      "primary-700": "#C5FF66",
      "primary-600": "#D8FF99",
      "primary-100": "#FDFFFA",
      "gray-900": "#191919",
      "gray-800": "#262626",
      "gray-700": "#333333",
      "gray-400": "#656567",
      "gray-300": "#98989A",
      "gray-100": "#E6E6E6",
      white: "#fff",
    },
    screens: {
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {},
  },
  plugins: [],
};
