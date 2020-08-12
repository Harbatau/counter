import React from 'react';
import '../../Assets/App.sass';

const SettingsInput = (props) => {

    const isFocused = props.data.isInputFocused,
        isEqual = props.data.isValueEqualToCurrentSetting,
        valueName = props.inputName,
        realValue = props.data.lastRealValue;

    const labelContent = !isFocused && isEqual ? `Type ${valueName} here` : isEqual && isFocused &&
    props.data.inputValue === realValue ?
        `This ${valueName} is equal to current` : isFocused ? `${valueName}` : `${valueName} will be set: `;

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
                        'displayNone lastRealValue' : 'lastRealValue'}>
                        {props.data.lastRealValue}
                    </span>
                </div>
            </label>
        </div>
    )
};

export default SettingsInput;