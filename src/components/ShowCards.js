import { Avatar, Badge, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, Select, Text, useDisclosure, Wrap } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAsyn, listFilterAsyn } from '../redux/actions/actionBecas'
import '../css/ShowCards.css'
import { useForm } from '../Hooks/useForm'

export const ShowCards = () => {
    // cargar data
    const dispatch = useDispatch()

    const { clases } = useSelector(store => store.clases)


    // Subir clases
    const [values, handleInputChange] = useForm({
        identify: ''
    })
    const { identify } = values
    const btnfiltro = (tp) => {
        dispatch(listFilterAsyn(tp, identify))
    }
    const btnall = () => {
        dispatch(listAsyn())
    }

    //modal filter
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    useEffect(() => {
        dispatch(listAsyn())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <Text fontSize='4xl' align='center'>Clases</Text>
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
                            <Select id='profe' placeholder='Selecciona el profesor' name='identify' onChange={handleInputChange}>
                                <option >Hugo</option>
                                <option>Paco</option>
                                <option>Luis</option>
                            </Select>
                            <Button colorScheme='blue' my=' 20px' onClick={() => { btnfiltro('teacher') }}>Buscar por Profesor</Button>
                            <Select id='clase' placeholder='Selecciona el salon' name='identify' onChange={handleInputChange}>
                                <option>a1</option>
                                <option>a2</option>
                                <option>b1</option>
                                <option>b2</option>
                                <option>c1</option>
                                <option>c2</option>
                            </Select>
                            <Button colorScheme='blue' my=' 20px' onClick={() => { btnfiltro('room') }}>Buscar por salon</Button>
                            <Select id='materia' placeholder='Selecciona el programa' name='identify' onChange={handleInputChange}>
                                <option >Ingles</option>
                                <option>Fisica</option>
                                <option>Programacion</option>
                            </Select>
                            <Button colorScheme='blue' my=' 20px' onClick={() => { btnfiltro('name') }}>Buscar por Programa</Button>
                        </FormControl>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Wrap className='bgCardClases' justify='space-around' p='6' bg='' w='95%' m='20px auto'>
                {
                    clases.map((cl, index) => (
                        <Box key={index} bg='white' m='20px' p='20px' borderRadius='20px'>
                            <Text fontSize='4xl'>Clase {cl.name}</Text>
                            <Flex>
                                <Avatar src='https://bit.ly/broken-link' />
                                <Box ml='3'>
                                    <Text fontWeight='bold'>
                                        {cl.teacher}
                                        <Badge ml='1' colorScheme='green'>
                                            New
                                        </Badge>
                                    </Text>
                                    <Text fontSize='sm'>UI Engineer</Text>
                                </Box>
                            </Flex>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                Salon {cl.room}
                            </Badge>
                            <Text fontSize='lg'>Fecha: {cl.date}</Text>
                        </Box>
                    ))
                }
            </Wrap>
        </div>

    )
}

