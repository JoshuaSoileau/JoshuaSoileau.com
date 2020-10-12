import React from "react";

const TableFlip = ({
  tableStyle,
  bodyStyle,
  armStyle,
  faceContent = "°□°",
  windStyle,
  bodyClass,
  faceClass,
  armClass,
  tableClass,
  windClass,
}) => {
  return (
    <div className="table-flip">
      <span className={`body ${bodyClass}`} style={bodyStyle}>
        {`(`}
        {/* prettier-ignore */}
        <span className={`arm ${armClass}`} style={armStyle}>╯</span>
        {/* prettier-ignore */}
        <span className={`eye ${faceClass}`}>{faceContent}</span>
        {`)`}
        {/* prettier-ignore */}
        <span className={`arm ${armClass}`} style={armStyle}>╯</span>
      </span>
      <span className={`wind mr-2 ${windClass}`} style={windStyle}>
        ︵
      </span>
      <span className={`table ${tableClass}`} style={tableStyle}>
        ┻━┻
      </span>
      <style jsx>{`
        div,
        span {
          transition: all 300 ms ease-in-out;
        }
        span {
          display: inline-block;
        }

        .arm,
        .table {
          transform-origin: left 50%;
        }
      `}</style>
    </div>
  );
};

export default TableFlip;
