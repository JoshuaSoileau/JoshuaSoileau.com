import Head from "next/head";
import { useRef } from "react";
import ProgressBar from "../components/ProgressBar";

export default function Layout({ children, pageTitle, description }) {
  const main = useRef(null);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{``}</style>
      <ProgressBar target={main} />
      <main ref={main}>
        <div className="content  prose prose-xl mx-auto">{children}</div>
      </main>
    </>
  );
}
