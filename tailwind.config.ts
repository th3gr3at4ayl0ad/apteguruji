import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spiritual: {
          cream: "#FFF9F0",
          ivory: "#FFFCF7",
          saffron: "#D97706",
          maroon: "#7F1D1D",
          brown: "#451A03",
          gold: "#B8860B",
        },
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      boxShadow: {
        spiritual:
          "0 10px 40px rgba(120, 53, 15, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
