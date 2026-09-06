import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./messages/**/*.json",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          orange: {
            DEFAULT: "#FF5700",
            hover: "#E04C00",
            light: "#FFF1EB",
            50: "#FFF6F2",
            100: "#FFE8DC",
            500: "#FF5700",
            600: "#E04C00",
            700: "#B83E00",
          },
          slate: {
            DEFAULT: "#525B60",
            hover: "#434B4F",
            light: "#707A80",
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#525B60",
            600: "#434B4F",
            700: "#363C3F",
            800: "#272C2E",
            900: "#1A1D1E",
          },
          charcoal: {
            DEFAULT: "#1E252B",
            950: "#0D1114",
            900: "#14191E",
            800: "#1E252B",
            700: "#2B343D",
            600: "#3A4652",
          },
          canvas: {
            DEFAULT: "#F9FCFE",
            cream: "#F4F6F8",
            muted: "#F1F5F9",
            pure: "#FFFFFF",
            border: "#E2E8F0",
          },
          carbon: {
            DEFAULT: "#0E1113",
            pure: "#080A0B",
            card: "#14181B",
            elevated: "#1C2226",
            border: "rgba(255, 255, 255, 0.08)",
          },
        },
      },
      boxShadow: {
        card: "0 4px 20px -4px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 12px 30px -6px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
        arabic: ["var(--font-ibm-plex)", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-ibm-plex)", "sans-serif"],
      },
      aspectRatio: {
        "16/10": "16 / 10",
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/1": "2 / 1",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
