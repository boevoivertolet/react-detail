import {Simulate} from 'react-dom/test-utils';

export type StateType = {
    collapsed: boolean
}

type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed};
        default:
            throw new Error('Bad action')
    }
    return state;
}