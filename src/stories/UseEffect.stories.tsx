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

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        console.log('tik: ' + counter)
        /*setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 5000)*/
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    return <>
        fake:{fake}

        counter:{counter}

    </>
}
