import '@testing-library/jest-dom'
import { loginReducers } from '../../redux/reducers/loginReducers'
import { typesLogin } from '../../redux/types/types'

describe('realizar pruebas al logout', () => {


    //----logout----/
    test('verificar el type de logout', () => {
        expect(typesLogin).toEqual({
            login: 'login',
            logout: 'logout'
        })
    })

    test('reducer logout', () => {
        const initialState = {
            email: 'paco@gmail.com',
            password: 'Paco123'
        }
        const action = {
            type: typesLogin.logout
        }
        const state = loginReducers(initialState, action);
        expect(state).toEqual({})
    })
})