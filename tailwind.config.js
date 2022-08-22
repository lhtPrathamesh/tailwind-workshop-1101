/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xss: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
      // Exact Breakpoints
      mobile: {
        min: "320px",
        max: "767px",
      },
      tab: {
        min: "768px",
        max: "1023px",
      },
    },
    colors: {
      transparent: "transparent",
      white: {
        50: "#F8FBFF",
        100: "#FFFFFF",
        150: "#CEBCFF",
      },
      slate: {
        50: "#488FEB00",
        100: "#F2FAFF",
      },
      offWhite: {
        50: "#FFFFFFE6",
        100: "#00000021",
      },
      black: {
        50: "#4E4E4E",
        100: "#000000",
        150: "#00000095",
        200: "#484848",
      },
      purple: {
        50: "#502D9A",
        100: "#6B3BC9",
        150: "#512C99",
        200: "#A87BFF",
        250: "#5A38A5",
      },
      blue: {
        50: "#72C4F4",
        100: "#CFEDFF",
        150: "#566DDD",
        200: "#236ECB",
        250: "#3828BE",
        300: "#6A4FC3",
      },
      green: "#23BA95",
      grey: {
        50: "#EDF1F7",
      },
      darkGrey: {
        50: "#8E8E8E",
        100: "#D1D1D1",
      },
      lightGreen: "#CAF5EF",
    },

    fontSize: {
      ft1: [
        "12px",
        {
          letterSpacing: "0em",
          lineHeight: "18px",
        },
      ],
      ft2: [
        "13px",
        {
          letterSpacing: "0em",
          lineHeight: "20px",
        },
      ],
      ft3: [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "21px",
        },
      ],
      ft4: [
        "15px",
        {
          letterSpacing: "0em",
          lineHeight: "23px",
        },
      ],
      ft5: [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "25px",
        },
      ],
      ft6: [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "27px",
        },
      ],
      ft7: [
        "19px",
        {
          letterSpacing: "0em",
          lineHeight: "29px",
        },
      ],
      ft8: [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "30px",
        },
      ],
      ft9: [
        "23px",
        {
          letterSpacing: "0em",
          lineHeight: "34px",
        },
      ],
      ft10: [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      ft11: [
        "28px",
        {
          letterSpacing: "0em",
          lineHeight: "50px",
        },
      ],
      ft111: [
        "32px",
        {
          letterSpacing: "0em",
          lineHeight: "48px",
        },
      ],
      ft12: [
        "36px",
        {
          letterSpacing: "0em",
          lineHeight: "50px",
        },
      ],
      ft13: [
        "46px",
        {
          letterSpacing: "0em",
          lineHeight: "69px",
        },
      ],
      ft14: [
        "50px",
        {
          letterSpacing: "0em",
          lineHeight: "76px",
        },
      ],
      ft15: [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "50px",
        },
      ],
      ft16: [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "50px",
        },
      ],
      ft17: [
        "15px",
        {
          letterSpacing: "0em",
          lineHeight: "28px",
        },
      ],
    },

    fontFamily: {
      PoppinsBold: ["Poppins-Bold", "sans-serif"],
      PoppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
      PoppinsRegular: ["Poppins-Regular", "sans-serif"],
      PoppinsMedium: ["Poppins-Medium", "sans-serif"],
    },

    extend: {
      spacing: {
        "6px": "6px",
        "7px": "7px",
        "14px": "14px",
        "17px": "17px",
        "23px": "23px",
        "26px": "26px",
        "27px": "27px",
        "30px": "30px",
        "31px": "31px",
        "33px": "33px",
        9: "36px",
        11: "44px",
        "45px": "45px",
        13: "52px",
        15: "60px",
        "67px": "67px",
        "78px": "78px",
        "82px": "82px",
        "90px": "90px",
        25: "100px",
        "101px": "101px",
        "114px": "114px",
        "115px": "115px",
        31: "124px",
        "157px": "157px",
        45: "180px",
        "183px": "183px",
        50: "200px",
        "213p/x": "213px",
        65: "260px",
        75: "300px",
        83: "332px",
        90: "360px",
        "371px": "371px",
        98: "392px",
        99: "396px",
        105: "423px",
        "454px": "454px",
        "466px": "466px",
        130: "520px",
        139: "566px",
        148: "593px",
        171: "685px",
        "15per": "15%",
        "35per": "35%",
        "40per": "40%",
        "50per": "50%",
        "60per": "60%",
      },
      gridTemplateColumns: {
        "30/30/30": "30% 30% 30%",
        "28/28/28": "28% 28% 28%",
      },
    },
  },
  plugins: [],
};
