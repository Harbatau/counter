import React from 'react';
import '../App.sass';
import CounterDisplay from "./counterDisplay";
import ControlButton from "./buttons";

const Counter = (props) => {
    return (
        <div className={'counter'}>
            <CounterDisplay counterNumber={props.counterNumber} maxValue={props.maxValue} minValue={props.minValue}
                            alertMonitor={props.counterNumber !== props.maxValue}/>
            <div className={'counterButtons'}>
                <ControlButton buttonProperty={'increment'} onClickHandler={props.setUnitToCounter}
                               disableMonitor={props.counterNumber === props.maxValue}/>
                <ControlButton buttonProperty={'reset'} onClickHandler={props.reset}
                               disableMonitor={props.counterNumber === props.minValue}/>
            </div>
        </div>
    )
};

export default Counter;