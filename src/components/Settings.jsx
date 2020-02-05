import React from 'react';
import '../App.sass';
import ControlButton from "./buttons";
import SettingsInput from "./SettingsInput";

const Settings = (props) => {

    return (
        <div className={'settings'}>
            <div className={'flex settingsInputs'}>
                <SettingsInput blur={(e) => props.onBlurHandler(e, 'maxInput')}
                               data={props.maxInput} inputName={'max value'}
                               id={'maxInput'}
                               change={(e) => {
                                   props.updateValuesFromInputs(e, 'maxInput')
                               }}
                               focus={() => props.onFocusHandler('maxInput')}
                />
                <SettingsInput blur={(e) => props.onBlurHandler(e, 'minInput')}
                               data={props.minInput} inputName={'min value'}
                               id={'minInput'}
                               change={(e) => {
                                   props.updateValuesFromInputs(e, 'minInput')
                               }}
                               focus={() => props.onFocusHandler('minInput')}
                />
            </div>
            <ControlButton onClickHandler={props.setValues}
                           buttonProperty={'set options'}
                           disableMonitor={(props.isSettingButtonNotReady ||
                               props.isNumberValuesNotValid)}
            />
            <div className={props.isNumberValuesNotValid ? 'alertMessage' : 'alertMessage opacityZero'}>
                minValue can't be greater than maxValue
            </div>
        </div>
    )
};

export default Settings;