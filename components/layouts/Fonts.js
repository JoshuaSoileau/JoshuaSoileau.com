import React from "react";

const Fonts = () => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
  @font-face {
    font-family: 'Lato';
    font-display: auto; /* Important for performance */
    font-weight: 100;
    font-style: normal;
    src: url('/static/fonts/Lato-Thin.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-display: auto; /* Important for performance */
    font-weight: 100;
    font-style: italic;
    src: url('/static/fonts/Lato-ThinItalic.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-display: auto; /* Important for performance */
    font-weight: 300;
    font-style: normal;
    src: url('/static/fonts/Lato-Light.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-display: auto; /* Important for performance */
    font-weight: 300;
    font-style: italic;
    src: url('/static/fonts/Lato-LightItalic.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-display: auto; /* Important for performance */
    font-weight: 500;
    font-style: normal;
    src: url('/static/fonts/Lato-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-display: auto; /* Important for performance */
    font-weight: 500;
    font-style: italic;
    src: url('/static/fonts/Lato-Italic.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-display: auto; /* Important for performance */
    font-weight: 700;
    font-style: normal;
    src: url('/static/fonts/Lato-Bold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-display: auto; /* Important for performance */
    font-weight: 700;
    font-style: italic;
    src: url('/static/fonts/Lato-BoldItalic.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-display: auto; /* Important for performance */
    font-weight: 900;
    font-style: normal;
    src: url('/static/fonts/Lato-Black.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-display: auto; /* Important for performance */
    font-weight: 900;
    font-style: italic;
    src: url('/static/fonts/Lato-BlackItalic.ttf') format('ttf');
  }
`,
      }}
    />
  );
};

export default Fonts;
