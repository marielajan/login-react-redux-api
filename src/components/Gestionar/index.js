import React from 'react'
import Menu from '../common/menu'
import Gestionar from '../gestionar/gestionar'

const Lista = () => {
    return (
        <React.Fragment>
            <Menu/>         
            <div className="container-fluid">
                <div className="row">               
                    <div className="col-12">
                        <Gestionar/>
                    </div>
                </div>            
            </div> 
        </React.Fragment>
    )
}

export default Lista 