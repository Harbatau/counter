import React from 'react';
import '../Assets/App.sass';

const ControlButton = (props) => {
    return(
        <button onClick={props.onClickHandler} disabled={props.disableMonitor}>
            {props.buttonProperty}
        </button>
    )
};

export default ControlButton;