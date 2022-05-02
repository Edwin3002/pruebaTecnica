import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { getMyData } from "../../Firebase/firebaseConfig"

import { typesProducts } from "../types/types"


//filter_paint
export const listFilterAsyn = (type, search) => {
    return async (dispatch) => {
        const colleccionTraer = collection(getMyData, "Clases")
        const q = query(colleccionTraer, where(type, ">=", search), where(type, "<=", search + '~'))
        const datFilter = await getDocs(q)
        const clases = []
        datFilter.forEach((doc => {
            clases.push(doc.data())
        }))
        dispatch(listFilterSync(clases))

    }
}

export const listFilterSync = (clases) => {
    console.log(clases)
    return {
        type: typesProducts.search,
        payload: clases
    }

}
//listar_paint
export const listAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(getMyData, "Clases"))
        const clases = []
        colleccionTraer.forEach((doc) => {
            clases.push({
                ...doc.data()


            })
        })
        dispatch(listSync(clases))

    }
}

export const listSync = (clases) => {
    return {
        type: typesProducts.paint,
        payload: clases
    }

}

//add
export const addAsync = (clases)=>{
    return(dispatch)=>{
        addDoc(collection(getMyData, 'Clases'), clases)
        .then(resp => {
            dispatch(addSync(clases))
             dispatch(listAsyn())
        })
        .catch(error => {
            console.warn(error);
        })
    }
}

export const addSync = (clases) => {
    return {
        type: typesProducts.add,
        payload: clases,
    }
}

//delete
export const deleteAsync = (id) => {

    return async (dispatch) => {
        const colleccionTraer = collection(getMyData, "Clases")
        const q = query(colleccionTraer, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((collec => {
            deleteDoc(doc(getMyData, "Clases", collec.id))
        }))
        dispatch(deleteSync(id))
        dispatch(listAsyn())
    }
}

export const deleteSync = (id) => {
    return {
        type: typesProducts.delete,
        payload: id
    }
}

//update
export const updateAsync = (index, clase) => {
    console.log(index, clase)
    return async (dispatch) => {
        const colleccionTraer = collection(getMyData, "Clases")
        const q = query(colleccionTraer, where("id", "==", index))
        const traerDatosQ = await getDocs(q)
        let id
        traerDatosQ.forEach(async (docu) => {
            id = docu.id
        })
        const documenRef = doc(getMyData, "Clases", id)
        await updateDoc(documenRef, clase)
            .then(resp => {
                dispatch(UpdateSync(clase))
            })
            .catch((err) => console.log(err))
            dispatch(listAsyn())
    }
}


export const UpdateSync = (clase) => {
    return {
        type: typesProducts.editSync,
        payload: clase
    }

}