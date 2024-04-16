import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-dark": "#000000",
        "secondary-dark": "#ffc94a",
        "tertiary-dark": "#453f78",
        white: "#F1EEE9",
        "any-dark": "#13161F",
      },
      fontFamily: {
        platypi: "Platypi",
        "one-day": "ONE DAY",
        "open-sans": ["Open Sans", "sans-serif"],
      },
      lineHeight: {
        "line-body": "140%",
      },
      letterSpacing: {
        body: "3%",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
