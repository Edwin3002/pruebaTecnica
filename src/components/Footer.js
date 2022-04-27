import React from 'react'
import { Card, ListGroup, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/style.css'

export const Footer = () => {
    return (
        <div className='foot2 mt-5 pb-4'>
            <Card.Footer align='center' className='foot1 text-light' >Inicio de pagina</Card.Footer>

            <Table className='foot2  table-borderless w-75 mx-auto my-4 text-light' responsive="sm">
                <thead>
                    <tr>
                        <th>Conócenos</th>
                        <th>Gana dinero con nosotros</th>
                        <th>Podemos ayudarte</th>
                        <th>Métodos de pagoA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Trabajar en Amazon</td>
                        <td>Vender en Amazon Handmade</td>
                        <td>Departamento de prensa</td>
                        <td>Tarjetas de crédito y débito</td>
                    </tr>
                    <tr>
                        <td>Información corporativa</td>
                        <td>Publica tu libro en Kindle</td>
                        <td>Devolver o reemplazar productos</td>
                        <td>Tarjetas de regalo</td>
                    </tr>
                    <tr>
                        <td>Departamento de prensa</td>
                        <td>Programa de afiliados</td>
                        <td>Gestionar contenido y dispositivos</td>
                        <td>Meses sin intereses</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Anuncia tus productos</td>
                        <td>Ayuda</td>
                        <td>Amazon Cash</td>
                    </tr>
                </tbody>
            </Table>
            <hr />
            <ListGroup horizontal className='d-flex justify-content-evenly '>
                <ListGroup.Item className='bg-transparent d-flex'>
                    <img className='d-flex margin-auto'
                        src="https://i.ibb.co/MSyvvTJ/Whats-App-Image-2022-04-25-at-10-24-26-PM-removebg-preview.png"
                        width="10%" alt="" />
                </ListGroup.Item>
                <Link to='/crud' className='crud d-flex align-items-center'>
                    <ListGroup.Item className='bg-transparent border-warning border-1 rounded text-light '>
                        <div className=" bi bi-cloud-plus"> Crud  </div>
                    </ListGroup.Item>
                </Link>
            </ListGroup>
        </div>
    )
}
