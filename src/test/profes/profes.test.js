
import '@testing-library/jest-dom'
import { typesProfes, } from '../../redux/types/types'

describe('realizar pruebas al login', () => {

    //----login----/
    test('verificar el type de login', () => {
        expect(typesProfes).toEqual({
            add: 'add',
            paint: 'paint',
            update: 'update',
            delete: 'delete',
            detail: 'detail',
            search: 'search'
        })
    })


})