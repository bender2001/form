import React, { Children } from "react";
import { Button } from "./Button.style";

interface FormInterface {
  className: string;
  children: string;
  nameTag: string;
  closeButton: boolean;
  onClose: any;
}

function RawForm({
  className,
  children,
  nameTag,
  closeButton,
  onClose,
}: FormInterface) {
  const xButton: any = (
    <Button
      color="black"
      backgroundColor="white"
      outline={true}
      outlineColor="white"
      shadow={false}
      width="2rem"
      eventHandler={onClose}
    >
      x
    </Button>
  );

  return (
    <div className={className}>
      <div className="header">
        <p>{nameTag}</p>
        {closeButton ? xButton : ""}
      </div>
      <div className="content-container">{children}</div>
    </div>
  );
}

export default RawForm;
