import React from "react";
import "twin.macro";

const H1 = ({ children }) => {
  return (
    <h1 tw="text-4xl md:text-7xl  font-extrabold font-serif">{children}</h1>
  );
};

export default H1;
