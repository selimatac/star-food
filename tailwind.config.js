module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
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
          90: "#E5E5E5",
          100: "#AAAAAA",
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
      sizing: {
        c25: "25px",
        c39: "39px",
        c42: "42px",
        c50: "50px",
        c60: "60px",
        c85: "85px",
        c140: "140px",
        c310: "310px",
      },
      spacing: {
        c1: "1px",
        c6: "6px",
        c50: "50px",
        c85: "85px",
        c225: "225px",
        c310: "310px",
      },
      borderRadius: {
        c3: "3px",
        c5: "5px",
        c10: "10px",
      },
      inset: {
        c85: "85px",
        c50: "50px",
        c35: "35px",
      },
      fontSize: {
        c17: "17px",
      },
      height: {
        c25: "25px",
        c39: "39px",
        c42: "42px",
        c60: "60px",
        c63: "63px",
      },
      width: {
        c85: "85px",
        c60: "60px",
        c70: "70px",
      },
      maxWidth: {
        c16: "16px",
        c70: "70px",
      },
      minWidth: {
        c85: "85px",
        c310: "310px",
      },
      minHeight: {
        c140: "140px",
      },
    },
  },
};
