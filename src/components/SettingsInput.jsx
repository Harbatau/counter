import React from 'react';
import '../App.sass';


const SettingsInput = (props) => {

    return (
        <div>
            <div className={'inputName'}>{props.inputName}</div>
            <input className={'optionsInput'} type={'number'}
                   onFocus={(e) => {e.currentTarget.value = ''}}
                   onBlur={props.blur}
                   value={props.value}
                   onChange={props.change}
            />
        </div>
    )
};

export default SettingsInput;