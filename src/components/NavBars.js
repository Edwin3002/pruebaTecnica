import React, { useState } from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../Hooks/useForm';
import { logoutAsync } from '../redux/actions/actionLogin';


const NavBars = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }


    const { products } = useSelector(store => store.products)
    const [all, setall] = useState(products)


    return (
        <div >
            <Nav className="me-auto d-flex justify-content-between nav1">
                <Nav.Link className='px-0'>
                    <Link to="/" >
                        <img
                            src="https://i.ibb.co/MSyvvTJ/Whats-App-Image-2022-04-25-at-10-24-26-PM-removebg-preview.png"
                            width="10%" alt="" />
                    </Link>
                </Nav.Link>
                <Nav.Link className='d-flex align-items-center px-0'>
                    <Button onClick={handleLogout} variant="outline-danger ">Salir <i className="bi bi-box-arrow-left">
                    </i></Button>
                </Nav.Link>
            </Nav>

        </div>
    );
};

export default NavBars;