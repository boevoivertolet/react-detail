import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './Reducer';
type UncontrolledAccordionPropsType = {
    titleValue: string
    collapsed?: boolean

}




export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})


    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type:TOGGLE_COLLAPSED})}}/>
        {/*<button onClick={ () => {setCollapsed(!collapsed)} }>
            TOGGLE
        </button>*/}
        {!state.collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>--{props.title}--</h3>
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
