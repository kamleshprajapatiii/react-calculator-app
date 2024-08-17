import { useState } from "react";
import ButtonsContainer from "./ButtonsContainer";
import DisplayContainer from "./DisplayContainer";

function MainContainer() {
  const [displayValue, setDisplayValue] = useState("");
  const afterButtonClick = (value) => {
    if (value === "C") {
      setDisplayValue("");
    } else if (value === '=') {
      const result = eval(displayValue);
      setDisplayValue(result);
    } else {
      const newValue = displayValue + value;
      setDisplayValue(newValue);
    }
  };

  return (
    <>
      <main className="container d-grid justify-content-center border rounded pb-5 mt-5">
        <h1 className="my-5 text-center">React Calculator App</h1>
        <DisplayContainer values={displayValue}></DisplayContainer>
        <ButtonsContainer buttonClick={afterButtonClick}></ButtonsContainer>
      </main>
    </>
  );
}

export default MainContainer;
