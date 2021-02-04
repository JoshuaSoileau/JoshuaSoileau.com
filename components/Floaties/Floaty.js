import React, { useState } from "react";
import tw, { css } from "twin.macro";
import FadeIn from "@components/animated/FadeIn";
import Rotate from "@components/animated/Rotate";
import random from "@utils/random";

const colors = {
  background: [
    tw`bg-indigo-400`,
    tw`bg-green-400`,
    tw`bg-pink-400`,
    tw`bg-yellow-400`,
  ],
  border: [
    tw`border-indigo-400`,
    tw`border-green-400`,
    tw`border-pink-400`,
    tw`border-yellow-400`,
  ],
};

const Rectangle = () => {
  return (
    <div
      css={[
        tw`w-3 h-12  relative  transform scale-50`,
        random(colors.background),
      ]}
    ></div>
  );
};

const Z = () => {
  const color = random(colors.background);
  return (
    <div css={[tw`w-3 h-8 relative transform scale-50`, color]}>
      <div
        css={[
          tw`w-3 h-8 transform origin-top-right rotate-90 absolute top-0`,
          color,
        ]}
      />
      <div
        css={[
          tw`w-3 h-8 transform origin-top-left -rotate-90 absolute top-full`,
          color,
        ]}
      />
    </div>
  );
};

const Circle = () => (
  <div
    css={[
      tw`w-6 h-6 rounded-full border-4 border-solid border-gray-800`,
      random(colors.border),
    ]}
  />
);

const confettiObjects = [<Rectangle />, <Circle />, <Z />];

const Floaty = ({ delay }) => {
  const [top] = useState(Math.random() * 100);
  const [left] = useState(Math.random() * 100);

  return (
    <div
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <FadeIn delay={delay}>
        <Rotate delay={delay}>
          {confettiObjects[Math.floor(Math.random() * confettiObjects.length)]}
        </Rotate>
      </FadeIn>
    </div>
  );
};

export default Floaty;
