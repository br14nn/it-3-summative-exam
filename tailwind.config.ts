import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        lg: "1.25rem",
        xl: "1.56rem",
        "2xl": "1.95rem",
        "3xl": "2.44rem",
        "4xl": "3.05rem",
        "5xl": "3.81rem",
        "6xl": "4.77rem",
        "7xl": "5.96rem",
        "8xl": "7.45rem",
      },
      transitionProperty: {
        width: "width",
      },
      colors: {
        text: "#E9EBF2",
        background: "#0B0D12",
        primary: "#A8AFCA",
        secondary: "#695840",
        accent: "#8BAA74",
        danger: "#FD2C2C",
      },
    },
  },
  plugins: [],
};
export default config;
