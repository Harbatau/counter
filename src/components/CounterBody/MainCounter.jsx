import React from 'react';
import '../../Assets/App.sass';
import Counter from "./counter";
import Settings from "../Settings/Settings";

const MainCounter = (props) => {

    return(
        <div className={props.isFirstVersion ? 'App' : 'App secondVersionApp'}>
            <div className={'absoluteWrapper'}>
                <div className={'theCounter'}>
                    {!props.isSettingsOpened || props.isFirstVersion ? 'The Counter' : 'Settings'}
                </div>
                <div className={!props.isSettingsOpened ? 'wrapper' : 'wrapper settingsActive'}>
                    <Counter />
                    <Settings />
                </div>
            </div>
        </div>
    )
}

export default MainCounter