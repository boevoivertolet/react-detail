import React, {useState} from 'react';

type RatingPropsType = {
    //  value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')
    let [value, setValue] = useState(0)


    /*    if (props.value === 1) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            )

        }
        if (props.value === 2) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            )

        }
        if (props.value === 3) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            )

        }
        if (props.value === 4) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                </div>
            )

        }
        if (props.value === 5) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                </div>
            )

        }*/
    return (
        <div>
            <Star selected={value > 0} setValue ={setValue} value={1}/>
            <Star selected={value > 1} setValue ={setValue} value={2}/>
            <Star selected={value > 2} setValue ={setValue} value={3}/>
            <Star selected={value > 3} setValue ={setValue} value={4}/>
            <Star selected={value > 4} setValue ={setValue} value={5}/>

        </div>
    )
}


type StarPropsType = {
    selected: boolean
    setValue: (value :0 | 1 | 2 | 3 | 4 | 5) => void
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span onClick={()=> {props.setValue(props.value)}}>{props.selected ? <b>star</b> : 'star'}</span>

}
