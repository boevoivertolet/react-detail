import React, {useState} from 'react';


type PropsType = {
    onChange: (on: boolean)=> void
}


// component
function UncontrolledOnOff(props: PropsType) {
    //hook with init value
    let [on, setOn] = useState(false);
    console.log("on: "+ on)

// styles
    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inLine-block',
        marginLeft: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inLine-block',
        marginLeft: '2px',
        backgroundColor: on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '5px',
        height: '5px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inLine-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'

    }
    /*   //variables
       let on = false*/




    return <div>
        <div style={onStyle} onClick={() => {
            setOn(true)
            props.onChange(true)
        }}>On
        </div>
        <div style={offStyle} onClick={() => {
            setOn(false)
            props.onChange(false)
        }}>Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}


export default UncontrolledOnOff;


























