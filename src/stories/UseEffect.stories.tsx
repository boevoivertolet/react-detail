import React, {useEffect, useState} from 'react';

export default {

    title: 'useEffect demo'
}


export const SimpleExample = () => {
    console.log('SimpleExample')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect everytime render')
        document.title = counter.toString()
    })


    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()
    }, [])


    useEffect(() => {
        console.log('useEffect first render and every counter changed')
        document.title = counter.toString()
    }, [counter])


    return <>
        fake:{fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        counter:{counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetIntervalExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    /* useEffect(() => {
         console.log('tik: ' + counter)
         /!*setTimeout(() => {
             console.log('setTimeout')
             document.title = counter.toString()
         }, 5000)*!/
         setInterval(() => {
             setCounter((state) => state + 1)
         }, 1000)
     }, [])*/
    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    return <>
        fake:{fake}

        counter:{counter}

    </>
}
export const Timer = () => {

    const getTime = () => {
        return new Date()
    }


    const [hour, setHour] = useState(getTime().getHours())
    const [min, setMin] = useState(getTime().getMinutes())
    const [sec, setSec] = useState(getTime().getSeconds())


    console.log('SetTimeoutExample')


    useEffect(() => {
        setInterval(() => {
            setSec(getTime().getSeconds() + 1)
            if (getTime().getSeconds() === 59) {
                setMin(getTime().getMinutes() + 1)
                if (getTime().getMinutes() === 59) {
                    setHour(getTime().getHours() + 1)
                }
            }
        }, 1000)
    }, [sec, min, hour])


    return <>
        time:
        {hour < 10 ? '0' + hour : hour ? hour === 24 ? '00' : hour : hour}:{min < 10 ? '0' + min : min ? min === 60 ? '00' : min : min}:{sec < 10 ? '0' + sec : sec ? sec === 60 ? '00' : sec : sec}
    </>
}


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('ResetEffectExample')


    useEffect(() => {
        console.log('Effect occurred ' + counter)
        return () => {
            console.log('Reset Effect ' + counter)
        }


    }, [counter])


    return <>
        counter : {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}> +
        </button>

    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('KeysTrackerExample ' + text)


    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            /*  setText((state) => state + e.key)*/
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }


    }, [text])


    return <>
        Typed text : {text}


    </>
}

export const SetTimeoutExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }

    }, [text])


    return <>
        Typed text : {text}


    </>
}
