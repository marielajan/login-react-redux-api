import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

import {
    deletePersonalAction,
    editPersonalAction,
} from '../../../store/actions/personalsActions'; 

const Gestionar = ({personal}) => { 
    const {_id, nombre, email, estado } = personal;

    const dispatch = useDispatch();
    const history = useHistory(); // Habilitar history para redireccionar.

    const onDeletePersonal = (id) => {
        // preguntar al usuario
        
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Esta accion es irreversible.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            }).then((result) => {
            if (result.value) {
                dispatch(deletePersonalAction(id));
            }
        });
    };

    const onEditRedirection = (id) => {
        dispatch(editPersonalAction(personal));
        history.push(`/personal/modificar/modificar/${id}`);
    }; 
    return (
       
         <tr>
            <td>{nombre}</td>
            <td>{email}</td>
            <td>{estado}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button 
                        type="button" 
                        className="btn btn-outline-primary"
                        onClick={() => onEditRedirection(_id)}
                    >
                        Editar
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-outline-primary"
                        onClick={() => onDeletePersonal(_id)}
                    >
                        Eliminar
                    </button>
                </div> 
            </td>
        </tr>

    )
}

export default Gestionar 