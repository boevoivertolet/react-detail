import React, {useEffect, useState} from 'react';
import '../../App.css'
import {DigitalClockView} from './DigitalClockView';
import {AnalogClockView} from './AnalogClockView';


export const getString = (number: number) => number < 10 ? '0' + number : number

export const Clock: React.FC<PropsType> = (props) => {

    /* const hoursArrow = document.querySelector('hours')
     const minutesArrow = document.querySelector('minutes')
     const secondsArrow = document.querySelector('seconds')
     const deg = 6

     setInterval(() => {
         const hours = date.getHours() * 30
         const minutes = date.getMinutes() * deg
         const seconds = date.getSeconds() * deg

         if (hoursArrow) {
             hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
         }


         minutesArrow.style.transform = `rotateZ(${(minutes)}deg)`

         secondsArrow.style.transform = `rotateZ(${(seconds)}deg)`

     }, 0)*/


    const [date, setDate] = useState(new Date())


    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
            document.title = date.toString()
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [date])

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
