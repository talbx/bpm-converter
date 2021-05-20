import {createStore} from "redux";
import {Actions} from "./Actions";

const initialState: BpmConverterState = {
    bpm: 0,
    conversion: {
        quarterMs: 0,
        eighthMs: 0,
        sixteenth: 0,
        demisemiquaverMs: 0,
        eightsTripletMs: 0,
        sixteenthsTripletMs: 0
    }
}

export interface Conversion {
    quarterMs: number;
    eighthMs: number;
    sixteenth: number;
    demisemiquaverMs: number;
    eightsTripletMs: number;
    sixteenthsTripletMs: number
}

export interface BpmConverterState {
    bpm: number;
    conversion: Conversion
}


function calculateConversion(bpm: number): Conversion {
    const quarterMs = 60000 / bpm;
    const eightMs = quarterMs / 2;
    const sixteenthMs = eightMs / 2;
    const demisemiquaverMs = sixteenthMs / 2;
    const eigthsTripletsMs = quarterMs / 3;
    return {
        quarterMs: quarterMs,
        eighthMs: eightMs,
        sixteenth: sixteenthMs,
        demisemiquaverMs: demisemiquaverMs,
        eightsTripletMs: eigthsTripletsMs,
        sixteenthsTripletMs: 0
    }
}

const rootReducer = (state = initialState, action: any) => {
    console.log("some action appeared", action);
    switch (action.type) {
        case Actions.BPM_CHANGED:
            return newState({
                ...state,
                bpm: action.payload,
                conversion: calculateConversion(action.payload)
            });
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
