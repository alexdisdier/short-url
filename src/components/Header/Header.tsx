import React from "react";

import InputBar from "./InputBar/InputBar";

import "./Header.css";

interface HeaderProps {
  url?: string;
  isValid: boolean;
  addShort: Function;
  handleShort(event: React.FormEvent<HTMLInputElement>): void;
}

const header: React.FC<HeaderProps> = ({
  url,
  isValid,
  addShort,
  handleShort
}: HeaderProps) => {
  return (
    <header>
      <h1 className="container">Simplify your links</h1>
      <InputBar
        url={url}
        isValid={isValid}
        addShort={addShort}
        handleShort={handleShort}
      />
    </header>
  );
};

export default header;
