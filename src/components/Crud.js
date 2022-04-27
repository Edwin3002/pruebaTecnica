import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Modal, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FileUp } from '../helpers/FileUp'
import { useForm } from '../Hooks/useForm'
import { addAsync, deleteAsync, listAsyn } from '../redux/actions/actionBecas'
import uuid from 'react-uuid'
import { Edit } from './Edit'

export const Crud = () => {
    const [actionModal, setActionModal] = useState([])

    // Subir becas
    const [values, handleInputChange, reset] = useForm({
        id: uuid(),
        name: '',
        discount: '',
        img: '',
    })

    const { name, discount, img } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        dispatch(addAsync(values))
        reset()
    }

    // Cloudinary image
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
        FileUp(file)
            .then(resp => {
                values.img = resp
                console.log(resp)
            })
            .catch(error => {
                console.warn(error)
            })
    }


    // action delete

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const eliminar = (p) => {
        handleShow2()
        setActionModal(p)
        console.log(p)
    }

    const eliminarYes = () => {
        console.log(actionModal.id)
        dispatch(deleteAsync(actionModal.id))
        setTimeout(() => {
            handleClose2()
        }, 1000)
    }


    // cargar data
    const dispatch = useDispatch()

    const { becas } = useSelector(store => store.becas)

    useEffect(() => {
        dispatch(listAsyn())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [modalEdit, setModalEdit] = useState(false)
    const [dataModal, setDataModal] = useState([])
    const editarM = (p) => {
        console.log(p)
        setDataModal(p)
        setModalEdit(true)
    }
    return (
        <div>
            <Form className='w-75 my-5 mx-auto' onSubmit={handleSubmit}>
                <h1 className='text-center'>Crud</h1>
                <Form.Group className="mb-3" >
                    <Form.Label>Name beca</Form.Label>
                    <Form.Control type="text" placeholder="Name" name='name' value={name} onChange={handleInputChange} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>discount beca </Form.Label>
                    <Form.Control type="number" placeholder="discount" name='discount' value={discount} onChange={handleInputChange} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Image beca</Form.Label>
                    <Form.Control type="file" placeholder="Image" name='img' value={img} onChange={handleFileChange} />

                </Form.Group>


                <Button variant="success" type="submit">
                    <div className="bi bi-cloud-arrow-up"> Upload</div>
                </Button>
            </Form>
            <Table className='w-75 m-auto ' striped bordered hover size="sm">
                <thead>
                    <tr className='text-center'>
                        <th>Name</th>
                        <th>Discount</th>
                        <th>Img</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        becas.map((beca, index) => (
                            <tr key={index} >

                                <td className='position-relative w-25'>
                                    <div className='position-absolute top-50 start-50 translate-middle'>
                                        {beca.name}
                                    </div>
                                </td>
                                <td className='position-relative w-2'>
                                    <div className='position-absolute top-50 start-50 translate-middle'>
                                        {beca.discount}%
                                    </div>
                                </td>
                                <td className='position-relative w-50'>
                                    <div className='imgCrud d-flex align-items-center'>
                                        <img className=' w-25 m-auto' src={beca.img} alt={beca.name} />
                                    </div>
                                </td>
                                <td className='position-relative w-2'>
                                    <div className='imgCrud d-flex align-items-center justify-content-evenly'>
                                        <div onClick={() => {editarM(beca)}} className="bi bi-pencil-square text-warning"></div>
                                        <div onClick={() => { eliminar(beca) }} className="bi bi-trash3 text-danger"></div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>Desea eliminar este producto?</Modal.Title>
                    </Modal.Header>
                    <Card.Img className='w-50 m-auto' variant="top" src={actionModal.img} />
                    <Modal.Body className='text-center'>{actionModal.name}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={eliminarYes}>
                            Yes
                        </Button>
                        <Button variant="primary" onClick={handleClose2}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Table>
            {
                modalEdit === true ? <Edit mEdit={dataModal} /> : ''
            }
        </div>
    )

}

