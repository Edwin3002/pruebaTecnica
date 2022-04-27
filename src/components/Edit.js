import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import { updateAsync } from '../redux/actions/actionBecas';

export const Edit = ({mEdit}) => {

    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [values, handleInputChange, ] = useForm({
        name: mEdit.name,
        id: mEdit.id,
        price: mEdit.price,
        img: mEdit.img
    })
    const { name, price, img, id} = values

    const handleSubmit = () => {
        console.log(values)
        dispatch(updateAsync(id, values))
    //    reset()
    }
    return (
        <div>
            <div>edit
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edite el producto aqui</Modal.Title>
                </Modal.Header>
                <Form className='w-75 my-5 mx-auto' >
                    <Form.Group className="mb-3" >
                        <Form.Label>Name product</Form.Label>
                        <Form.Control type="text" placeholder="Name" name='name' value={name} onChange={handleInputChange} />

                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Price product </Form.Label>
                        <Form.Control type="number" placeholder="Price" name='price' value={price} onChange={handleInputChange} />

                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Image product</Form.Label>
                        <Form.Control type="text" placeholder="Image" name='img' value={img} onChange={handleInputChange} />

                    </Form.Group>


                    <Button variant="primary" onClick={()=>handleSubmit()}>
                        <div className="bi bi-upload"> Update</div>
                    </Button>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
}
