import React, {useState} from 'react';




export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;



type RatingPropsType = {
    value: RatingValueType
}

export function Rating(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')



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
            <Star selected={props.value > 0}/><button>1</button>
            <Star selected={props.value > 1}/><button>2</button>
            <Star selected={props.value > 2}/><button>3</button>
            <Star selected={props.value > 3}/><button>4</button>
            <Star selected={props.value > 4}/><button>5</button>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return <span>
        {props.selected ? <b>star</b> : 'star' }
    </span>


}