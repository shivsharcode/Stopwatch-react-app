import React, { useState, useEffect, useRef } from "react";
import styles from './StopWatch.module.css';

// elip time = computer time

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false); //state of stopwatch

    const [elapsedTime, setElapsedTime] = useState(0);  // the time passed after starting the watch, this is shown on the display

    const intervalIdRef = useRef(null);

    const startTimeRef = useRef(0);    // elip time jabse watch start hui


    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;   //abhi kitna elip(computer time) hai and jabse watch start hui kitna time bitgya, agar inhe subtract karege toh starting elip time aa jayega :)
        console.log(startTimeRef.current);

        document.getElementById("start-button-id").style.display = "none";
        document.getElementById("stop-button-id").style.display = "initial";
        document.getElementById("reset-button-id").style.display = "none";


    }
    function stop() {
        setIsRunning(false);

        document.getElementById("stop-button-id").style.display = "none";
        document.getElementById("reset-button-id").style.display = "initial";
        document.getElementById("start-button-id").style.display = "initial";

    }
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);

        document.getElementById("reset-button-id").style.display = "none";

    }
    function formatTime() {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(2, '0');

        return `${minutes}:${seconds}:${milliseconds}`;
    }


    return (
        <>
            {/* <h1>STOP-WATCH</h1> */}

            <div className={styles.stopwatch}>
                <div className={styles.display}>
                    {formatTime()}
                </div>

                <div className={styles.controls}>
                    <button className={styles["reset-button"]} onClick={reset} id="reset-button-id">
                        Reset
                    </button>

                    <button className={styles["start-button"]} onClick={start} id="start-button-id">
                        Start
                    </button>

                    <button className={styles["stop-button"]} onClick={stop} id="stop-button-id">
                        Stop
                    </button>


                </div>

            </div>
        </>
    )
}

export default StopWatch