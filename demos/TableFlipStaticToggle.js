import React, { useState } from "react";
import TableFlip from "./TableFlip";
import SplitViewBorder from "../components/SplitViewBorder";
import Breakout from "../components/Breakout";
import CodeBlock from "../components/CodeBlock";

const TableFlipStaticToggle = () => {
  const [target, setTarget] = useState("three");
  const [hoverTarget, setHoverTarget] = useState("");

  const states = {
    one: "State 1",
    two: "State 2",
    three: "State 3",
  };

  const colors = {
    one: "purple",
    two: "green",
    three: "blue",
  };

  const props = {
    one: {
      armStyle: {
        transform: "rotate(90deg)",
      },
      faceContent: "—_—",
      windStyle: {
        opacity: 0,
        transform: "scale(0.8) rotat(10deg)",
      },
      tableStyle: {
        transform: "rotate(180deg) translateX(-30px)",
      },
    },
    two: {
      bodyStyle: {
        transform: "translate(20px, -23px) rotate(30deg)",
      },
      armStyle: {
        transform: "rotate(90deg)",
      },
      faceContent: ">.<",
      windStyle: {
        opacity: 0,
        transform: "scale(0.8) rotat(10deg)",
      },
      tableStyle: {
        transform: "rotate(180deg) translateX(-30px)",
      },
    },
    three: {},
  };

  const code = {
    one: `
.body {}
.arm {
  transform: rotate(90deg);
}
.face::before {
  content: "—_—";
}
.wind {
  opacity: 0;
  transform: scale(0.8) rotat(10deg);
}
.table {
  transform: rotate(180deg) translateX(-30px);
}
    `,
    two: `
.body {
  transform: translate(20px, -23px) rotate(30deg);
}
.arm {
  transform: rotate(90deg);
}
.face::before {
  content: ">.<";
}
.wind {
  opacity: 0;
  transform: scale(0.8) rotat(10deg);
}
.table {
  transform: rotate(180deg) translateX(-30px);
}
    `,
    three: `
.body {}
.arm {}
.face::before {}
.wind {}
.table {}
    `,
  };

  return (
    <>
      <Breakout>
        <SplitViewBorder>
          <div className="flex flex-col md:flex-row w-full h-full items-center justify-center  text-xl md:text-3xl  relative">
            <TableFlip {...props[target]} />
            <small className="absolute bottom-0 right-0 hidden md:block text-xs text-gray-500">
              Click me, I do things →
            </small>
            <small className="mt-4 right-0 block md:hidden text-xs text-gray-500">
              ↓ Click me, I do things
            </small>
          </div>
          <div>
            <div className="mb-4">Choose a state</div>
            <div onMouseLeave={() => setHoverTarget("")}>
              {Object.entries(states).map(([number, text]) => (
                <div
                  className="flex w-full h-full justify-start items-center"
                  key={text}
                >
                  <button
                    type="button"
                    className="flex items-center"
                    onClick={() => setTarget(number)}
                    onMouseEnter={() => setHoverTarget(number)}
                  >
                    <span
                      className={`w-6 h-6 rounded-full border-2 border-solid border-gray-${
                        hoverTarget === number ? "500" : "300"
                      } inline-flex items-center justify-center  mr-2`}
                    >
                      {target === number ? (
                        <span
                          className={`w-3 h-3 rounded-full bg-${colors[number]}-600`}
                        ></span>
                      ) : hoverTarget === number ? (
                        <span
                          className={`w-3 h-3 rounded-full bg-${colors[number]}-200`}
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
          <div className="-mt-4 -mb-6 -mx-8 h-full">
            <CodeBlock lang="css">{code[target]}</CodeBlock>
          </div>
        </SplitViewBorder>
      </Breakout>
    </>
  );
};

export default TableFlipStaticToggle;
