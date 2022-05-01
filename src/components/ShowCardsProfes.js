import { Avatar, Badge, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, Input, Select, Text, useDisclosure, Wrap } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../Hooks/useForm'
import { listAsyn, listFilterAsyn } from '../redux/actions/actionProfes'

export const ShowCardsProfes = () => {
    // cargar data
    const dispatch = useDispatch()

    const { profes } = useSelector(store => store.profes)


    // Subir clases
    const [values, handleInputChange] = useForm({
        identify: ''
    })
    const { identify } = values
    const btnfiltro = (tp) => {
        console.log(identify, tp)
        dispatch(listFilterAsyn(tp, identify))
    }


    //modal filter
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const btnall = () => {
        dispatch(listAsyn())
    }
    useEffect(() => {
        dispatch(listAsyn())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (


        <div >
            <Text fontSize='4xl' align='center'>Profesores</Text>
            <Flex justify='right'>
                <Button ref={btnRef} colorScheme='purple' m='20px' onClick={btnall}>
                    Ver todos
                </Button>
                <Button ref={btnRef} colorScheme='yellow' m='20px' onClick={onOpen}>
                    Filtros
                </Button>
            </Flex>

            <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Filtros</DrawerHeader>
                    <DrawerBody>
                        <FormControl w='80%' m='auto'>
                            <Input id='nam' type='text' placeholder='Nombre' name='identify' onChange={handleInputChange} />
                            <Button colorScheme='blue' my=' 20px' onClick={() => { btnfiltro('name') }}>Buscar Profesor por Nombre</Button>
                            <Input id='nam' type='text' placeholder='Apellido' name='identify' onChange={handleInputChange} />
                            <Button colorScheme='blue' my=' 20px' onClick={() => { btnfiltro('lastName') }}>Buscar Profesor por Apellido</Button>
                            <Select id='materia' placeholder='Selecciona el programa' name='identify' onChange={handleInputChange}>
                                <option >Ingles</option>
                                <option>Fisica</option>
                                <option>Programacion</option>
                            </Select>
                            <Button colorScheme='blue' my=' 20px' onClick={() => { btnfiltro('program') }}>Buscar por Programa</Button>
                            <Select id='clase' placeholder='Selecciona el semestre' name='identify' onChange={handleInputChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Select>
                            <Button colorScheme='blue' my=' 20px' onClick={() => { btnfiltro('semester') }}>Buscar por semestre</Button>
                            <Input id='nam' type='text' placeholder='Correo' name='identify' onChange={handleInputChange} />
                            <Button colorScheme='blue' my=' 20px' onClick={() => { btnfiltro('email') }}>Buscar Profesor por Correo</Button>
                            <Input id='nam' type='text' placeholder='Celular' name='identify' onChange={handleInputChange} />
                            <Button colorScheme='blue' my=' 20px' onClick={() => { btnfiltro('numberPhone') }}>Buscar Profesor por Celular</Button>
                            <Input id='nam' type='text' placeholder='Cedula' name='identify' onChange={handleInputChange} />
                            <Button colorScheme='blue' my=' 20px' onClick={() => { btnfiltro('cc') }}>Buscar Profesor por Cedula</Button>
                        </FormControl>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Wrap className='bgCardProfes' justify='space-around' p='6' bg='' w='95%' m='20px auto'>
                {
                    profes.map((pr, index) => (
                        <Box key={index} bg='white' m='20px' p='20px' borderRadius='20px'>
                            <Flex>
                                <Avatar size='xl' src='https://bit.ly/broken-link' />
                                <Box ml='3'>
                                    <Text fontWeight='bold'>
                                        {pr.name}
                                    </Text>
                                    <Text fontWeight='bold'>
                                        {pr.lastName}
                                    </Text>
                                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                                        {pr.program}
                                    </Badge>
                                    <Text fontSize='sm'>Semestre: {pr.semester}</Text>
                                </Box>
                            </Flex>
                            <Text fontSize='lg'>Correo: {pr.email}</Text>
                            <Text fontSize='md'>Celular: {pr.numberPhone}</Text>
                            <Text fontSize='sm'>Cedula: {pr.cc}</Text>
                        </Box>
                    ))
                }
            </Wrap>
        </div >
    )
}
