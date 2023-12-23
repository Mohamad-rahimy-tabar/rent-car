/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/fonts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: {
        white: "#ffffff",
        dark: {
          500: "#3563e9",
          600: "#264bc8",
          700: "#1a37a7",
          800: "#102587",
          900: "#0a196f",
        },
        light: {
          100: "#d6e4fd",
          200: "#aec8fc",
          300: "#85a8f8",
          400: "#658df1",
        },
      },
      secondinary: {
        Default: "#1a202c",
        dark: {
          600: "#131825",
          700: "#0d121f",
          800: "#080c19",
          900: "#040815",
        },
        light: {
          100: "#e0e9f4",
          200: "#c3d4e9",
          300: "#90a3bf",
          400: "#596780",
        },
      },
      information: {
        dark: {
          500: "#54a6ff",
          600: "#3d81db",
          700: "#2a60b7",
          800: "#1a4393",
          900: "#102e7a",
        },
        light: {
          100: "#dcf3ff",
          200: "#bae5ff",
          300: "#98d3ff",
          400: "#7ec2ff",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-jakarta)"],
    },
    extend: {
      animation: {
        menuanimation: "menu 3s linear infinite",
      },
      keyframes: {
        menu: {
          "0%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
          "100%": { transform: "rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms")],
};
