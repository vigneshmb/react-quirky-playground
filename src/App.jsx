import { useRef, useEffect } from "react";
import TextInput from "./components/TextInput";
import "./App.css";

const formInputs = [
  {
    name: "text1",
    id: 1,
  },
  {
    name: "text2",
    id: 2,
  },
];

function App() {
  const stateRef = useRef();

  useEffect(() => {
    stateRef.current = {
      text1: "first input",
      text2: "second input",
    };
  }, []);

  const handleTextChange = (name, value) => {
    console.log();
    const newData = stateRef?.current || {};
    stateRef.current = {
      ...newData,
      [name]: value,
    };
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {formInputs.map((input) => (
        <div
          key={input.name}
          style={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            margin: "15px",
            padding: "2px",
            backgroundColor: "cornflowerblue",
            borderRadius: "4px",
          }}
        >
          <TextInput
            name={input.name}
            inputId={input.id}
            stateRef={stateRef}
            handleTextChange={handleTextChange}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
