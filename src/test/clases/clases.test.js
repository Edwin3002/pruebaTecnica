
import '@testing-library/jest-dom'
import { typesProducts, } from '../../redux/types/types'

describe('realizar pruebas al login', () => {

    //----clases----/
    test('verificar el type de clases', () => {
        expect(typesProducts).toEqual({
            add: 'add',
            paint: 'paint',
            update: 'update',
            delete: 'delete',
            detail: 'detail',
            search: 'search'
        })
    })

    // test('reducer al search de clases', () => {
    //     const initialState = {name: 'edwin'};
    //     const action = {
    //         type: typesProducts.search,
    //         payload: {

    //         }
    //     }
    //     const state = typesProducts.search(initialState, action)
    //     expect(state).toEqual({
    //         name: 'edwin'
    // })
    // })

    // test('action al search de clases', () => {
    //     const array = [{ name: 'edwin' }, { name: 'eduard' }, { name: 'david' }, { name: 'daniel' }]
    //     const listFilterSync = (array) => {
    //         return {
    //             type: typesProducts.search,
    //             payload: array
    //         }

    //     }
    //     expect(array).toEqual({
    //         name: 'edwin'
    //     })
    // })
    // test('action al search de clases', () => {
    //     // const array = [{ name: 'edwin' }, { name: 'eduard' }, { name: 'david' }, { name: 'daniel' }]
    //     const t = 'name'
    //     const n = 'hugo'
    //     const clases = []
    //     const listFilterAsyn = (type, search) => {
    //         return async (dispatch) => {
    //             const colleccionTraer = collection(getMyData, "Clases")
    //             const q = query(colleccionTraer, where(type, ">=", search), where(type, "<=", search + '~'))
    //             const datFilter = await getDocs(q)
    //             datFilter.forEach((doc => {
    //                 clases.push(doc.data())
    //                 console.log(clases)
    //                 return clases
    //             }))

    //         }
    //     }
    //     listFilterAsyn(t, n)

    //     const data = [{
    //         date: "2022-04-21",
    //         id: "64f1cf2-60b2-cb54-8436-b2ed3e2ae",
    //         name: "Fisica",
    //         room: "b1",
    //         teacher: "Hugo",
    //     },
    //     {
    //         date: "2022-04-18",
    //         id: "fba8e8d-f327-a2ec-3eea-04d4882b1fd",
    //         name: "Programacion",
    //         room: "b2",
    //         teacher: "Hugo"
    //     }]
    //     expect(clases).toEqual(
    //         //         name: 'edwin'
    //     )
    // })


})