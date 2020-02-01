import React from 'react';
import '../App.sass';

const CounterDisplay = (props) => {
    return(
        <div className={props.alertMonitor ? 'number' : 'number alertNumber'}>{props.counterNumber}</div>
    )
};

export default CounterDisplay;