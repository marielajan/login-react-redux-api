import React from 'react'
import Menu from '../common/menu'
import Gestionar from '../Gestionar/gestionar'

const Home = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1">
                        <Menu/>
                    </div>
                    <div className="col-11">
                        <Gestionar/>
                    </div>
                </div>
            </div> 
        </React.Fragment>
    )
}

export default Home 