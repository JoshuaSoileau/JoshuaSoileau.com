import React, { useState } from "react";
import TableFlip from "./TableFlip";
import SplitViewBorder from "../components/SplitViewBorder";
import Breakout from "../components/Breakout";
import Callout from "../components/Callout";

const TableFlipHighlight = () => {
  const [target, setTarget] = useState("body");
  const [hoverTarget, setHoverTarget] = useState("");

  const colors = {
    body: "purple",
    arm: "red",
    face: "green",
    wind: "yellow",
    table: "blue",
  };

  const buttonText = {
    body: "The body",
    arm: "The arms",
    wind: "The wind",
    table: "The table (obv)",
    face: "The eyes / mouth?",
  };

  const explanations = {
    body:
      "The entire body needs to rotate just a little, to give the impression the person is straining to lift the table.",
    arm:
      "The arms need to rotate, to lower to pick up the table, and then to raise to throw it.",
    face:
      "Gosh, it would just be really cool if we could change the face to something almost like  >.< while the character is straining",
    wind:
      "Not sure the best thing to do with the wind. Maybe a simple fade in, with a small scale up?",
    table: "I mean... The table needs to flip. That's a bare minimum.",
  };

  const emojis = {
    body: "🤷",
    arm: "🦾",
    face: "👀",
    wind: "💨",
    table: "📖",
  };

  return (
    <>
      <Breakout>
        <SplitViewBorder>
          <div className="flex flex-col md:flex-row w-full h-full items-center justify-center  text-xl md:text-3xl  relative">
            <TableFlip
              bodyClass={target === "body" ? `text-${colors["body"]}-500` : ""}
              armClass={target === "arm" ? `text-${colors["arm"]}-500` : ""}
              faceClass={target === "face" ? `text-${colors["face"]}-500` : ""}
              windClass={target === "wind" ? `text-${colors["wind"]}-500` : ""}
              tableClass={
                target === "table" ? `text-${colors["table"]}-500` : ""
              }
            />
            <small className="absolute bottom-0 right-0 hidden md:block text-xs text-gray-500">
              Click me, I do things →
            </small>
            <small className="mt-4 right-0 block md:hidden text-xs text-gray-500">
              ↓ Click me, I do things
            </small>
          </div>
          <div>
            <div className="mb-4">Things we're gonna animate</div>
            <div onMouseLeave={() => setHoverTarget("")}>
              {Object.entries(buttonText).map(([color, text]) => (
                <div
                  className="flex w-full h-full justify-start items-center"
                  key={text}
                >
                  <button
                    type="button"
                    className="flex items-center"
                    onClick={() => setTarget(color)}
                    onMouseEnter={() => setHoverTarget(color)}
                  >
                    <span
                      className={`w-6 h-6 rounded-full border-2 border-solid border-gray-${
                        hoverTarget === color ? "500" : "300"
                      } inline-flex items-center justify-center  mr-2`}
                    >
                      {target === color ? (
                        <span
                          className={`w-3 h-3 rounded-full bg-${colors[color]}-600`}
                        ></span>
                      ) : hoverTarget === color ? (
                        <span
                          className={`w-3 h-3 rounded-full bg-${colors[color]}-200`}
                        ></span>
                      ) : (
                        ""
                      )}
                    </span>
                    {text}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </SplitViewBorder>
      </Breakout>
      {target && (
        <Callout color={colors[target]}>
          <span className="mb-2 block text-4xl">{emojis[target]}</span>
          <span className="block text-lg">{explanations[target]}</span>
        </Callout>
      )}
    </>
  );
};

export default TableFlipHighlight;
