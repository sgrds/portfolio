import React from "react";

const Card = ({ children }) => {
  return (
    <div className="border-2 border-primary rounded-xl p-4 bg-secondary">
      <div className="border-2 border-primary rounded-xl border-dashed p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
