module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: "all",
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    options: {
      extractors: [
        {
          extensions: ["mdx"],
          extractor: (content) => {
            content = mdx.sync(content);

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) ||
              [];

            return broadMatches.concat(innerMatches);
          },
        },
      ],
    },
  },
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
