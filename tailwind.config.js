/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/local-components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        success: "#00AC56",
        warning: "#F5BF3D",
        error: "#FF1F7D",
        bg: "#F4F4F4",
        primary: "rgb(90, 190, 150)",
        primaryShade: "rgb(232, 255, 246)",
        redShade: "rgb(255, 175, 182)",
        secondary: "#3A3F51",
      },
      class: {
        active: "border-r-[2px]",
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
