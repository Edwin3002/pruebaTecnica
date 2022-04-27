import React from 'react';
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../Hooks/useForm';
import { registerAsync } from '../redux/actions/actionRegister';

const Register = () => {
    const dispatch = useDispatch()
    const [values, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    })

    const { nombre, email, pass1, pass2 } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        dispatch(registerAsync(email, pass1, nombre))
        reset()
    }

    return (
        <div>
            <Nav className='d-flex justify-content-between' style={{ background: '#4B3F6B', fontWeight: 'bold', backgroundImage: "url('https://i.ibb.co/CngVcj8/descarga-2.png')" }} as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/Login" style={{ color: 'white' }}>Volver</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1 className='text-center'> Registrarse</h1>

            <Container>
                <Row>
                    <Col>
                        <Form.Label>Nombre (obligatorio)</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label>Apellido (obligatorio)</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 d-flex " >
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    name="nombre"
                                    value={nombre}
                                    onChange={handleInputChange}
                                />
                                <Form.Control type="text" placeholder="Enter lastName" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Correo (obligatorio)</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="pass1"
                                    value={pass1}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                                <Form.Label>Repita contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="pass2"
                                    value={pass2}
                                    onChange={handleInputChange}

                                />
                            </Form.Group>
                            <Button variant="primary" className='w-100' style={{ background: '#2ACFCF' }} type="submit">
                                Registrarse
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <p className='fw-normal'>
                    Al hacer clic en "Regístrate", aceptas las condiciones de uso de “Asistente Prof ” y reconoces haber leído la política de privacidad.
                </p>
                <img className='d-flex m-auto w-100' src="https://i.ibb.co/3shb2pT/3785210-removebg-preview-1.png" alt='people'></img>
            </Container>

        </div>
    );
};

export default Register;