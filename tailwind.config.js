/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#CFD4ED",
          DEFAULT: "#0D28A6",
          dark: "#091B6F",
        },
        alert: {
          danger: "#FA2C5A",
          warning: "#F9CC00",
          success: "#73CA5C",
        },
        info: {
          light: "#6de1f0",
          DEFAULT: "#299FD1",
        },
        neutral: {
          link: "#485466",
          background: "#F2F4F7",
          light: "#d0d5dd",
          gray: "#808991",
          DEFAULT: "#677084",
        },
        disabled: {
          DEFAULT: "#CFD4ED",
        },
        base: {
          white: "#fff",
          black: "#151515",
        },
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
      },
      heading: {
        1: "40px",
        2: "32px",
        3: "30px",
        4: "24px",
        5: "20px",
        6: "16px",
      },
      body: {
        small: "14px",
        regular: "16px",
        large: "18px",
      },
    },
  },
  variants: {},
  plugins: [],
};
