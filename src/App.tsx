import React, {useState} from 'react';
import './App.css';
import OnOff from './components/OnOff/OnOff';
import Accordion from './components/Accordion/Accordion';
import UncontrolledAccordion from './components/UncolntrolledAccordion/UncontrolledAccordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';





function App() {
    let[ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className='App'>

            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>

            <PageTitle title={'this is  APP component'}/>
            <PageTitle title={'My friends'}/>

            <Rating value={ratingValue}/>

            <hr/>

            <OnOff/>
            <UncontrolledAccordion titleValue={'menu'} />
            <UncontrolledRating/>



        </div>

    )

}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    console.log('PageTitle rendering')
    return <h1> {props.title}
    </h1>

}


export default App;
