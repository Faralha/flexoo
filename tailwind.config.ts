import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": {
          "olive": "#424342",
          "primary": "#111111"
        },
        "white-primary": "#ffffff", 
        "berkeley-blue": "#003366",
        "gold-primary": "#FFD700"
      }
    },
  },
  plugins: [],
};
export default config;
