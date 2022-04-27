import React from 'react';
import { useDispatch } from 'react-redux';
import { loginEmailPassAsync, loginFacebook, loginGoogle } from '../redux/actions/actionLogin';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';

import * as Yup from 'yup';
import '../style/style.css'

//----------------Validacion de cada input -----------
const SignupSchema = Yup.object().shape({
    email: Yup.string().email('debe ser de tipo email example@gmail.com').min(5, 'email muy corto').max(50, 'excede el maximo').required('El email campo es obligatorio'),
    password: Yup.string().min(5, 'muy corta').max(10, 'muy larga').required('el password es obligatorio')
});

export const Login = () => {

    const dispatch = useDispatch()


    const handleGoogle = () => {
        dispatch(loginGoogle())
    }
    const handleFacebook = () => {
        dispatch(loginFacebook())
    }

    return (
        <div className='login '>
            <Nav className='d-flex justify-content-between' as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/" style={{ color: '#4B3F6B' }}>Atras</Nav.Link>
                </Nav.Item>
                <Link className="" to="/register">
                    <Nav.Item as="li">
                        <Nav.Link href="/register" style={{ color: '#4B3F6B' }}>Crear Cuenta</Nav.Link>
                    </Nav.Item>
                </Link>

            </Nav>
            <h1 className='text-center'>Iniciar sesion</h1>

            <Container>
                <Row>
                    <Col>
                        <Formik
                            initialValues={
                                {
                                    email: '',
                                    password: '',
                                }
                            }
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                console.log(values)
                                dispatch(loginEmailPassAsync(values.email, values.password))
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className=' mx-auto ' >
                                    <p className='d-flex mx-auto w-75 fw-bold' >Correo</p>
                                    <Field className='d-flex mx-auto w-75 ' placeholder="Email" type="text" style={{ margin: "2%" }}
                                        name="email" />
                                    {errors.email && touched.email ?
                                        (<div>{errors.email}</div>) : null}

                                    <p className='d-flex mx-auto w-75 fw-bold' > Contraseña</p>
                                    <Field className='d-flex mx-auto w-75 ' placeholder="Password" type="password" style={{ margin: "2%" }}
                                        name="password" />
                                    {errors.password && touched.password ?
                                        (<div>{errors.password}</div>) : null}
                                    <Button className="d-flex mx-auto w-75 text-center" type="submit" style={{background: '#2ACFCF'}}>
                                        Continue
                                    </Button>
                                </Form>
                            )}

                        </Formik>
                    </Col>
                    <Col className='my-5'>
                        <Container className="google-icon-wrapper d-flex border w-75 my-2" onClick={handleGoogle}>
                            <span className='d-flex m-auto '>
                                <img className="google-icon mx-2" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                Continuar con google
                            </span>
                        </Container>
                        <Container className="google-icon-wrapper d-flex border w-75 my-2" onClick={handleFacebook}>
                            <span className='d-flex m-auto'>
                                <img className="facebook-icon mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/25px-2021_Facebook_icon.svg.png" alt="facebook button" />
                                Continuar con facebook
                            </span>
                        </Container>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

