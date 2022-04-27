import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { getMyData } from "../../Firebase/firebaseConfig"

import { typesProducts } from "../types/types"


//listar_paint
export const listAsyn = () => {
    return async (dispatch) => {
        const colleccionTraer = await getDocs(collection(getMyData, "becas"))
        const becas = []
        colleccionTraer.forEach((doc) => {
            becas.push({
                ...doc.data()


            })
        })
        dispatch(listSync(becas))

    }
}

export const listSync = (becas) => {
    return {
        type: typesProducts.paint,
        payload: becas
    }

}

//add
export const addAsync = (becas)=>{
    return(dispatch)=>{
        addDoc(collection(getMyData, 'becas'), becas)
        .then(resp => {
            dispatch(addSync(becas))
            console.log(becas)
             dispatch(listAsyn())
        })
        .catch(error => {
            console.warn(error);
        })
    }
}

export const addSync = (becas) => {
    return {
        type: typesProducts.add,
        payload: becas,
    }
}

//delete
export const deleteAsync = (id) => {

    return async (dispatch) => {
        const colleccionTraer = collection(getMyData, "becas")
        const q = query(colleccionTraer, where("id", "==", id))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((collec => {
            deleteDoc(doc(getMyData, "becas", collec.id))
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
export const updateAsync = (index, beca) => {
    console.log(index, beca)
    return async (dispatch) => {
        const colleccionTraer = collection(getMyData, "becas")
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
        const documenRef = doc(getMyData, "becas", id)
        await updateDoc(documenRef, beca)
            .then(resp => {
                dispatch(UpdateSync(beca))
                console.log(resp)
            })
            .catch((err) => console.log(err))
            dispatch(listAsyn())
    }
}


export const UpdateSync = (beca) => {
    return {
        type: typesProducts.editSync,
        payload: beca
    }

}