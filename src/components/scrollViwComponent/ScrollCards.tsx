import React from "react";

const ScrollViewCards: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <style>
        {`
          .custom-scroll {
            max-height: 200px;
            overflow-y: auto;
            padding-right: 1px;
          }

          .custom-scroll::-webkit-scrollbar {
            width: 8px;
            background: transparent;
          }

          .custom-scroll::-webkit-scrollbar-thumb {
            background-color: transparent;
          }

          .custom-scroll::-webkit-scrollbar {
            display: none;              
          }
        `}
      </style>
      <div className="custom-scroll">{children}</div>
    </>
  );
};

export default ScrollViewCards;
