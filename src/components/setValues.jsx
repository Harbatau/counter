import React from 'react';
import '../App.sass';
import ControlButton from "./buttons";

const Settings = (props) => {

    const maxFocusHandler = () => {
        props.onFocusAndBlurHandler({maxInputChangedValue: ''})
    };
    const minFocusHandler = () => {
        props.onFocusAndBlurHandler({minInputChangedValue: ''})
    };
    const maxBlurHandler = () => {
        if (props.data.maxInputChangedValue === '')
        props.onFocusAndBlurHandler({maxInputChangedValue: props.data.maxInputValue})
    };
    const minBlurHandler = () => {
        if (props.data.minInputChangedValue === '')
        props.onFocusAndBlurHandler({minInputChangedValue: props.data.minInputValue})
    };

    return (
        <div>
            <div>
                <span>max value</span>
                <input className={'optionsInput'} type={'number'}
                       onFocus={maxFocusHandler} onBlur={maxBlurHandler}
                       value={props.data.maxInputChangedValue}
                       onChange={(e) => {props.updateMaxValuesFromInputs(e); props.settingsValidation()}}/>
            </div>
            <div>
                <span>min value</span>
                <input className={'optionsInput'} type={'number'} value={props.data.minInputChangedValue}
                       onChange={(e) => {props.updateMinValuesFromInputs(e); props.settingsValidation()}}
                       onFocus={minFocusHandler} onBlur={minBlurHandler}/>
            </div>
            <ControlButton onClickHandler={props.setValues} buttonProperty={'Set options'}
                           disableMonitor={props.data.isSettingButtonNotReady}/>
        </div>
    )
};

export default Settings;