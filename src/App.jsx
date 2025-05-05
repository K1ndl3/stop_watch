import StopWatch from "./StopWatch";
import Timer from "./Timer";
import React, {useState} from "react";
function App() {
  const [isStopWatch, setIsStopWatch] = useState(true);

  function SwitchMode(){
    setIsStopWatch(!isStopWatch);
  }

  return (
    <>
      {(isStopWatch) ? <StopWatch></StopWatch> : <Timer></Timer>}
      <button className="switch-mode" onClick={SwitchMode}>Switch Mode</button>
    </>
  );
}

export default App
