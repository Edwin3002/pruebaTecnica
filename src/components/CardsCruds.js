import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listAsyn } from '../redux/actions/actionBecas';
import { Link } from 'react-router-dom';
import { Box, Button, Image, Wrap, WrapItem } from '@chakra-ui/react';
import '../css/home.css'
export const CardsCruds = () => {

    const dispatch = useDispatch()

    const { clases } = useSelector(store => store.clases)
    const [all, setAll] = useState(clases)
    console.log(all)
    console.log(clases)



    useEffect(() => {
        dispatch(listAsyn())
        setAll(clases)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div className="home" >
            {/* {
                clases.map((clase, index) => (
                    <div key={index}>
                        <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
                            {clase.duration}
                        </Box>
                        <Heading size='md' my='2'>
                                {clase.name}
                        </Heading>
                        <Text>
                            Catch up on what’s been cookin’ at Smashing and explore some of the most
                            popular community resources.
                        </Text>
                        
                    </div>
                ))
            } */}
            <Wrap spacing='50px' mx='50px' my='50px' justify='center'>
                <WrapItem w='45%' flexDirection='column' bg='#c4c4c4' alignItems='center'>
                    <Box m='20px' border='2px solid #5534A5' borderRadius='20px'>
                        <Image className='imgAdd' borderRadius='20px' src='https://i.ibb.co/b7QN3y7/5679438.jpg' alt='Dan Abramov' />
                    </Box>
                    <Link to='/crudClases'>
                        <Button bg='#FFC450' my='10px' size='lg'>
                            Agregar Tutorias
                        </Button>
                    </Link>
                </WrapItem>
                <WrapItem w='45%' flexDirection='column' bg='#c4c4c4' alignItems='center'>
                    <Box m='20px' border='2px solid #FF862B' borderRadius='20px'>
                        <Image className='imgAdd' borderRadius='20px' src='https://i.ibb.co/mB8g1sV/3747914.jpg' alt='Dan Abramov' />
                    </Box>
                    <Link to='/crudProfes'>
                        <Button bg='#5534A5' color='white' my='10px' size='lg'>
                            Agregar Profesores
                        </Button>
                    </Link>
                </WrapItem>
            </Wrap>
        </div>
    )
}
