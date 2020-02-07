import React from 'react';
import '../Assets/App.sass';


const SettingsInput = (props) => {

    let isFocused = props.data.isInputFocused,
        isEqual = props.data.isValueEqualToCurrentSetting,
        valueName = props.inputName,
        realValue = props.data.lastRealValue;

    let labelContent = !isFocused && isEqual ? `Type ${valueName} here` : isFocused ? `${valueName}` : isEqual && isFocused?
        `This ${valueName} is equal to current` : `${valueName} will be set: `;

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
                    <span>{labelContent}</span>
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