import React from 'react'
import Menu from '../common/menu'
import Contacto from './contacto'

const FormularioContacto = () => {
    return (
        <React.Fragment>
            <Menu/>         
            <div className="container-fluid">
                <div className="row">               
                    <div className="col-12">
                        <Contacto/>
                    </div>
                </div>            
            </div> 
        </React.Fragment>
    )
}

export default FormularioContacto 