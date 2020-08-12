import React from 'react';
import '../../Assets/App.sass';

const VersionSwitcher = (props) => {

    return (

        <div className={props.isFirstVersion ? 'verSwitcher' : 'verSwitcher secondVersion'}
             onClick={props.switchVersion}>
            <span className={'currentVersionIsOne'}>1st version</span>
            <span className={'currentVersionIsTwo'}>2nd version</span>
            <div className={'switcher'}/>
        </div>
    )
}

export default VersionSwitcher

