import React, {useState,useEffect} from "react";
import Home from "../Pages/Home/Home";
import './CountDown.scss';
const CountDown = () => {
    const [seconds,setSeconds] = useState(3);
    const [repaintClass, setRepaintClass] = useState('');

    useEffect(() => {
        if (seconds < - 1){
            return;
        }
        const timer1 = setTimeout(()=> {
            setSeconds( seconds - 1 );
        }, 2000);

        const timer2 = setTimeout(() => {
            setRepaintClass(`repaint`);
          }, 1500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2)
        }
    });
 
    useEffect(() => setRepaintClass(`number-${seconds}`),[seconds]); 

    const grid = [];
    for (let x=0; x<=15; x++){
        for(let y=0;y<=9;y++){
            grid.push(<div className={`x${x}-y${y}`}></div>)
        }
    }

    if (seconds <= -1) {
        return (
            <Home/>
        )
    }
  return (
    <div className="CountDown-body">
        <div className={repaintClass}>
        {grid}
        </div>
    </div>
  )
};

export default CountDown;
