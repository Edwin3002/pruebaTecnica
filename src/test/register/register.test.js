
import '@testing-library/jest-dom'
import { registerSync } from '../../redux/actions/actionRegister'
import { registerReducers } from '../../redux/reducers/registerReducers'
import { typesRegister } from '../../redux/types/types'

describe('realizar pruebas al register', () => {

    //----register----/
    test('verificar el type de resgister', () => {
        expect(typesRegister).toEqual({
            register: 'register'
        })
    })

    test('reducer del register', () => {
        const initialState = {};
        const action = {
            type: typesRegister.register,
            payload: {
                email: 'edwin@gmail.com',
                pass: 'Edwin123',
                name: 'Edwin'
            }
        }
        const state = registerReducers(initialState, action)
        expect(state).toEqual({
            email: 'edwin@gmail.com',
            pass: 'Edwin123',
            name: 'Edwin'
        })
    })

    //----register sincronico----/
    test('register sincronico', () => {
        const state = registerSync('ed@gmail.com', 'Edwin123', 'Edwin')
        const email = 'ed@gmail.com'
        const pass = 'Edwin123'
        const name = 'Edwin'
        expect(state).toEqual({
            type: typesRegister.register,
            payload: {
                email, pass, name
            }
        })
    })
})