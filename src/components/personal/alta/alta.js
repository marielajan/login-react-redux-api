import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Button, Col } from 'react-bootstrap';
import { addNewPersonalAction } from '../../../store/actions/personalsActions'; 

const Alta = () => {
    // useState Se utiliza para setear los valores en los campos del formulario.
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [estado, setEstado] = useState('');

    // Permite utilziar los dispatch.
    const dispatch = useDispatch();

    // Acceder al state del Store! [!IMPORTANTE!]
    const { loading, error } = useSelector((state) => state.personals);

    // Llama el action.
    const addNewPersonal = (personal) => dispatch(addNewPersonalAction(personal));

    const onSubmit = (e) => {
        e.preventDefault();

        //Validar formulario.
        if (nombre.trim() === '' || email.trim() === '' || estado.trim() === '' )
        return;

        //Si no hay errores.
        //Agregar Personal.
        const personal = {
            nombre,
            email,
            estado,
        };

        addNewPersonal(personal);

        // Redireccionar a la lista de personal.
    }; 

    return (
        <Form onSubmit={onSubmit} >
            
            <Form.Group className="mb-3" controlId="formGridNombre">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}  
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridEstado">
            <Form.Label>Estado</Form.Label>  
            <Form.Control 
                value={estado}
                onChange={(e) => setEstado(e.target.value)} 
            />
            </Form.Group>

            <Button variant="primary" type="submit">Agregar</Button>{' '}
           
            {loading ? <p> Loading... </p> : null}
            {error ? (
            <p className='alert alert-danger p-2 m-4 text-center'>
                Ocurrio un error.
            </p>
            ) : null} 
        </Form>
    )
}

export default Alta
