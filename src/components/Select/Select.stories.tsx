import React, {useState} from 'react';
import {Accordion} from '../Accordion/Accordion';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';


export default {
    title: 'select',
    // component: Select

}

export const TrySelect = () => {

    const onclick = ()=>{
        alert('click')
    }
    return <><div onClick={onclick}>Select</div></>
}

export const SelectChanging = () =>{
    const [value, setValue] = useState(2)
   return  <>
        <Select value={value} onChange={setValue} items={[
            {title: 'Sasha', value: 1},
            {title: 'Ulya', value: 2},
            {title: 'Taras', value: 3}
        ]}/>

    </>
}



export const WithoutValue = () =>{
    const [value, setValue] = useState(null)
    return <>
        <Select  value={value} onChange={setValue} items={[
            {title: 'Sasha', value: 1},
            {title: 'Ulya', value: 2},
            {title: 'Taras', value: 3}
        ]}/>

    </>

}










