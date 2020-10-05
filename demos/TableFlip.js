import React from "react";

const TableFlip = () => {
  return (
    <div>
      (╯°□°)╯︵ ┻━┻
      <span className="text-sm inline block mt-10 prose prose-xl">
        <span className="head">
          (<span className="arm" />
          <span className="eye" />
          <span className="mouth" />
          <span className="eye" />
          (<span className="arm" />
        </span>
        ︵<span className="table">┻━┻</span>
      </span>
      <style jsx>{`
        span {
          display: inline;
        }
        .arm:before {
          content: "╯";
          display: block;
        }
        .eye:before {
          content: "°";
          display: block;
        }
        .mouth:before {
          content: "□";
          display: block;
        }
      `}</style>
    </div>
  );
};

export default TableFlip;
