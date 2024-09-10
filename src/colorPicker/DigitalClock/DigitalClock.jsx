import React, {useState, useEffect} from "react";
import styles from "./DigitalClock.module.css" ;



function DigitalClock(){

    const [time, setTime] = useState(new Date()) ;

    useEffect( ()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date()) ;
        } , 1000) ;

        return()=>{
            clearInterval(intervalId) ;
        }
    }, [] ) ;


    function formatTime(){
        let hours = time.getHours() ;
        let minutes = time.getMinutes() ;
        let seconds = time.getSeconds() ;
        let meridem = hours >= 12 ? "PM" : "AM" ;

        hours = hours % 12 || 12 ;

        hours = padZero(hours);
        minutes = padZero(minutes);
        seconds = padZero(seconds) ;

        return `${hours} : ${ minutes} : ${seconds} ${meridem}` ;


    }

    function padZero(number){
        if(number < 10){   
            let num = '0' + String(number) ;
            return num ;
        }

        return number ;
    }


    return(
        <>
          
            <div className={styles["digital-clock-container"]}>
                <div className={styles.clock}>
                    <span className={styles["time-display"]}> {formatTime()}  </span>
                </div>
            </div>

        </>
    )
}

export default DigitalClock 