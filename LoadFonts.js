import fonts from "./fonts.json";

const FontFaceObserver = require("fontfaceobserver");

const { others, ...baseFonts } = fonts;

const LoadFont = (font) =>
  new Promise((resolve, reject) => {
    if (!font) resolve();

    console.log(font);
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css?family=${
      font.name
    }:${font.weights.join()}`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const roboto = new FontFaceObserver(font.name);
    roboto.load().then(() => {
      document.documentElement.classList.add(font.name);
      resolve();
    });
  });

const LoadFonts = () =>
  Promise.all([
    ...Object.values(baseFonts).map(LoadFont),
    ...Object.values(others).map(LoadFont),
  ]);

export default LoadFonts;
// import WebFontLoader from "webfontloader";

// WebFontLoader.load({
//   google: {
//     families: [
//       `${fonts.sans.name}:${fonts.sans.weights.join(",")}`,
//       `${fonts.serif.name}:${fonts.serif.weights.join(",")}`,
//       ...fonts.others.map((item) => `${item.name}:${item.weights.join(",")}`),
//     ],
//   },
// });
