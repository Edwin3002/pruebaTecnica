import { typesProducts } from "../types/types";

const initialState = {
    becas: []
}


export const becasReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesProducts.paint:
            return {
                becas: [...action.payload]
            }
        case typesProducts.add:
            return {
                becas: [action.payload]
            }
        case typesProducts.delete:
            return {
                becas: state.becas.filter(p => p.id !== action.payload)
            }
            case typesProducts.update:
                console.log(state)
            return {
                ...state
            }

        default:
            return state
    }
}