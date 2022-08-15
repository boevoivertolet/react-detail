import React, {useState} from 'react';


type PropsType = {
    onChange: (on: boolean) => void
}


// component
export function UncontrolledOnOff(props: PropsType) {
    //hook with init value
    let [on, setOn] = useState(false);
    console.log('on: ' + on)

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
    const onClicked = () => {
        {
            setOn(true)
            props.onChange(true)
        }

    }
    const offClicked = () => {
        {
            setOn(false)
            props.onChange(false)
        }

    }


    return <div>
        <div style={onStyle} onClick={onClicked}>On
        </div>
        <div style={offStyle} onClick={offClicked}>Off
        </div>
        <div style={indicatorStyle}></div>
    </div>
}





























