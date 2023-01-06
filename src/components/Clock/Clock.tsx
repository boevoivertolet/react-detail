import React, {useEffect, useState} from 'react';
import '../../App.css'
import {DigitalClockView} from './DigitalClockView';
import {AnalogClockView} from './AnalogClockView';


export const getString = (number: number) => number < 10 ? '0' + number : number

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())


    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;

    switch (props.mod) {
        case 'analog':
            view = /*<div className="clock">
                <div className="hour">
                    <div className="hours"></div>
                </div>
                <div className="minute">
                    <div className="minutes"></div>
                </div>
                <div className="second">
                    <div className="seconds"></div>
                </div>
            </div>*/ <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = /*  <div className="digitalClock">
                    <span className="section">{hoursString}</span>

                    <span className="section">{minString}</span>

                    <span className="section">{secondsString}</span>
                </div>*/ <DigitalClockView date={date}/>


    }


    return <div className={'clockDisplay'}>

        {/*{props.mod === 'digital'
            ? <div className="digitalClock">
                <span className="section">{hoursString}</span>

                <span className="section">{minString}</span>

                <span className="section">{secondsString}</span>
            </div>
            : <div className="clock">
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
        }*/}
        {view}

    </div>
}

type PropsType = {
    mod?: 'digital' | 'analog'
}
export type ClockViewPropsType = {
    date: Date
}
