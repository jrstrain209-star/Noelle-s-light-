import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 60px rgba(168, 85, 247, 0.25)"
      }
    },
  },
  plugins: [],
};

export default config;
