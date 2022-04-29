import { Avatar, Box, Text } from '@chakra-ui/react'
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import Logo from '../img/logo.png'
export const Footer = () => {
    return (
        <Box bg='#3a2372'>
            <hr />
            <TableContainer>
                <Table variant='unstyled' color='white' >
                    <TableCaption>
                    <Avatar bg='white' p='1' name='Ryan Florence' src={Logo} />
                    <Text>Todos los derechis reservados eBook</Text>
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Conócenos</Th>
                            <Th>Gana dinero con nosotros</Th>
                            <Th>Podemos ayudarte</Th>
                            <Th>Redes sociales</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Trabajar en eBook</Td>
                            <Td>Realizar capacitaciones</Td>
                            <Td>Departamento de prensa</Td>
                            <Td><i className="bi bi-instagram"></i> Instagram</Td>
                        </Tr>
                        <Tr>
                            <Td>Información corporativa</Td>
                            <Td>Publica tu libro en eBook</Td>
                            <Td>Gestionar contenido y dispositivos</Td>
                            <Td><i className="bi bi-twitter "></i> Twitter</Td>
                        </Tr>
                        <Tr>
                            <Td>Departamento de prensa</Td>
                            <Td>Programa de mentores</Td>
                            <Td></Td>
                            <Td><i className="bi bi-facebook"> </i> Facebook</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}
