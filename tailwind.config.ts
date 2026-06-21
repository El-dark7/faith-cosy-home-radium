import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        gold: "#D4AF37",
        luxury: "#111827"
      }
    }
  },
  plugins: []
};

export default config;
