import React from "react";
import "twin.macro";
import Floaty from "./Floaty";

const Box = ({ count = 200 }) => {
  return (
    <div tw="absolute top-0 left-0  w-screen h-60vh min-h-96  -z-1 overflow-hidden opacity-80">
      <div tw="relative w-full h-full">
        {[...new Array(count)].map((_, index) => (
          <Floaty key={index} delay={Math.random() * 3000} />
        ))}
        <div
          className="fader"
          tw="absolute z-10 bottom-0 left-0 w-full h-2/3  bg-gradient-to-t from-white"
        ></div>
      </div>
    </div>
  );
};

export default Box;
