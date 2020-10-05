module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    screens: {
      sm: "460px",
      md: "768px",
      lg: "1280px",
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
