import React from "react";

const HeroCard = ({ children }) => {
  return (
    <div class="h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default HeroCard;
