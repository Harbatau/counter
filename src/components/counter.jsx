import React from 'react';
import '../App.sass';
import CounterDisplay from "./counterDisplay";
import ControlButton from "./buttons";

const Counter = (props) => {
    return(
        <div>
            <CounterDisplay counterNumber={props.counterNumber}
                            alertMonitor={props.counterNumber !== props.maxValue}/>
            <ControlButton buttonProperty={'increment'} onClickHandler={props.setUnitToCounter}
                           disableMonitor={props.counterNumber === props.maxValue}/>
            <ControlButton buttonProperty={'reset'} onClickHandler={props.reset}
                           disableMonitor={props.counterNumber === props.minValue}/>
        </div>
    )
};

export default Counter;