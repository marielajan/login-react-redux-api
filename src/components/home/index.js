import React from 'react'
import Menu from '../common/menu'

const Home = () => {
    return (
        <React.Fragment>
            <Menu/>   
            <div>
                <div className='container-fluid' >
                    <img
                        className="d-block mx-auto img-fluid w-50 "
                         src="http://aicogestion.org/wp-content/uploads/2018/06/Logo-UAI.png" 
                         style={{marginTop: 200 + 'px'}} 
                         alt=""
                    />  
                    <br></br>
                    <br></br>
                    <h3 className='p-2 m-4 text-center'>
                    Sede Rosario
                    </h3>
                    <p className='p-1 m-4 text-center'>
                    Ingeniería en Sistemas Informáticos
                    </p>                 
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home 