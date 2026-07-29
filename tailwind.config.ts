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
        ivory: "#FBF7EF",
        paper: "#FFFFFF",
        ink: "#2A241F",
        muted: "#75695C",
        sage: {
          DEFAULT: "#6E7C5B",
          light: "#8B9878",
          dark: "#4F5B41",
        },
        gold: {
          DEFAULT: "#B69A6B",
          light: "#D8C7A6",
        },
        line: "#E7DECF",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
