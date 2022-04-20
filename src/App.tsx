import React from 'react';
import './App.css';
import OnOff from './components/OnOff/OnOff';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';




function App() {

    return (
        <>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <PageTitle title = {'this is  APP component'}/>
            <PageTitle title = {'My friends'}/>
            <Rating value ={0}/>
            <Rating value ={1}/>
            <Rating value ={2}/>
            <Rating value ={3}/>
            <Rating value ={4}/>
            <Rating value ={5}/>

            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>



        </>

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

