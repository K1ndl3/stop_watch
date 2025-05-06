import StopWatch from "./StopWatch";
import Timer from "./Timer";
import React, {useState} from "react";
function App() {
  const [isStopWatch, setIsStopWatch] = useState(true);

  function SwitchMode(){
    setIsStopWatch(!isStopWatch);
  }

  function getMode() {
    let sw = "Stop Watch";
    let t = "Timer";

    return isStopWatch ? t : sw;
  }

  return (
    <>
      {(isStopWatch) ? <StopWatch></StopWatch> : <Timer></Timer>}
      <button className="switch-mode" onClick={SwitchMode}>Switch to {getMode()}</button>
    </>
  );
}

export default App
