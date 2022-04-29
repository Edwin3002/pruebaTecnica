import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import Logo from '../img/logo.png'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { loginEmailPassAsync, loginFacebook, loginGoogle } from '../redux/actions/actionLogin'
import { Link } from 'react-router-dom'

//----------------Validacion de cada input -----------
const SignupSchema = Yup.object().shape({
    email: Yup.string().email('debe ser de tipo email example@gmail.com').min(5, 'email muy corto').max(50, 'excede el maximo').required('El email campo es obligatorio'),
    password: Yup.string().min(5, 'muy corta').max(10, 'muy larga').required('el password es obligatorio')
});
export const NavLogin = () => {
    const dispatch = useDispatch()
    const handleGoogle = () => {
        dispatch(loginGoogle())
    }
    const handleFacebook = () => {
        dispatch(loginFacebook())
    }
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Flex
                bg='#00bae0'
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton isActive={isOpen} as={Button} >
                                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}

                                </MenuButton>
                                <MenuList>
                                    <MenuItem fontSize='2xl'>Home</MenuItem>
                                    <MenuItem fontSize='2xl'>Nosotros</MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Image w='12%' src={Logo} alt='Dan Abramov' />
                    <Flex w='100%' display={{ base: 'none', md: 'flex' }} ml={10}>
                        <Text fontSize='2xl' m='auto'>Home</Text>
                        <Text fontSize='2xl' m='auto'>Nosotros</Text>
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        onClick={onOpen}
                        fontWeight={600}
                        color={'white'}
                        bg={'#ffc450'}
                        href={'#'}
                        _hover={{
                            bg: '#ff7f50',
                        }}>
                        Iniciar sesion
                    </Button>
                    <Link className="" to="/register">

                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            bg={'#5534a5'}
                            href={'#'}
                            _hover={{
                                bg: '#9a50ff',
                            }}>
                            Registrase
                        </Button>
                    </Link>
                </Stack>
            </Flex>

            {/* <Collapse in={open2} animateOpacity>
            </Collapse> */}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent border='2px solid #9a50ff'>
                    <ModalHeader>Iniciar sesion</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
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
                                    <Button className="d-flex mx-auto w-75 text-center" type="submit" style={{ background: '#2ACFCF' }}>
                                        Continue
                                    </Button>
                                </Form>
                            )}

                        </Formik>
                    </ModalBody>
                    <ModalBody>
                    <Box className="google-icon-wrapper d-flex m-auto w-75 my-2" onClick={handleGoogle}>
                            <span className='d-flex m-auto '>
                                <img className="google-icon mx-2" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                Continuar con google
                            </span>
                        </Box>
                        <Box className="google-icon-wrapper d-flex m-auto w-75 my-2" onClick={handleFacebook}>
                            <span className='d-flex m-auto'>
                                <img className="facebook-icon mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/25px-2021_Facebook_icon.svg.png" alt="facebook button" />
                                Continuar con facebook
                            </span>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    )
}
