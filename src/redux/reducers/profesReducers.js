import { typesProfes } from "../types/types";

const initialState = {
    profes: []
}


export const profesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesProfes.paint:
            return {
                profes: [...action.payload]
            }
        case typesProfes.add:
            return {
                profes: [action.payload]
            }
        case typesProfes.delete:
            return {
                profes: state.profes.filter(p => p.id !== action.payload)
            }
            case typesProfes.update:
                console.log(state)
            return {
                ...state
            }

        default:
            return state
    }
}