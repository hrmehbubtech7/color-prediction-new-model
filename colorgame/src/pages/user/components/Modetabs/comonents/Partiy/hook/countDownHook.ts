import { useState, useEffect } from 'react';

const Timer = () => {
    const [ minutes, setMinutes ] = useState(2);
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    
                    setMinutes(2)
                    setSeconds(0)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return ( {minutes  , seconds} ) 
}

export default Timer;