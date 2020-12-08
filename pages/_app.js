import "../styles/globals.css";
import "../styles/code.css";
import Layout from "../components/Layout";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-557FDGN",
};

TagManager.initialize(tagManagerArgs);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <span className="hidden">This is the header</span>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
