import React, { Children } from "react";

interface buttonProps {
  className?: any;
  children?: any;
  eventHandler?: any;
}

function RawButton({ className, children, eventHandler }: buttonProps) {
  return (
    <button
      className={className}
      onClick={() => {
        eventHandler();
      }}
    >
      {children}
    </button>
  );
}

export default RawButton;
