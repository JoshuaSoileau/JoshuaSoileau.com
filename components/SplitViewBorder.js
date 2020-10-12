import React from "react";

const SplitViewBorder = ({ children }) => {
  const kids = React.Children.toArray(children);
  const columns = React.Children.count(children);

  return (
    <div className="split-view shadow-xl border border-solid border-gray-300 rounded-lg  flex flex-col md:flex-row my-8 overflow-hidden">
      {kids.map((kid) => (
        <div
          className={`pt-4 pb-6 px-8    w-full md:w-1/${columns}  first:border-t-0 first:border-l-0 border-t md:border-t-0 md:border-l border-solid border-gray-300`}
        >
          {kid}
        </div>
      ))}
    </div>
  );
};

export default SplitViewBorder;
