import React, {useState} from 'react';


type PropsType = {
     on: boolean
    onChange: (on: boolean)=> void
}


// component
export function OnOff(props: PropsType) {
    //hook with init value
    let [on, setOn] = useState(false);
    console.log("on: "+ props.on)

// styles
    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inLine-block',
        marginLeft: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inLine-block',
        marginLeft: '2px',
        backgroundColor: props.on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '5px',
        height: '5px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inLine-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'

    }
    /*   //variables
       let on = false*/




    return <div>
        <div style={onStyle} onClick={() => {
            props.onChange(true)
        }}>On
        </div>
        <div style={offStyle} onClick={() => {
            props.onChange(false)
        }}>Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}





























