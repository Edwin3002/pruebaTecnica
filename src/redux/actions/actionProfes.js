import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { getMyData } from "../../Firebase/firebaseConfig"

import { typesProfes } from "../types/types"


//listar_paint
export const listFilterAsyn = (type, search) => {
    return async (dispatch) => {
        const colleccionTraer =collection(getMyData, "Profesores")
        const q = query(colleccionTraer, where(type, ">=", search), where(type, "<=", search + '~'))
        const datFilter = await getDocs(q)
        const Profesores = []
        // datFilter.forEach((doc) => {
        //     Profesores.push({
        //         ...doc.data()
        //     })
        // })
        datFilter.forEach((doc => {
            Profesores.push(doc.data())
        }))
        dispatch(listFilterSync(Profesores))

    }
}

export const listFilterSync = (Profesores) => {
    return {
        type: typesProfes.search,
        payload: Profesores
    }

}

//listar_paint
export const listAsynPr = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(getMyData, "Profesores"))
        const Profesores = []
        colleccionTraer.forEach((doc) => {
            Profesores.push({
                ...doc.data()


            })
        })
        dispatch(listSyncPr(Profesores))

    }
}

export const listSyncPr = (Profesores) => {
    return {
        type: typesProfes.paint,
        payload: Profesores
    }

}

//add
export const addAsync = (Profesores)=>{
    return(dispatch)=>{
        addDoc(collection(getMyData, 'Profesores'), Profesores)
        .then(resp => {
            dispatch(addSync(Profesores))
            console.log(Profesores)
             dispatch(listAsynPr())
        })
        .catch(error => {
            console.warn(error);
        })
    }
}

export const addSync = (Profesores) => {
    return {
        type: typesProfes.add,
        payload: Profesores,
    }
}

//delete
export const deleteAsync = (id) => {

    return async (dispatch) => {
        const colleccionTraer = collection(getMyData, "Profesores")
        const q = query(colleccionTraer, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((collec => {
            deleteDoc(doc(getMyData, "Profesores", collec.id))
        }))
        dispatch(deleteSync(id))
        dispatch(listAsynPr())
    }
}

export const deleteSync = (id) => {
    return {
        type: typesProfes.delete,
        payload: id
    }
}

//update
export const updateAsync = (index, Profe) => {
    console.log(index, Profe)
    return async (dispatch) => {
        const colleccionTraer = collection(getMyData, "Profesores")
        const q = query(colleccionTraer, where("id", "==", index))
        const traerDatosQ = await getDocs(q)
        console.log(colleccionTraer)
        console.log(q)
        console.log(traerDatosQ)
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        console.log(id)
        const documenRef = doc(getMyData, "Profesores", id)
        await updateDoc(documenRef, Profe)
            .then(resp => {
                dispatch(UpdateSync(Profe))
                console.log(resp)
            })
            .catch((err) => console.log(err))
            dispatch(listAsynPr())
    }
}


export const UpdateSync = (Profe) => {
    return {
        type: typesProfes.editSync,
        payload: Profe
    }

}