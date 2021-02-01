import Head from "next/head";
import "twin.macro";
import Header from "@components/Header";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📖</text></svg>"
        />
      </Head>
      <Header />
      <section className="layout container text-xl">
        <div className="content">{children}</div>
      </section>
      <footer>Built by me!</footer>
    </>
  );
}
