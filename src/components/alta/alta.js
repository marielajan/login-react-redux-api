import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

const Alta = () => {
    return (

        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
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
        </Form>
    )
}

export default Alta
