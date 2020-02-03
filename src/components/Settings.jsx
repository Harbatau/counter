import React from 'react';
import '../App.sass';
import ControlButton from "./buttons";
import SettingsInput from "./SettingsInput";

const Settings = (props) => {

    return (
        <div className={'settings'}>
            <SettingsInput blur={(e) => props.onBlurHandler(e, 'maxInput')}
                           value={props.maxInputValue} inputName={'max value'}
                           change={(e) => {props.updateValuesFromInputs(e, 'maxInput')}}
            />
            <SettingsInput blur={(e) => props.onBlurHandler(e, 'minInput')}
                           value={props.minInputValue} inputName={'min value'}
                           change={(e) => {props.updateValuesFromInputs(e, 'minInput')}}
            />
            <ControlButton onClickHandler={props.setValues}
                           buttonProperty={'Set options'}
                           disableMonitor={(props.isSettingButtonNotReady ||
                               props.isNumberValuesNotValid)}
            />
            <div className={props.isNumberValuesNotValid ? 'alertMessage' : 'displayNone'}>
                Максимальное число не может быть меньше минимального!
            </div>
        </div>
    )
};

export default Settings;