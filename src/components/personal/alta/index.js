import React from 'react'
import Menu from '../../common/menu'
import Alta from './alta'

const Formulario = () => {
    return (
        <React.Fragment>
            <Menu/>         
            <div className="container-fluid">
                <div className="row">               
                    <div className="col-12">
                        <Alta/>
                    </div>
                </div>            
            </div> 
        </React.Fragment>
    )
}

export default Formulario 