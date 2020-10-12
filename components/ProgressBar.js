import React, { useState, useEffect } from "react";

const ProgressBar = ({ target }) => {
  const [progress, setProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setProgress(100);
    }

    setProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <div
      className="h-3 fixed inset-x z-10 bg-gradient-to-r from-purple-200 to-blue-200"
      style={{ width: `${progress}%` }}
    />
  );
};

export default ProgressBar;
