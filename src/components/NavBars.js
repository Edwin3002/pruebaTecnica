import { Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logoutAsync } from '../redux/actions/actionLogin';
import Logo from '../img/logo.png'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const NavBars = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }

    return (
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
                                <MenuItem fontSize='2xl' onClick={() => navigate("/")}>Home</MenuItem>
                                <MenuItem fontSize='2xl'>Nosotros</MenuItem>
                                <MenuItem fontSize='2xl' onClick={handleLogout}
                                bg={'#5534a5'}
                                color='white'

                                _hover={{
                                    bg: '#9a50ff',
                                }}>Salir</MenuItem>
                                <MenuItem fontSize='2xl'>

                                </MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <Image w='10%' src={Logo} alt='Dan Abramov' />
                <Flex w='100%' display={{ base: 'none', md: 'flex' }} ml={10}>
                    {/* <Link> */}
                    <Text fontSize='2xl' m='auto' onClick={() => navigate("/")}>Home</Text>
                    {/* </Link> */}
                    <Text fontSize='2xl' m='auto'>Nosotros</Text>
                </Flex>
            </Flex>

            <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <Button
                    onClick={handleLogout}
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'#5534a5'}
                    href={'#'}
                    _hover={{
                        bg: '#9a50ff',
                    }}>
                    Salir
                </Button>
            </Stack>
        </Flex>
    );
};

export default NavBars;