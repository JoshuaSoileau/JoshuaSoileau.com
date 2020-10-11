import "../styles/globals.css";
import "../styles/code.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      This is the header I think
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
