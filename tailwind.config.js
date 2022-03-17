module.exports = {
  mode: "jit",
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["SfProDisplay"],
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          10: "#171719",
        },
        gray: {
          10: "#EDEDED",
          20: "#CCCCCC",
          30: "#F6F6F6",
          40: "#EBEBEB",
          50: "#E0E0E0",
          60: "#737376",
          70: "#989899",
          80: "#B4B4B5",
          90: "#E5E5E5"
        },
        blue: {
          10: "#286FFA",
          20: "#2A71FA",
          30: "#0B69FF",
          40: "#4C6FFF",
        },
        orange: {
          10: "#FC7501",
        },
        green: {
          10: "#0DC74E",
        },
        yellow: {
          10: "#BAA500",
        },
      },
    },
  },
  plugins: [],
};
