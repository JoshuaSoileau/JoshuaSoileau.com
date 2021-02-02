import { useEffect, useState } from "react";
import Head from "next/head";
import tw, { styled } from "twin.macro";

import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";

const Main = styled.div(({ opacity }) => [
  tw`container text-xl flex-grow flex flex-col justify-center py-24`,
  `opacity: ${opacity};`,
  `transition: all 500ms ease;`,
]);

export default function Layout({ children, pageTitle, ...props }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => setOpacity(1), []);

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
      <div tw="flex flex-col items-center  min-h-screen">
        <Header />
        <Main opacity={opacity} as="main">
          {children}
        </Main>
        <Footer />
      </div>
    </>
  );
}
