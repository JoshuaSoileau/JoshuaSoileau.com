import "../styles/globals.css";
import "../styles/code.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <span className="hidden">This is the header</span>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
