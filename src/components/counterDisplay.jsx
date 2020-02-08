import React from 'react';
import '../Assets/App.sass';

const CounterDisplay = (props) => {

    let svgClass = props.alertMonitor ? 'text-copy' : 'text-copy-alert';

    return (
        <div className={'counterDisplay'}>
            <div className={props.alertMonitor ? 'number' : 'number alertNumber'}>
                {props.isFirstVersion ? props.counterNumber :
                    <svg viewBox="0 0 960 600">
                        <symbol id="s-text">
                            <text textAnchor="middle" x="50%" y="80%">{props.counterNumber}</text>
                        </symbol>
                        <g className="g-ants">
                            <use xlinkHref="#s-text" className={svgClass}></use>
                            <use xlinkHref="#s-text" className={svgClass}></use>
                            <use xlinkHref="#s-text" className={svgClass}></use>
                            <use xlinkHref="#s-text" className={svgClass}></use>
                            <use xlinkHref="#s-text" className={svgClass}></use>
                        </g>
                    </svg>}
            </div>
            <div className={'flex'}>
               <div className={'currentSettings'}>Current max value:
                    <div className={'currSetVal'}>{props.maxValue}</div>
                </div>
                <div className={'currentSettings'}>Current min value:
                    <div className={'currSetVal'}>{props.minValue}</div>
                </div>
            </div>
        </div>
    )
};

export default CounterDisplay;