import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '../../common/menu'
import List from './gestionar'
import { getAllPersonalsAction } from '../../../store/actions/personalsActions'; 

const Lista = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getAllPersonals = () => dispatch(getAllPersonalsAction());
        getAllPersonals();
        
      },[]);  

       
    const { loading, error, personals } = useSelector((state) => state.personals); 
    return (
        <React.Fragment>
            <Menu/>         
            <div className="container-fluid">
                <div className="row">               
                    <div className="col-12">
                    <br></br>
            <div class="row">
                <div class="col-2">
                    <a href="/alta" class="btn btn-primary" role="button">Agregar</a> 
                </div>
            </div>         
            <br></br>
            {loading ? <h4 className='text-center'> Loading... </h4> : null}

            {error ? (
                <p className='alert alert-danger p-2 m-4 text-center'>
                    Ocurrio un error.
                </p>
            ) : null} 
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre y Apellido</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {personals.length === 0
                        ? 'No hay Peliculas'
                        : personals.map ((personal) => (
                            <List key={personal._id} personal={personal} />
                         ))
                    }  
                </tbody>
            </table>
                    </div>
                </div>            
            </div> 
        </React.Fragment>
    )
}

export default Lista 