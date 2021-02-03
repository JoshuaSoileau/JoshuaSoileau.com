import { useEffect } from "react";
import TagManager from "react-gtm-module";

import GlobalStyles from "@components/Layout/GlobalStyles";
import FloatyBox from "@components/Floaties/Box";
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
      <FloatyBox />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
