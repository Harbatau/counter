import React from 'react';
import '../Assets/App.sass';
import CounterDisplay from "./counterDisplay";
import ControlButton from "./buttons";

const Counter = (props) => {
    return (
        <>
            <div className={!props.isFirstVersion && props.isSettingsOpened ? 'counter displayNone' : 'counter'}>
                <CounterDisplay counterNumber={props.counterNumber} maxValue={props.maxValue} minValue={props.minValue}
                                alertMonitor={props.counterNumber !== props.maxValue} isFirstVersion={props.isFirstVersion}/>
                <div className={'counterButtons'}>
                    <ControlButton buttonProperty={'increment'} onClickHandler={props.setUnitToCounter}
                                   disableMonitor={props.counterNumber === props.maxValue}/>
                    <ControlButton buttonProperty={'reset'} onClickHandler={props.reset}
                                   disableMonitor={props.counterNumber === props.minValue}/>
                    {!props.isFirstVersion &&
                    <ControlButton buttonProperty={'Settings'} onClickHandler={props.openAndCloseSettings}/>}
                </div>
            </div>
        </>
    )
};

export default Counter;