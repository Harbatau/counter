import React from 'react';
import '../App.sass';
import ControlButton from "./buttons";

const Settings = (props) => {


    const maxBlurHandler = (e) => {
        /*if (e.currentTarget.value === '') e.currentTarget.value = `${props.maxValue}`;*/
        e.currentTarget.value = props.maxInputValue
    };
    const minBlurHandler = (e) => {
        if (e.currentTarget.value === '') e.currentTarget.value = `${props.minValue}`;
        else e.currentTarget.value = props.minInputValue
    };


    return (
        <div className={'settings'}>
            <div>
                <span>max value</span>
                <input className={'optionsInput'} type={'number'}
                       onFocus={(e) => {e.currentTarget.value = ''}}
                       onBlur={(e) => props.onBlurHandler(e, 'maxInput')}
                       value={props.maxInputValue}
                       onChange={(e) => {props.updateValuesFromInputs(e, 'maxInput');

                       }}
                />
            </div>
            <div>
                <span>min value</span>
                <input className={'optionsInput'} type={'number'}
                       onFocus={(e) => {e.currentTarget.value = ''}}
                       onBlur={(e) => props.onBlurHandler(e, 'minInput')}
                       value={props.minInputValue}
                       onChange={(e) => {props.updateValuesFromInputs(e, 'minInput');
                       }}
                />
            </div>
            <ControlButton onClickHandler={props.setValues}
                           buttonProperty={'Set options'}
                           disableMonitor={(props.isSettingButtonNotReady ||
                               props.isNumberValuesNotValid)}
            />
            <div className={props.isNumberValuesNotValid ? 'alertMessage' : 'displayNone'}>
                Число MAX !>= MIN
            </div>
        </div>
    )
};

export default Settings;