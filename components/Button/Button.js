import React from "react";
import tw from "twin.macro";

const Button = ({ children, css, href, onClick = () => {} }) => {
  const corners = tw`rounded-xl`;
  const background = tw`bg-blue-200`;
  const padding = tw`p-2 px-4`;
  const filter = tw`filter backdrop-filter backdrop-blur-xl`;

  return (
    <button
      onClick={onClick}
      href={href}
      css={[css, corners, background, padding, filter]}
    >
      {children}
    </button>
  );
};

export default Button;
