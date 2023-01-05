import React, {useEffect, useState} from 'react';


const getString = (number: number) => number < 10 ? '0' + number : number

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])


    const secondsString = getString(date.getSeconds())
    const minString = getString(date.getMinutes())
    const hoursString = getString(date.getHours())

    return <div>
        <span>{hoursString}</span>
        :
        <span>{minString}</span>
        :
        <span>{secondsString}</span>
    </div>
}

type PropsType = {}