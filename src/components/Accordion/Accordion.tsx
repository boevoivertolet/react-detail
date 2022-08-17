import React from 'react';


type ItemType ={
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick:(value: any)=> void
}

export function Accordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    return <div>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}
        />
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onChange}>--{props.title}--</h3>
    )

}
type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick:(value: any)=> void
}


const AccordionBody = (props:AccordionBodyPropsType) => {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map((i,index)=><li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>

}
