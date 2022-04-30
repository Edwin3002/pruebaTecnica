import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../Hooks/useForm'
import { addAsync, deleteAsync, listAsyn, updateAsync } from '../redux/actions/actionBecas'
import uuid from 'react-uuid'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Button, ModalBody, useDisclosure, Text, FormControl, FormLabel, Input, Select, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const CrudClases = () => {


    // Subir clases
    const [values, handleInputChange, reset] = useForm({
        id: uuid(),
        name: '',
        teacher: '',
        date: '',
        room: ''
    })

    const { name, teacher, date, room } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addAsync(values))
        reset()
    }


    // cargar data
    const dispatch = useDispatch()

    const { clases } = useSelector(store => store.clases)

    useEffect(() => {
        dispatch(listAsyn())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // modales
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()
    const finalRef = React.useRef()
    // action update
    const [actionModalEdit, setActionModalEdit] = useState([])
    const editarM = (p) => {
        setActionModalEdit(p)
        onOpen1()

    }
    const editarYes = () => {
        // valuesEdit.id = actionModalEdit.id
        dispatch(updateAsync(actionModalEdit.id, valuesEdit))
        setTimeout(() => {
            onClose1()
        }, 1000)
    }
    const [valuesEdit, handleInputChangeEdit] = useForm({
        name: actionModalEdit.name,
        teacher: actionModalEdit.teacher,
        date: actionModalEdit.date,
        room: actionModalEdit.room,
        // id: actionModalEdit.id
    })


    // action delete
    const [actionModalDelete, setActionModalDelete] = useState([])
    const eliminar = (p) => {
        onOpen2()
        setActionModalDelete(p)
        console.log(p)
    }

    const eliminarYes = () => {
        console.log(actionModalDelete.id)
        dispatch(deleteAsync(actionModalDelete.id))
        setTimeout(() => {
            onClose2()
        }, 1000)
    }
    return (
        <div>
            <Flex justify='space-around'>
                <Text fontSize='4xl' fontWeight='bold' >CRUD TUTORIAS</Text>
                <Link to='/crudProfes'>
                    <Button bg='#5534A5' color='white' my='10px' size='lg'>
                        Crud Profesores
                    </Button>
                </Link>
            </Flex>
            <FormControl m='20px auto' w=' 90%' >
                <FormLabel htmlFor='materia'>Materia </FormLabel>
                <Select id='materia' placeholder='Selecciona tu materia' name='name' value={name} onChange={handleInputChange}>
                    <option >Ingles</option>
                    <option>Fisica</option>
                    <option>Programacion</option>
                </Select>
                <FormLabel htmlFor='profe'>Profesor</FormLabel>
                <Select id='profe' placeholder='Selecciona tu profesor' name='teacher' value={teacher} onChange={handleInputChange}>
                    <option>Hugo</option>
                    <option>Paco</option>
                    <option>Luis</option>
                </Select>
                <FormLabel htmlFor='salon'>Salon</FormLabel>
                <Select id='salon' placeholder='Selecciona un salon' name='room' value={room} onChange={handleInputChange}>
                    <option>a1</option>
                    <option>a2</option>
                    <option>b1</option>
                    <option>b2</option>
                    <option>c1</option>
                    <option>c2</option>
                </Select>
                <FormLabel htmlFor='date'>Fecha</FormLabel>
                <Input id='date' type='date' name='date' value={date} onChange={handleInputChange} />
                <Button colorScheme='blue' my=' 20px' onClick={handleSubmit}>Subir tutoria</Button>
            </FormControl>
            <TableContainer m='20px auto' w='90%'>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Tutorias agendadas</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Actions</Th>
                            <Th>Materia</Th>
                            <Th>Profesor</Th>
                            <Th>Fecha</Th>
                            <Th>Salon</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            clases.map((cl, index) => (
                                <Tr key={index}>
                                    <Td >
                                        <Flex justify='space-around'>
                                            {/* <span onClick={() => { editarM(cl) }} className="bi bi-pencil-square text-warning"></span> */}
                                            <span onClick={() => { editarM(cl) }} className="bi bi-pencil-square text-warning"></span>
                                            <span onClick={() => { eliminar(cl) }} className="bi bi-trash3 text-danger"></span>
                                        </Flex>
                                    </Td>
                                    <Td>{cl.name}</Td>
                                    <Td>{cl.teacher}</Td>
                                    <Td>{cl.date}</Td>
                                    <Td>{cl.room}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>

            {/* modal editar */}
            <Modal finalFocusRef={finalRef} isOpen={isOpen1} onClose={onClose1}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar Tutorias</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl m=' auto' w=' 90%'>
                            <FormLabel htmlFor='materia'>Materia actual <span style={{ color: '#ff7f50' }}>{actionModalEdit.name}</span></FormLabel>
                            <Select id='materia' placeholder='Selecciona tu materia' name='name' value={valuesEdit.name} onChange={handleInputChangeEdit}>
                                <option>Ingles</option>
                                <option>Fisica</option>
                                <option>Programacion</option>
                            </Select>
                            <FormLabel htmlFor='profe'>Profesor actual <span style={{ color: '#ff7f50' }}>{actionModalEdit.teacher}</span></FormLabel>
                            <Select id='profe' placeholder='Selecciona tu profesor' name='teacher' value={valuesEdit.teacher} onChange={handleInputChangeEdit}>
                                <option>Hugo</option>
                                <option>Paco</option>
                                <option>Luis</option>
                            </Select>
                            <FormLabel htmlFor='salon'>Salon actual <span style={{ color: '#ff7f50' }}>{actionModalEdit.room}</span></FormLabel>
                            <Select id='salon' placeholder='Selecciona un salon' name='room' value={valuesEdit.room} onChange={handleInputChangeEdit}>
                                <option>a1</option>
                                <option>a2</option>
                                <option>b1</option>
                                <option>b2</option>
                                <option>c1</option>
                                <option>c2</option>
                            </Select>
                            <FormLabel htmlFor='date'>Fecha actual <span style={{ color: '#ff7f50' }}>{actionModalEdit.date}</span></FormLabel>
                            <Input id='date' type='date' name='date' value={valuesEdit.date} onChange={handleInputChangeEdit} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='outline' colorScheme='yellow' mx='10px' onClick={editarYes}>Editar</Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose1}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* modal eliminar */}
            <Modal finalFocusRef={finalRef} isOpen={isOpen2} onClose={onClose2}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Desea borrar esta tutoria?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <span><Text fontWeight='bold'>Materia</Text> {actionModalDelete.name}</span>
                        <span><Text fontWeight='bold'>Profesor</Text> {actionModalDelete.teacher}</span>
                        <span><Text fontWeight='bold'>Fecha</Text> {actionModalDelete.date}</span>
                        <span><Text fontWeight='bold'>Salon</Text> {actionModalDelete.room}</span>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='outline' colorScheme='red' mx='10px' onClick={() => eliminarYes()}>Yes</Button>
                        <Button colorScheme='blue' mr={3} onClick={onClose2}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )

}

