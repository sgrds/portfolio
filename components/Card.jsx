import React from "react";

const Card = ({ children }) => {
  return (
    <div className="border-2 border-primary rounded-lg p-2 bg-secondary hover:bg-[#AEA79E] shadow-lg">
      <div className="border-2 border-primary rounded-lg border-dashed p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
