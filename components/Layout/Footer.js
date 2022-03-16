import React from "react";
import "twin.macro";
import Container from "./Container";

const Footer = () => {
  return (
    <Container as="footer">
      <div tw="py-6">
        Made with &hearts; and <span tw="mr-1">💢</span> by{" "}
        <a
          href="https://twitter.com/joshua_soileau"
          tw="text-black underline hover:text-indigo-500  cursor-pointer"
        >
          me
        </a>
        .
      </div>
    </Container>
  );
};

export default Footer;
