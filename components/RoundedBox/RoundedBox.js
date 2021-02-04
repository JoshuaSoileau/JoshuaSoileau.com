import React from "react";
import tw, { css } from "twin.macro";

const RoundedBox = ({
  children,
  corners = tw`rounded-xl`,
  background = tw`bg-white`,
  padding = tw`p-6 md:p-24`,
  margin = tw`lg:-mx-24`,
}) => {
  return <div css={[corners, background, padding, margin]}>{children}</div>;
};

export default RoundedBox;
