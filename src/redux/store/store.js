import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducers";
import { clasesReducers } from "../reducers/clasesReducers";
import { registerReducers } from "../reducers/registerReducers";
import { profesReducers } from "../reducers/profesReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducersEnviar = combineReducers({
        login: loginReducers,
        register: registerReducers,
        // products: clasesReducers, 
        // becas: clasesReducers,
        clases: clasesReducers,
        profes: profesReducers

})

export const store= createStore(
    reducersEnviar,
        composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => {
    
})