import React from 'react'
import Menu from '../common/menu'
import Logout from '../logout/logout'

const Salir = () => {
    return (
        <React.Fragment>
            <Menu/>         
            <div className="container-fluid">
                <div className="row">               
                    <div className="col-12">
                        <Logout/>
                    </div>
                </div>            
            </div> 
        </React.Fragment>
    )
}

export default Salir 