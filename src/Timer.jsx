import { useRef, useState } from "react";

function Timer() {

    const [seconds, setSeconds] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
    const [inputTime, setInputTime] = useState("");
    const intervalRef = useRef(null);

    function StartTimer() {
        if (isRunning) return;
      
        const parsed = parseInt(inputTime, 10);
        if (isNaN(parsed) || parsed <= 0) return;
        const totalSeconds = parsed * 60;
        setSeconds(totalSeconds);
        setIsRunning(true);
      
        intervalRef.current = setInterval(() => {
          setSeconds(current => {
            if (current <= 1) {
              clearInterval(intervalRef.current);
              setIsRunning(false);
              return 0;
            }
            return current - 1;
          });
        }, 1000);
      }

    function StopTimer(){
        clearInterval(intervalRef.current)
        setIsRunning(false);
    }

    function ResetTimer(){
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setSeconds(0);
    }

    function DisplayTime(){
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hrs}:${mins}:${secs}`;
    }

    return (
    <>
    <div className="timer">

    <input
        type="number"
        placeholder="minutes"
        value={inputTime}
        onChange={e => setInputTime(e.target.value)}
        disabled={isRunning}
      />


        <div className="timer-display">{DisplayTime()}</div>
        <div className="timer-controls">
            <button className="start-timer" onClick={StartTimer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
            </button>
            <button className="stop-timer" onClick={StopTimer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
            </button>
            <button className="reset-timer" onClick={ResetTimer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                </svg>
            </button>
        </div>
    </div>
    </>);

}

export default Timer;