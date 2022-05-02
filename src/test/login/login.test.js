
import '@testing-library/jest-dom'
import { loginSincronico } from '../../redux/actions/actionLogin'
import { loginReducers } from '../../redux/reducers/loginReducers'
import { typesLogin, } from '../../redux/types/types'

describe('realizar pruebas al login', () => {

    //----login----/
    test('verificar el type de login', () => {
        expect(typesLogin).toEqual({
            login: 'login',
            logout: 'logout'
        })
    })

    test('reducer del login', () => {
        const initialState = {};
        const action = {
            type: typesLogin.login,
            payload: {
                email: 'edwin@gmail.com',
                password: 'Edwin123'
            }
        }
        const state = loginReducers(initialState, action)
        expect(state).toEqual({
            id: 'edwin@gmail.com',
            name: 'Edwin123'
        })
    })
    
    //----login sincronico----/
    test('login sincronico', () => {
        const state = loginSincronico('ed@gmail.com', 'Ed123')
        const email = 'ed@gmail.com'
        const password = 'Ed123'
        expect(state).toEqual({
            type: typesLogin.login,
            payload: {
                email, password
            }
        })
    })
    
})