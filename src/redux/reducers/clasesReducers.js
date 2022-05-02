import { typesProducts } from "../types/types";

const initialState = {
    clases: []
}


export const clasesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesProducts.paint:
            return {
                clases: [...action.payload]
            }
        case typesProducts.search:
            console.log(action)
            console.log(state)
            return {
                clases: action.payload
            }
        case typesProducts.add:
            return {
                clases: [action.payload]
            }
        case typesProducts.delete:
            return {
                clases: state.clases.filter(p => p.id !== action.payload)
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