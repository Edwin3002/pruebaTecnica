import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import { useForm } from '../Hooks/useForm'
import { addAsync, deleteAsync, listAsyn, updateAsync } from '../redux/actions/actionProfes'

export const CrudProfes = () => {

    const { profes } = useSelector(store => store.profes)

    // cargar data
    const dispatch = useDispatch()

    // modales
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()
    const finalRef = React.useRef()
    // Subir clases
    const [values, handleInputChange, reset] = useForm({
        id: uuid(),
        name: '',
        lastName: '',
        program: '',
        semester: '',
        cc: '',
        email: '',
        numberPhone: '',
    })

    const { name, lastName, program, semester, cc, email, numberPhone } = values


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        dispatch(addAsync(values))
        reset()
    }

    // action update
    const [actionModalEdit, setActionModalEdit] = useState([])
    const editarM = (p) => {
        setActionModalEdit(p)
        values.name = p.name
        values.lastName = p.lastName
        values.program = p.program
        values.semester = p.semester
        values.cc = p.cc
        values.email = p.email
        values.numberPhone = p.numberPhone
        values.id = p.id
        onOpen1()
    }
    const editarYes = () => {
        console.log(actionModalEdit)
        console.log(values)
        dispatch(updateAsync(actionModalEdit.id, values))

        console.log(values)
        setTimeout(() => {
            onClose1()
            values.name = ''
            values.lastName = ''
            values.program = ''
            values.semester = ''
            values.cc = ''
            values.email = ''
            values.numberPhone = ''
            values.id = ''
        }, 1000)
    }
    // action delete
    const [actionModalDelete, setActionModalDelete] = useState([])
    const eliminar = (p) => {
        setActionModalDelete(p)
        onOpen2()
    }

    const eliminarYes = () => {
        console.log(actionModalDelete.id)
        dispatch(deleteAsync(actionModalDelete.id))
        setTimeout(() => {
            onClose2()
        }, 1000)
    }

    useEffect(() => {
        dispatch(listAsyn())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <Flex justify='space-around'>
                <Text fontSize='4xl' fontWeight='bold' align='center'>CRUD DE PROFESORES</Text>
                <Link to='/crudClases'>
                    <Button bg='#FFC450' my='10px' size='lg'>
                        Crud Tutorias
                    </Button>
                </Link>
            </Flex>
            <FormControl m='20px auto' w=' 90%' >
                <FormLabel htmlFor='nam'>Nombre</FormLabel>
                <Input id='nam' type='text' name='name' value={name} onChange={handleInputChange} />
                <FormLabel htmlFor='lastName'>Apellido</FormLabel>
                <Input id='lastName' type='text' name='lastName' value={lastName} onChange={handleInputChange} />
                <FormLabel htmlFor='pro'>Programa</FormLabel>
                <Select id='pro' placeholder='Selecciona el programa al cual pertenece el instructor' name='program' value={program} onChange={handleInputChange} >
                    <option >Ingles</option>
                    <option>Fisica</option>
                    <option>Programacion</option>
                    <option>Biologia</option>

                </Select>
                <FormLabel htmlFor='sem'>Semestre</FormLabel>
                <Select id='sem' placeholder='Selecciona el semester' name='semester' value={semester} onChange={handleInputChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>

                </Select>
                <FormLabel htmlFor='cc'>Cedula</FormLabel>
                <Input id='cc' type='number' name='cc' value={cc} onChange={handleInputChange} />
                <FormLabel htmlFor='email'>Correo</FormLabel>
                <Input id='email' type='email' name='email' value={email} onChange={handleInputChange} />
                <FormLabel htmlFor='cel'>Celular</FormLabel>
                <Input id='cel' type='number' name='numberPhone' value={numberPhone} onChange={handleInputChange} />
                <Button colorScheme='blue' my=' 20px' onClick={handleSubmit}>Agregar instructores</Button>
            </FormControl>
            <TableContainer m='20px auto' w='90%'>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Profes registrados</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Actions</Th>
                            <Th>Nombre</Th>
                            <Th>Apellido</Th>
                            <Th>Materia</Th>
                            <Th>Semestre</Th>
                            <Th>Cedula</Th>
                            <Th>Correo</Th>
                            <Th>Celular</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            profes.map((p, index) => (
                                <Tr key={index}>
                                    <Td >
                                        <Flex justify='space-around'>
                                            <span onClick={() => { editarM(p) }} className="bi bi-pencil-square text-warning"></span>
                                            <span onClick={() => { eliminar(p) }} className="bi bi-trash3 text-danger"></span>
                                        </Flex>

                                    </Td>
                                    <Td>{p.name}</Td>
                                    <Td>{p.lastName}</Td>
                                    <Td>{p.program}</Td>
                                    <Td>{p.semester}</Td>
                                    <Td>{p.cc}</Td>
                                    <Td>{p.email}</Td>
                                    <Td>{p.numberPhone}</Td>

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
                    <ModalHeader>Editar perfil de tutor</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl m='20px auto' w=' 90%' >
                            <FormLabel htmlFor='nam'>Nombre</FormLabel>
                            <Input id='nam' type='text' name='name' value={name} onChange={handleInputChange} />
                            <FormLabel htmlFor='lastName'>Apellido</FormLabel>
                            <Input id='lastName' type='text' name='lastName' value={lastName} onChange={handleInputChange} />
                            <FormLabel htmlFor='pro'>Programa</FormLabel>
                            <Select id='pro' placeholder='Selecciona el programa al cual pertenece el instructor' name='program' value={program} onChange={handleInputChange} >
                                <option >Ingles</option>
                                <option>Fisica</option>
                                <option>Programacion</option>
                                <option>Biologia</option>
                            </Select>
                            <FormLabel htmlFor='sem'>Semestre</FormLabel>
                            <Select id='sem' placeholder='Selecciona el semester' name='semester' value={semester} onChange={handleInputChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>

                            </Select>
                            <FormLabel htmlFor='cc'>Cedula</FormLabel>
                            <Input id='cc' type='number' name='cc' value={cc} onChange={handleInputChange} />
                            <FormLabel htmlFor='email'>Correo</FormLabel>
                            <Input id='email' type='email' name='email' value={email} onChange={handleInputChange} />
                            <FormLabel htmlFor='cel'>Celular</FormLabel>
                            <Input id='cel' type='number' name='numberPhone' value={numberPhone} onChange={handleInputChange} />
                        </FormControl>



                        {/*<FormControl m=' auto' w=' 90%'>
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
            </FormControl> */}
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
                    <ModalHeader>Desea borrar este tutor?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <span><Text fontWeight='bold'>Nombre</Text> {actionModalDelete.name}</span>
                        <span><Text fontWeight='bold'>Apellido</Text> {actionModalDelete.lastName}</span>
                        <span><Text fontWeight='bold'>Programa</Text> {actionModalDelete.program}</span>
                        <span><Text fontWeight='bold'>Semestre</Text> " {actionModalDelete.semester} "</span>
                        <span><Text fontWeight='bold'>Cedula</Text> {actionModalDelete.cc}</span>
                        <span><Text fontWeight='bold'>Correo</Text> {actionModalDelete.email}</span>
                        <span><Text fontWeight='bold'>Celular</Text> {actionModalDelete.numberPhone}</span>
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
