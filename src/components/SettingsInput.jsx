import React from 'react';
import '../App.sass';


const SettingsInput = (props) => {

    return (
        <div className={'inputContainer'}>
            <input className={'optionsInput'} type={'number'}
                   id={`${props.id}`}
                   onFocus={props.focus}
                   onBlur={props.blur}
                   value={props.data.inputValue}
                   onChange={props.change}
            />
            <label className={'inputName'} htmlFor={`${props.id}`}>
                <div className={'labelWrapper'}>
                    <span>{props.inputName}</span>
                    <span className={(props.data.isInputFocused || props.data.isValueEqualToCurrentSetting) ?
                        'opacityZero lastRealValue' : 'lastRealValue'}>
                        {props.data.lastRealValue}
                    </span>
                </div>
            </label>
        </div>
    )
};

export default SettingsInput;