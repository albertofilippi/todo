import React from "react";
import { useStoreState } from "easy-peasy";

const DisplayTitle = () => {
  const buttonBackground = useStoreState((state) => state.buttonBackground);

  return (
    <>
      {buttonBackground === "in-corso"
        ? "In Corso"
        : buttonBackground === "completate"
        ? "Completate"
        : buttonBackground === "oggi"
        ? "Oggi"
        : buttonBackground === "domani"
        ? "Domani"
        : buttonBackground === "mese"
        ? "Mese"
        : "Tutte le Tasks "}
    </>
  );
};

export default DisplayTitle;
