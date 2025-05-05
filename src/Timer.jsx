
function Timer() {

    function StartTimer(){

    }

    function StopTimer(){

    }

    function DisplayTime(){
        return '00:00:00'
    }

    return (
    <>
    <div className="Timer">
        <div className="Display">{DisplayTime()}</div>
        <div className="Controls">
            <button className="start-timer">start-timer</button>
            <button className="stop-timer">stop-timer</button>
            <button className="reset-timer">reset-timer</button>
        </div>
    </div>
    </>);

}

export default Timer;