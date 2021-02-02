import { useEffect, useState } from "react";
import Head from "next/head";
import tw, { css } from "twin.macro";

import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";
import useInterval from "hooks/useInterval";

export default function Layout({ children, pageTitle, ...props }) {
  const [opacity, setOpacity] = useState(0);
  const [favicon, setFavicon] = useState("📖");

  const toggleFavicon = () => {
    setFavicon(favicon === "📖" ? "🔨" : "📖");
  };

  useEffect(() => setOpacity(1), []);

  useInterval(
    toggleFavicon,
    process?.env?.NODE_ENV === "development" ? 1500 : null
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${favicon}</text></svg>`}
        />
      </Head>
      <div tw="flex flex-col items-center  min-h-screen">
        <Header />
        <main
          tw="w-full max-w-md  px-8 text-xl flex-grow flex flex-col justify-center py-24"
          css={[
            css`
              opacity: ${opacity};
              transition: all 500ms ease;
            `,
          ]}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
