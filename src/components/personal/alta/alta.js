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
    const addNewPersonal = (personal) => dispatch(addNewPersonalAction(Personal));

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

        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />

                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

                <Form.Group className="mb-3" controlId="formGridNombre">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control placeholder="1234 Main St" />
                </Form.Group>

             <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Legajo</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Provincia</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Elegir</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group> 

                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row> 

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Dirección </Form.Label>
                <Form.Control placeholder="Calle, número, piso, depto" />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Activo" />
            </Form.Group>

            <Button variant="primary">Agregar</Button>{' '}
            <Button variant="secondary">Cancelar</Button>{' '}
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
