import React from 'react';


type PropsType = {
    // on: boolean
}


// component
function OnOff(props: PropsType) {

    //variables
    let on = false

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


    return <div>
        <div style={onStyle} onClick={() => {
            on = true;
        }}>On
        </div>
        <div style={offStyle} onClick={() => {
            on = false
        }}>Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}


export default OnOff;


























