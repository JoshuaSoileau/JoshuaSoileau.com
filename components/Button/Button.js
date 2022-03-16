import React from "react";
import tw, { styled } from "twin.macro";

const Element = styled.div`
  ${tw`rounded-xl bg-blue-200 p-2 px-4`}
`;

const Button = ({ as = "button", children, css, href, onClick = () => {} }) => {
  const corners = tw`rounded-xl`;
  const background = tw`bg-blue-200`;
  const padding = tw`p-2 px-4`;
  const filter = tw`filter backdrop-filter backdrop-blur-xl`;

  return (
    <Element
      as={as}
      onClick={onClick}
      href={href}
      css={[css, corners, background, padding, filter]}
    >
      {children}
    </Element>
  );
};

export default Button;
