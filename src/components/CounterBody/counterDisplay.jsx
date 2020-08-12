import React from 'react';
import '../../Assets/App.sass';
import {connect} from "react-redux";

const CounterDisplay = (props) => {

    const svgClass = props.alertMonitor ? 'text-copy' : 'text-copy-alert';

    return (
        <div className={'counterDisplay'}>
            <div className={props.alertMonitor ? 'number' : 'number alertNumber'}>
                {props.isFirstVersion ? props.counterNumber :
                    <svg viewBox="0 0 960 600">
                        <symbol id="s-text">
                            <text textAnchor="middle" x="50%" y="80%">{props.counterNumber}</text>
                        </symbol>
                        <g className="g-ants">
                            <use xlinkHref="#s-text" className={svgClass}/>
                            <use xlinkHref="#s-text" className={svgClass}/>
                            <use xlinkHref="#s-text" className={svgClass}/>
                            <use xlinkHref="#s-text" className={svgClass}/>
                            <use xlinkHref="#s-text" className={svgClass}/>
                        </g>
                    </svg>}
            </div>
            <div className={'flex'}>
                <div className={'currentSettings'}>Current min value:
                    <div className={'currSetVal'}>{props.minValue}</div>
                </div>
                <div className={'currentSettings'}>Current max value:
                    <div className={'currSetVal'}>{props.maxValue}</div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isFirstVersion: state.isFirstVersion,
        maxValue: state.maxCounter,
        minValue: state.minCounter,
        counterNumber: state.counter
    }
};

const ConnectedCounterDisplay = connect(mapStateToProps, null)(CounterDisplay);

export default ConnectedCounterDisplay;