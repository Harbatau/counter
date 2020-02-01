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
        if (props.data.maxInputChangedValue === '') {
            props.onFocusAndBlurHandler({maxInputChangedValue: props.data.maxInputValue})
        } else {
            props.onFocusAndBlurHandler({maxInputValue: props.data.maxInputChangedValue})
        }
    };
    const minBlurHandler = () => {
        if (props.data.minInputChangedValue === '') {
            props.onFocusAndBlurHandler({minInputChangedValue: props.data.minInputValue})
        } else {
            props.onFocusAndBlurHandler({minInputValue: props.data.minInputChangedValue})
        }
    };

    return (
        <div>
            <div>
                <span>max value</span>
                <input className={'optionsInput'} type={'number'}
                       onFocus={maxFocusHandler}
                       onBlur={() => {maxBlurHandler(); props.validateNumbers()}}
                       value={props.data.maxInputChangedValue}
                       onChange={(e) => {
                           props.updateMaxValuesFromInputs(e);
                           props.settingsValidation();
                       }}/>
            </div>
            <div>
                <span>min value</span>
                <input className={'optionsInput'} type={'number'} value={props.data.minInputChangedValue}
                       onChange={(e) => {
                           props.updateMinValuesFromInputs(e);
                           props.settingsValidation();
                       }}
                       onFocus={minFocusHandler}
                       onBlur={() => {minBlurHandler(); props.validateNumbers()}}/>
            </div>
            <ControlButton onClickHandler={props.setValues}
                           buttonProperty={'Set options'}
                           disableMonitor={props.data.isSettingButtonNotReady}/>
            <div className={props.isNumberValuesNotValid ? 'alertMessage' : 'displayNone'}>
                Число MAX !>= MIN
            </div>
        </div>
    )
};

export default Settings;