import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-container": "var(--surface-container)",
        "surface-container-low": "var(--surface-container-low)",
        "surface-container-high": "var(--surface-container-high)",

        primary: "var(--primary)",
        "on-surface": "var(--on-surface)",
        "on-surface-variant": "var(--on-surface-variant)",

        outline: "var(--outline)",
      },
    },
  },
  
};

export default config;
