import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          amber: "#E57A2B",
          orange: "#D95B17",
          yellow: "#F4D03F",
          dark: "#21100B",
          ink: "#160B08",
          cream: "#FFF9F1",
        },
      },
      boxShadow: {
        glow: "0 12px 35px rgba(244, 208, 63, 0.25)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
