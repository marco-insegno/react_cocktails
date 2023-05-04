import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles/form.css';
import { useForm, ValidationError } from '@formspree/react';

function FormContact() {

    const [state, handleSubmit] = useForm("xrgvjadd");

console.log(state);

    if (state.succeeded) {
        return (
            <section className='container mt-5 text-center'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 p-5">
                        <h2 style={{
                            color: 'var(--second-color)',
                            backgroundColor: 'rgba(255, 255, 255, 0.70)',
                            lineHeight: '50px'
                        }} className='py-5 px-3'>Grazie per aver aggiunto la tua ricetta!</h2>
                    </div>
                </div>
            </section>
        )
    }
    
    return (

        <>
            <section className='container mt-5 py-5'>
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-6 border p-5 form-custom">

                        <Form className='my-3 mx-0 my-md-5 mx-md-5' onSubmit={handleSubmit}>

                            <Form.Group className="mb-4">
                                <Form.Label htmlFor="nome">Nome</Form.Label>
                                <Form.Control type="text" placeholder="Inserisci il nome" id='nome' name="nome"/>
                                <ValidationError
                                    prefix="Nome"
                                    field="nome"
                                    errors={state.errors}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <Form.Label htmlFor="cognome">Cognome</Form.Label>
                                <Form.Control type="text" placeholder="Inserisci il cognome" id='cognome' name="cognome"/>
                                <ValidationError
                                    prefix="Cognome"
                                    field="cognome"
                                    errors={state.errors}
                                />
                            </Form.Group>


                            <Form.Group className="mb-4" >
                                <Form.Label htmlFor="email">Email address</Form.Label>
                                <Form.Control type="email" placeholder="@" id='email' name="email"/>
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </Form.Group>


                            <Form.Group className="mb-4" >
                                <Form.Label htmlFor="telefono">Telefono</Form.Label>
                                <Form.Control type="number" placeholder="+" id='telefono' name="telefono"/>
                                <ValidationError
                                    prefix="Telefono"
                                    field="telefono"
                                    errors={state.errors}
                                />
                            </Form.Group>


                            <Form.Group className="mb-4">
                                <Form.Label htmlFor="ricetta">La Tua Ricetta</Form.Label>
                                <Form.Control as="textarea" placeholder="Descrivi la tua ricetta..." rows="5" id='ricetta' name="ricetta"/>
                                <ValidationError
                                    prefix="Ricetta"
                                    field="ricetta"
                                    errors={state.errors}
                                />
                            </Form.Group>

                            <div className='text-center mt-5'>
                                <Button variant="primary" type="submit" disabled={state.submitting} className='btn-custom py-3 px-sm-5 text-uppercase'>
                                    Invia Ricetta
                                </Button>
                                <ValidationError errors={state.errors} className="mt-3" style={{color:'orange'}}/>

                            </div>


                        </Form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FormContact