import React from 'react'
import Menu from '../common/menu'

const Home = () => {
    return (
        <React.Fragment>
            <Menu/>   
            <div>
                <div className='container-fluid' >
                    <img
                        className="d-block w-75 "
                         src="http://aicogestion.org/wp-content/uploads/2018/06/Logo-UAI.png" position="center" style={{marginTop: 200 + 'px'}}
                         alt=""
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home 