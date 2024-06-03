/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
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
      },
    },
  },
  plugins: [],
};
