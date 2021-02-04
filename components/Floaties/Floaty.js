import React, { useEffect, useState } from "react";
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
  const [background, setBackground] = useState({});

  useEffect(() => setBackground(random(colors.background)), []);

  return (
    <div css={[tw`w-3 h-12  relative  transform scale-50`, background]}></div>
  );
};

const Z = () => {
  const [color, setColor] = useState({});

  useEffect(() => setColor(random(colors.background)), []);

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

const Circle = () => {
  const [border, setBorder] = useState({});

  useEffect(() => setBorder(random(colors.border)), []);

  return (
    <div
      css={[
        tw`w-6 h-6 rounded-full border-4 border-solid border-gray-800`,
        border,
      ]}
    />
  );
};

const confettiObjects = [Rectangle, Circle, Z];

const Floaty = ({ delay }) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTop(Math.random() * 100);
    setLeft(Math.random() * 100);
    setIndex(Math.floor(Math.random() * confettiObjects.length));
  }, []);

  const Element = confettiObjects[index];

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
          <Element />
        </Rotate>
      </FadeIn>
    </div>
  );
};

export default Floaty;
