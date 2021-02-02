import React from "react";
import tw, { styled } from "twin.macro";

const Element = styled.div`
  ${tw`w-full max-w-md  px-8  mx-auto`}
`;

const Container = ({ as = "div", children }) => {
  return <Element as={as}>{children}</Element>;
};

export default Container;
