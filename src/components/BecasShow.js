import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listAsyn } from '../redux/actions/actionBecas';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const BecasShow = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { becas } = useSelector(store => store.becas)
    const [all, setAll] = useState(becas)
    console.log(all)



    useEffect(() => {
        dispatch(listAsyn())
        setAll(becas)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div className="cartas">
            {
                becas.map((beca, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        <div className='imgCard d-flex align-items-center'>

                            <Card.Img variant="top" src={beca.img} />
                        </div>
                        <Card.Body>
                            <Card.Text >
                                {beca.name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}
