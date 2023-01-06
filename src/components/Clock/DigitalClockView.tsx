import React from 'react';
import {ClockViewPropsType, getString} from './Clock';


export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const secondsString = getString(date.getSeconds())
    const minString = getString(date.getMinutes())
    const hoursString = getString(date.getHours())

    return <div className="digitalClock">
        <span className="section">{hoursString}</span>

        <span className="section">{minString}</span>

        <span className="section">{secondsString}</span>
    </div>

}