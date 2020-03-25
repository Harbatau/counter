import React from 'react';
import '../Assets/App.sass';
import ControlButton from "./buttons";
import SettingsInput from "./SettingsInput";
import {connect} from "react-redux";

const Settings = (props) => {

    let alertMessage = +props.maxInput.inputValue < 0 || props.minInput.inputValue < 0 ? `! values can't be less than zero !` :
        (props.maxInput.inputValue || props.maxInput.lastRealValue) === (props.minInput.inputValue || props.minInput.lastRealValue) ? `! values can't be equal !` :
        +props.maxInput.inputValue < props.minInput.inputValue || +props.maxInput.lastRealValue < props.minInput.inputValue ||
        +props.maxInput.inputValue < props.minInput.lastRealValue ? `! minValue can't be greater than maxValue !` : false;

    return (
        <div className={props.isFirstVersion || (props.isSettingsOpened && !props.isFirstVersion) ?
            'settings' : 'settings displayNone'}>
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
                {alertMessage}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isFirstVersion: state.isFirstVersion,
        isSettingsOpened: state.isSettingsOpened
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchVersion: () => {
            const action = ;
            dispatch(action)
        },
    }
};

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default ConnectedSettings;