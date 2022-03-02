import React from "react";

function RawToggle({ className, setToggle, toggleStatus }: any) {
  return (
    <div
      className={className}
      onClick={() => {
        setToggle(!toggleStatus);
      }}
    >
      <div className="toggle-circle"></div>
    </div>
  );
}

export default RawToggle;
