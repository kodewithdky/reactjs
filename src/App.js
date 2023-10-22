import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter+1)
  };
  const recreaseValue=()=>{
    setCounter(counter-1)
  }
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>kodewithdky</h1>
      <h3>Counter Value: {counter}</h3>

      <br />
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={recreaseValue}>Decrease Value</button>
    </div>
  );
}

export default App;
