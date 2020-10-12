import React from "react";

const Callout = ({ children, color }) => {
  return (
    <div className={`p-4 px-8 rounded-lg bg-${color}-100 text-${color}-900`}>
      {children}
    </div>
  );
};

export default Callout;
