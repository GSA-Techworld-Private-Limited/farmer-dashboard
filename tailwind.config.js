/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        inter: "Inter, sans-serif",
      },
      borderRadius: {
        lg: "10px",
        "3xl": "30px",
      },
      colors: {
        primary: "#366804",
        "light-green": "#3F7E00",
        gray: "#A6A6A6",
      },
      backgroundImage: {
        hero: "linear-gradient(180deg, #3F7E00 0%, #336205 100%)",
        "nav-bg": "linear-gradient(103.57deg, #336205 37.57%, #3F7E00 54.11%)",
        farmer: "linear-gradient(244.17deg, #00B9F2 7.43%, #1D3FB7 109.05%)",
        vendors: "linear-gradient(245.13deg, #A5CD39 1.84%, #31D277 86.18%)",
        nurseries: "linear-gradient(60.81deg, #4D44B5 4.74%, #A8A1FE 84.78%)",
        employees: "linear-gradient(69.6deg, #FF4444 18.62%, #FE8787 97.37%)",
        experts: "linear-gradient(69.6deg, #E35C00 18.62%, #FD7B22 97.37%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
