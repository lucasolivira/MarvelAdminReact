import React from "react";

const ScrollViewSidebar: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <style>
        {`
    .custom-scroll {
      max-height: calc(100vh - 150px); /* ajusta para não ultrapassar a viewport */
      overflow-y: auto;
    }

    .custom-scroll::-webkit-scrollbar {
      width: 1px;
    }

    .custom-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
  `}
      </style>
      <div className="custom-scroll">{children}</div>
    </>
  );
};

export default ScrollViewSidebar;
//Nãoe stou utilizando!
