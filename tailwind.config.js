/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#C6DE41",
        secondary: "#2D6E7E",
        dark: "#153B44",
        dark2: "#0c677d",
        darker: "#1d1d1d",
      },
      backgroundImage: (theme) => ({
        "gradient-1":
          "linear-gradient(90deg, rgba(0,0,246,1) 0%, rgba(6,0,112,1) 17%, rgba(0,212,255,1) 100%)",

        "gradient-2":
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      }),
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
