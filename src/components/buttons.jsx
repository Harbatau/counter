import React from 'react';
import '../App.sass';

const ControlButton = (props) => {
    return(
        <button onClick={props.onClickHandler} disabled={props.disableMonitor}>
            {props.buttonProperty}
        </button>
    )
};

export default ControlButton;