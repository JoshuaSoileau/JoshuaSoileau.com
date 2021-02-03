import React, { useState } from "react";
import tw, { css } from "twin.macro";
import FadeIn from "@components/animated/FadeIn";
import Rotate from "@components/animated/Rotate";

const colors = [
  tw`bg-indigo-400`,
  tw`bg-green-400`,
  tw`bg-pink-400`,
  tw`bg-yellow-400`,
];

const Rectangle = () => {
  return (
    <div
      css={[
        tw`w-3 h-12  relative  transform scale-50`,
        colors[Math.floor(Math.random() * colors.length)],
      ]}
    ></div>
  );
};

const Z = () => {
  return (
    <div tw="bg-blue-400 w-3 h-8 relative transform scale-50">
      <div tw="bg-blue-400 w-3 h-8 transform origin-top-right rotate-90 absolute top-0"></div>
      <div tw="bg-blue-400 w-3 h-8 transform origin-top-left -rotate-90 absolute top-full"></div>
    </div>
  );
};

const Circle = () => (
  <div tw="w-6 h-6 rounded-full border-4 border-solid border-gray-800 mx-auto my-96"></div>
);

const confettiObjects = [<Rectangle />, <Z />, <Circle />];

const Floaty = ({ delay }) => {
  const [top] = useState(Math.random() * 100);
  const [left] = useState(Math.random() * 100);

  return (
    <div
      style={{
        position: "absolute",
        top: `${top}vh`,
        left: `${left}vw`,
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
