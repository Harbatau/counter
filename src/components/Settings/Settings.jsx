import React from 'react';
import '../../Assets/App.sass';
import ControlButton from "../CounterBody/buttons";
import SettingsInput from "./SettingsInput";
import {connect} from "react-redux";
import {
    onBlurMaxAC,
    onBlurMinAC,
    onFocusMaxAC,
    onFocusMinAC,
    openAndCloseSettingsAC,
    setValuesAC,
    updateValuesFromMaxAC,
    updateValuesFromMinAC
} from "../../redux/reducer";

const Settings = (props) => {

    const alertMessage = +props.maxInput.inputValue < 0 || props.minInput.inputValue < 0 ? `! values can't be less than zero !` :
        (props.maxInput.inputValue || props.maxInput.lastRealValue) === (props.minInput.inputValue || props.minInput.lastRealValue) ?
            `! values can't be equal !` :
            +props.maxInput.inputValue < props.minInput.inputValue || +props.maxInput.lastRealValue < props.minInput.inputValue ||
            +props.maxInput.inputValue < props.minInput.lastRealValue ? `! minValue can't be greater than maxValue !` : false;

    return (
        <div className={props.isFirstVersion || (props.isSettingsOpened && !props.isFirstVersion) ?
            'settings' : 'settings displayNone'}>
            <div className={'settingsInputs'}>
                <SettingsInput blur={props.onBlurMinHandler}
                               data={props.minInput} inputName={'min value'}
                               id={'minInput'}
                               change={(e) => {
                                   props.updateValuesFromMin(e)
                               }}
                               focus={props.onFocusMinHandler}
                               isFirstVersion={props.isFirstVersion}
                />
                <SettingsInput blur={props.onBlurMaxHandler}
                               data={props.maxInput} inputName={'max value'}
                               id={'maxInput'}
                               change={(e) => {
                                   props.updateValuesFromMax(e)
                               }}
                               focus={props.onFocusMaxHandler}
                               isFirstVersion={props.isFirstVersion}
                />
            </div>
            <div className={'counterButtons'}>
                <ControlButton onClickHandler={props.setValues}
                               buttonProperty={'set options'}
                               disableMonitor={props.isSettingButtonNotReady || props.isNumberValuesNotValid}
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
        isSettingsOpened: state.isSettingsOpened,
        isSettingButtonNotReady: state.isSettingButtonNotReady,
        isNumberValuesNotValid: state.isNumberValuesNotValid,
        minInput: state.minInput,
        maxInput: state.maxInput,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openAndCloseSettings: () => {
            const action = openAndCloseSettingsAC();
            dispatch(action)
        },
        setValues: () => {
            const action = setValuesAC();
            dispatch(action)
        },
        updateValuesFromMin: (e) => {
            const action = updateValuesFromMinAC(e);
            dispatch(action)
        },
        updateValuesFromMax: (e) => {
            const action = updateValuesFromMaxAC(e);
            dispatch(action)
        },
        onBlurMinHandler: () => {
            const action = onBlurMinAC();
            dispatch(action)
        },
        onBlurMaxHandler: () => {
            const action = onBlurMaxAC();
            dispatch(action)
        },
        onFocusMinHandler: () => {
            const action = onFocusMinAC();
            dispatch(action)
        },
        onFocusMaxHandler: () => {
            const action = onFocusMaxAC();
            dispatch(action)
        },
    }
};

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default ConnectedSettings;