import React from 'react';
import '../App.sass';
import ControlButton from "./buttons";

const Settings = (props) => {
    return (
        <div>
            <div>
                <span>max value</span>
                <input className={'optionsInput'} type={'number'}
                       value={props.maxInputValue === Infinity ? '∞' :props.maxInputValue}
                       onChange={props.updateMaxValuesFromInputs}/>
            </div>
            <div>
                <span>min value</span>
                <input className={'optionsInput'} type={'number'} value={props.minInputValue}
                       onChange={props.updateMainValuesFromInputs}/>
            </div>
            <ControlButton onClickHandler={props.setValues} buttonProperty={'Set options'}
                           disableMonitor={props.isButtonNotReady}/>
        </div>
    )
};

export default Settings;