import { useState, useEffect } from "react";

export default function TextInput({ name,inputId, stateRef, handleTextChange }) {
  const refData = stateRef?.current || {};
  const inputValue = refData[name] || "";
  const [renderTrigger,setRenderTrigger] = useState(false);

  console.log(`rendering input ${inputId}`);
  

  return (
    <input
      type="text"
      name={name}
      id={inputId}
      value={inputValue}
      onChange={(e) => {
        const { name, value } = e.target;
        handleTextChange(name, value);
        setRenderTrigger(!renderTrigger);
      }}
    />
  );
}
