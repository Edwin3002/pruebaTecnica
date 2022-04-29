import React from 'react';
import { Button, Flex, Image,Stack, Text} from '@chakra-ui/react';
import { NavLogin } from './NavLogin';

export const Login = () => {

    return (
        <div className='login ' style={{ background: '#5534A5', height: '100vh' }}>
            <NavLogin />

            <Flex w='75%' m='50px auto' wrap='wrap'>
            <Image w='45%' m='auto' src='https://i.ibb.co/0chxGpm/fondo-P-removebg-preview.png' alt='Dan Abramov' />
                <Stack  w='45%' spacing={3} m='50px'   justify='center' style={{ alignItems: 'flex-end' }}>
                    <Text fontSize='4xl' fontWeight='bold' color='#03c6ff'>BACK TO</Text>
                    <Text fontSize='4xl' fontWeight='bold' color='#ff7f50'>SCHOOL</Text>
                    <Text fontSize='xl' as='samp' color='white' textAlign='end' >  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </Text>

                    <Button w='25%' p='0' bg='#ffb847' size='lg' >
                        Ver mas
                    </Button>
                    <Flex w='50%' color='#83eaf5' style={{ justifyContent: 'space-around' }}>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-twitter "></i>
                        <i className="bi bi-facebook"></i>
                    </Flex>
                </Stack>
            </Flex>
        </div>
    );
};

