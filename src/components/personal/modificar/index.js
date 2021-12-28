import React from 'react'
import Menu from '../../common/menu'
import Modificar from './modificar'

const Editar = () => {
    return (
        <React.Fragment>
            <Menu/>         
            <div className="container-fluid">
                <div className="row">               
                    <div className="col-12">
                        <Modificar/>
                    </div>
                </div>            
            </div> 
        </React.Fragment>
    )
}

export default Editar 