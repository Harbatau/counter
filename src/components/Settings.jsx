import React from 'react';
import '../App.sass';
import ControlButton from "./buttons";
import SettingsInput from "./SettingsInput";

const Settings = (props) => {

    return (
        <div className={!props.isFirstVersion && props.isSettingsOpened ? 'settings' : 'settings heightZero'}>
            <div className={'settingsInputs'}>
                <SettingsInput blur={() => props.onBlurHandler('maxInput')}
                               data={props.maxInput} inputName={'max value'}
                               id={'maxInput'}
                               change={(e) => {
                                   props.updateValuesFromInputs(e, 'maxInput')
                               }}
                               focus={() => props.onFocusHandler('maxInput')}
                               isFirstVersion={props.isFirstVersion}
                />
                <SettingsInput blur={() => props.onBlurHandler('minInput')}
                               data={props.minInput} inputName={'min value'}
                               id={'minInput'}
                               change={(e) => {
                                   props.updateValuesFromInputs(e, 'minInput')
                               }}
                               focus={() => props.onFocusHandler('minInput')}
                               isFirstVersion={props.isFirstVersion}
                />
            </div>
            <div className={'counterButtons'}>
                <ControlButton onClickHandler={props.setValues}
                               buttonProperty={'set options'}
                               disableMonitor={(props.isSettingButtonNotReady ||
                                   props.isNumberValuesNotValid)}
                />
                {!props.isFirstVersion &&
                <ControlButton onClickHandler={props.openAndCloseSettings} buttonProperty={'cancel'}/>}
            </div>
            <div className={props.isNumberValuesNotValid ? 'alertMessage' : 'alertMessage opacityZero'}>
                minValue can't be greater than maxValue
            </div>
        </div>
    )
};

export default Settings;