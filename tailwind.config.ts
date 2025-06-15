import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#6CA5B1",
        primaryColor: "#F9D179",
        textColor: "#FFFFFF",
        borderColor: "#000000",
      },
    },
  },
  plugins: [],
} satisfies Config;
