import React from 'react';
import '../App.sass';
import ControlButton from "./buttons";
import SettingsInput from "./SettingsInput";

const Settings = (props) => {

    return (
        <div className={'settings'}>
            <div className={'flex settingsInputs'}>
                <SettingsInput blur={(e) => props.onBlurHandler(e, 'maxInput')}
                               value={props.maxInputValue} inputName={'max value'}
                               change={(e) => {
                                   props.updateValuesFromInputs(e, 'maxInput')
                               }}
                />
                <SettingsInput blur={(e) => props.onBlurHandler(e, 'minInput')}
                               value={props.minInputValue} inputName={'min value'}
                               change={(e) => {
                                   props.updateValuesFromInputs(e, 'minInput')
                               }}
                />
            </div>
            <ControlButton onClickHandler={props.setValues}
                           buttonProperty={'set options'}
                           disableMonitor={(props.isSettingButtonNotReady ||
                               props.isNumberValuesNotValid)}
            />
            <div className={/*props.isNumberValuesNotValid ? 'alertMessage' : 'displayNone'*/'alertMessage'}>
                minValue cannot be greater than maxValue!
            </div>
        </div>
    )
};

export default Settings;