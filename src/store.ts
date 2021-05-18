import {createStore} from "redux";
import {Actions} from "./Actions";

const initialState: BpmConverterState = {
    bpm:0
}

export interface BpmConverterState {
    bpm: number;
}


const rootReducer = (state = initialState, action: any) => {
    console.log("some action appeared", action);
    switch (action.type) {
        case Actions.BPM_CHANGED:
            return newState({...state, config: action.payload});
        default:
            return state;
    }
};

// @ts-ignore
export const store = createStore(rootReducer);


const newState = (state: any) => {
    console.log("new state", state);
    return state;
}
