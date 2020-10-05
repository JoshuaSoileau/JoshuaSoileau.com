import React from "react";

const HeroCard = ({ children, align = "center" }) => {
  return (
    <div className={`h-screen flex flex-col items-${align} justify-center`}>
      {children}
    </div>
  );
};

export default HeroCard;
