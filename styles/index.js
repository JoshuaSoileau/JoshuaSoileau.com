import css from "styled-jsx/css";

// In an attempt to keep all configuration in one place, css variables
// are currently stored in config.yml. Move these variables into a
// variables file in this style/ directory if that is your preference.
import { config } from "../config/config.yml";

// used in pages/about.js, pages/index.js
export const centeredPageStyles = css`
  .centered-container {
    height: 80vh;
    width: 98vw;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

// used in _app.js
export const globalStyles = css.global`
  @font-face {
    font-family: "Lato";
    font-display: auto; /* Important for performance */
    font-weight: 100;
    font-style: normal;
    src: url("/static/fonts/Lato-Thin.ttf");
  }

  @font-face {
    font-family: "Lato";
    font-display: auto; /* Important for performance */
    font-weight: 100;
    font-style: italic;
    src: url("/static/fonts/Lato-ThinItalic.ttf");
  }

  @font-face {
    font-family: "Lato";
    font-display: auto; /* Important for performance */
    font-weight: 300;
    font-style: normal;
    src: url("/static/fonts/Lato-Light.ttf");
  }

  @font-face {
    font-family: "Lato";
    font-display: auto; /* Important for performance */
    font-weight: 300;
    font-style: italic;
    src: url("/static/fonts/Lato-LightItalic.ttf");
  }

  @font-face {
    font-family: "Lato";
    font-display: auto; /* Important for performance */
    font-weight: 500;
    font-style: normal;
    src: url("/static/fonts/Lato-Regular.ttf");
  }

  @font-face {
    font-family: "Lato";
    font-display: auto; /* Important for performance */
    font-weight: 500;
    font-style: italic;
    src: url("/static/fonts/Lato-Italic.ttf");
  }

  @font-face {
    font-family: "Lato";
    font-display: auto; /* Important for performance */
    font-weight: 700;
    font-style: normal;
    src: url("/static/fonts/Lato-Bold.ttf");
  }

  @font-face {
    font-family: "Lato";
    font-display: auto; /* Important for performance */
    font-weight: 700;
    font-style: italic;
    src: url("/static/fonts/Lato-BoldItalic.ttf");
  }

  @font-face {
    font-family: "Lato";
    font-display: auto; /* Important for performance */
    font-weight: 900;
    font-style: normal;
    src: url("/static/fonts/Lato-Black.ttf");
  }

  @font-face {
    font-family: "Lato";
    font-display: auto; /* Important for performance */
    font-weight: 900;
    font-style: italic;
    src: url("/static/fonts/Lato-BlackItalic.ttf");
  }
  html {
    scroll-behavior: smooth;
    font-family: "Lato";
  }
  .icon-button {
    outline: none;
    border: none;
    background: ${config.css.backgroundColor};
  }
  .icon-button.hamburger {
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 3; /* the navigation menu is z-index: 4 */
    border: 1px solid ${config.css.lightGray};
    padding-top: 4px;
    border-radius: 3px;
  }

  code > span {
    font-size: inherit; /* make sure code font size is set in <CodeBlock /> */
    background: inherit !important; /* Fixes code block style bug*/
  }
`;
