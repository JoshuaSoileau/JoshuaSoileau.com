import { useEffect } from "react";
import { GlobalStyles } from "twin.macro";

import TagManager from "react-gtm-module";
import LoadFonts from "../LoadFonts";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    /** TODO: Hide this behind an environment variable in netlify */
    TagManager.initialize({ gtmId: "GTM-PVKPRMR" });
    LoadFonts();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
