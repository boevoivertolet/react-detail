import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';

test('reducer should be change value to true',()=>{
    //data
const state: StateType ={
    collapsed: false
}


    //action
  const newState =  reducer(state, {type: TOGGLE_COLLAPSED})


    //expect

    expect(newState.collapsed).toBe(true)
})


test('reducer dont work',()=>{
    //data
    const state: StateType ={
        collapsed: false
    }




    //expect

    expect(()=>{
        reducer(state,{type:"FAKE-TYPE"})
    }).toThrowError();
})