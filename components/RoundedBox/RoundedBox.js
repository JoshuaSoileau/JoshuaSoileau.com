import React from "react";
import tw, { css } from "twin.macro";

const RoundedBox = ({
  children,
  corners = tw`rounded-xl`,
  background = "",
  padding = tw`p-6 md:p-24`,
  margin = tw`lg:-mx-24`,
  filter = tw`filter backdrop-filter backdrop-blur-xl`,
}) => {
  return (
    <div css={[corners, background, padding, margin, filter]}>{children}</div>
  );
};

export default RoundedBox;
