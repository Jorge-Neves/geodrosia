import React, { useState } from "react";

const Button = () => {
  const [contentTest, setContentTest] = useState<string | null>("");
  let content;
  const doSomething = () => {
    console.log("the button served");
    content = "the button served";
    setContentTest("The button served state");
  };
  return (
    <>
      <button onClick={doSomething}>click me UwU</button>
      <p>{content}</p>
      <p>{contentTest}</p>
    </>
  );
};

export default Button;
