import React from "react";

interface InputLineInterface {
  className: string;
  inputType: string;
  textTagName: string;
  onUpdate: any;
}

function RawInptLine({
  className,
  inputType,
  textTagName,
  onUpdate,
}: InputLineInterface) {
  return (
    <div className={className}>
      <p>{textTagName}</p>
      <input
        type={inputType}
        onChange={(event) => {
          onUpdate(event.target.value);
        }}
      ></input>
    </div>
  );
}

export default RawInptLine;
