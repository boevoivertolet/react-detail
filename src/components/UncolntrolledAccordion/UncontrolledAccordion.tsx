import React, {useState} from 'react';


type UncontrolledAccordionPropsType = {
    titleValue: string
    collapsed?: boolean

}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    let [collapsed, setCollapsed] = useState(false)


    return <div>
        <AccordionTitle title={props.titleValue} onClick={ () => {setCollapsed(!collapsed)} }/>


        {/*<button onClick={ () => {setCollapsed(!collapsed)} }>
            TOGGLE
        </button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={ ()=> {props.onClick()}} >--{props.title}--</h3>
    )

}


const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}
