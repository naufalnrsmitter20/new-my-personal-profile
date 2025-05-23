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
        "disable-slate": "#8B8BA4",
      },
      fontFamily: {
        platypi: "Platypi",
        "one-day": "var(--font-oneday)",
        "open-sans": ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      lineHeight: {
        "line-body": "140%",
      },
      letterSpacing: {
        body: "3%",
        header2: "2%",
        title: "10/100",
        header3: "1%",
      },
      keyframes: {
        moveUpDown: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        moveUpDown2: {
          "0%": {
            transform: "translateY(2px)",
          },
          "50%": {
            transform: "translateY(-2px)",
          },
          "100%": {
            transform: "translateY(2px)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "move-up-down": "moveUpDown 2s ease-in-out infinite",
        "move-up-down-2": "moveUpDown2 0.5s ease-in-out infinite",
        marquee: "marquee 20s linear infinite",
      },
    },
  },

  variants: {
    fill: ["hover", "focus"],
    stroke: ["hover", "focus"],
  },

  plugins: [flowbite.plugin()],
};
export default config;
