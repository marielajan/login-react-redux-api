import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Button, Col } from 'react-bootstrap';
import { editPersonalAction } from '../../../store/actions/personalsActions'; 
import { useHistory } from 'react-router-dom';

const ModificarDatos = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [personalState, setPersonal] = useState({
        nombre: '',
        email: '',
        estado: '',
    });

    const { loading, error, personal } = useSelector((state) => state.personals);

    useEffect(() => {
        setPersonal(personal);
    }, [personal]);

    const { nombre, email, estado } = personalState;

    const editPersonal = (personal) => dispatch(editPersonalAction(personal));
    
    const onFormChange = (e) => {
        setPersonal({
        ...personalState,
        [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //   e.preventDefault();
        //   e.stopPropagation();
        // }
        editPersonal(personalState);
        //setValidated(true);
        history.push(`/gestionar`);
    }; 


    return (
        <Form onSubmit={onSubmit} >
            
            <Form.Group className="mb-3" controlId="formGridNombre">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control 
                name="nombre"
                value={nombre}
                onChange={onFormChange}  
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control 
                name="email"
                value={email}
                onChange={onFormChange} 
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridEstado">
            <Form.Label>Estado</Form.Label>  
            <Form.Control 
                name="estado"
                value={estado}
                onChange={onFormChange} 
            />
            </Form.Group>

            <Button variant="primary" type="submit">Guardar</Button>{' '}
           
            {loading ? <p> Loading... </p> : null}
            {error ? (
            <p className='alert alert-danger p-2 m-4 text-center'>
                Ocurrio un error.
            </p>
            ) : null} 
        </Form>
    )
}

export default ModificarDatos
