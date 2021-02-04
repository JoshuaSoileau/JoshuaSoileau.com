import React from "react";
import "twin.macro";
import Container from "./Container";

const Footer = () => {
  return (
    <Container as="footer">
      <div tw="py-6">
        Made with &hearts; and <span tw="mr-1">💢</span> by me.
      </div>
    </Container>
  );
};

export default Footer;
