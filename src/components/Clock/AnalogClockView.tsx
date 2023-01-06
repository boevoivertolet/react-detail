import React from 'react';
import {ClockViewPropsType} from './Clock';

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <div className="clock">
        <div className="hour">
            <div className="hours"></div>
        </div>
        <div className="minute">
            <div className="minutes"></div>
        </div>
        <div className="second">
            <div className="seconds"></div>
        </div>
    </div>
}