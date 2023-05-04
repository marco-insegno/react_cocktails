import React from 'react'
import Card from 'react-bootstrap/Card';
import './styles/card.css'

function CardApp({ title, img, subtitle, icon, text }) {


    if (title && icon && text) {

        // Card Service
        return (

            <div className="col-12 col-md-6 col-lg-4 mb-5">
                <Card className='text-center card-custom-service py-5 px-3'>
                    <Card.Body className='d-flex flex-column justify-content-center justify-content-md-start align-items-center'>
                        <Card.Title className='fs-2 text-uppercase'>{title}</Card.Title>
                        <Card.Text className='my-5 fa-4x' style={{
                            color: 'var(--second-color)',
                        }}>
                            {icon}
                        </Card.Text>
                        <Card.Text className='fs-4'>
                            {text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    } else {

        // Card Team
        return (
            <div className="col-12 col-md-4 mb-4">
                <Card className='text-center text-uppercase card-custom-team' style={{
                    background: 'var(--second-color)',
                    color: 'var(--light-color)'
                }}>
                    <Card.Body className='d-flex flex-column justify-content-start align-items-center'>
                        <Card.Title className='mt-5 mb-3 fs-4'>{title}</Card.Title>
                        <Card.Text className='fs-6 fst-italic'>
                            {subtitle}
                        </Card.Text>
                        <img
                            alt={title}
                            src={img}
                            width='180'
                            height='180'
                            className='rounded-circle my-5'
                            style={{
                                border: '5px solid var(--first-color)'
                            }}
                        />
                    </Card.Body>
                </Card>
            </div>
        )
    }

} 

export default CardApp