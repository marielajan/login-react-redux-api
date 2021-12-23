import React from 'react'

const Gestionar = () => {
    return (
        <div>
            <br></br>
            <div class="row">
                <div class="col-2">
                    <a href="/alta" class="btn btn-primary" role="button">Agregar</a> 
                </div>
            </div>         
            <br></br>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre y Apellido</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark Otto</td>
                        <td>Otto@.....</td>
                        <td>Activo</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" class="btn btn-outline-primary">Editar</button>
                                <button type="button" class="btn btn-outline-primary">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Gestionar 