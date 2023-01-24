module.exports = {
  content: [
    "./src/*.{html,js}",
    "./src/script/*.js",
    "./src/common/script/*.js",
  ],
  theme: {
    fontFamily: {
      CaseLight: ["Case-Light"],
      CaseMedium: ["Case-Medium"],
      CaseTextLight: ["CaseText-Light"],
      CaseTextRegular: ["CaseText-Regular"],
      CaseTextMedium: ["CaseText-Medium"],
      CaseMicroRegular: ["CaseMicro-Regular"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "rgba(0, 0, 0, 0)",
      neutral: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
      },
      orange: {
        ncma: "#eb3300" /*Pantone 2028 C*/,
      },
    },
    fontSize: {
      xs: [".75rem", "1rem"],
      sm: [".875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["4rem", "1"],
      "7xl": ["5rem", "1"],
      "48px": "48px",
    },
    extend: {},
    plugins: [],
  },
};
