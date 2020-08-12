import React from 'react';
import '../../Assets/App.sass';
import CounterDisplay from "./counterDisplay";
import ControlButton from "./buttons";
import {incrementAC, openAndCloseSettingsAC, resetAC} from "../../redux/reducer";
import {connect} from "react-redux";

const Counter = (props) => {
    return (
        <div className={!props.isFirstVersion && props.isSettingsOpened ? 'counter displayNone' : 'counter'}>
            <CounterDisplay counterNumber={props.counterNumber} maxValue={props.maxValue} minValue={props.minValue}
                            alertMonitor={props.counterNumber !== props.maxValue}
                            isFirstVersion={props.isFirstVersion}/>
            <div className={'counterButtons'}>
                <ControlButton buttonProperty={'increment'} onClickHandler={props.increment}
                               disableMonitor={props.counterNumber === props.maxValue}/>
                <ControlButton buttonProperty={'reset'} onClickHandler={props.reset}
                               disableMonitor={props.counterNumber === props.minValue}/>
                {!props.isFirstVersion &&
                <ControlButton buttonProperty={'Settings'} onClickHandler={props.openAndCloseSettings}/>}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isFirstVersion: state.isFirstVersion,
        isSettingsOpened: state.isSettingsOpened,
        maxValue: state.maxCounter,
        minValue: state.minCounter,
        counterNumber: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openAndCloseSettings: () => {
            const action = openAndCloseSettingsAC();
            dispatch(action)
        },
        increment: () => {
            const action = incrementAC();
            dispatch(action)
        },
        reset: () => {
            const action = resetAC();
            dispatch(action)
        },
    }
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ConnectedCounter;
