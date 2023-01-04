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
        counter:{counter} fake:{fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

