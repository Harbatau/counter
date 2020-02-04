import React from 'react';
import '../App.sass';

const CounterDisplay = (props) => {
    return (
        <div className={'counterDisplay'}>
            <div className={props.alertMonitor ? 'number' : 'number alertNumber'}>{props.counterNumber}</div>
            <div className={'flex'}>
               <div className={'currentSettings'}>Current max value:
                    <div className={'currSetVal'}>{props.maxValue}</div>
                </div>
                <div className={'currentSettings'}>Current min value:
                    <div className={'currSetVal'}>{props.minValue}</div>
                </div>
            </div>
        </div>
    )
};

export default CounterDisplay;