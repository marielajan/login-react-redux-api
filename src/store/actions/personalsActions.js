import Swal from 'sweetalert2';
import client from '../../config/axios';
import {
  ADD_PERSONAL,
  ADD_PERSONAL_SUCCESS,
  ADD_PERSONAL_ERROR,
  EDIT_PERSONAL,
  EDIT_PERSONAL_SUCCESS,
  EDIT_PERSONAL_ERROR,
  DELETE_PERSONAL,
  DELETE_PERSONAL_SUCCESS,
  DELETE_PERSONAL_ERROR,
  GET_PERSONALS,
  GET_PERSONALS_SUCCESS,
  GET_PERSONALS_ERROR,
} from '../../types/personals';

const personalUrl = '/personal';

// Agregar Nuevo Personal.
export function addNewPersonalAction(personal) {
  return async (dispatch) => {
    dispatch(addNewPersonal());
    try {
      // Primero intenta agregar un personal. Cargando = True.
      await client.post(`${personalUrl}`, personal);
      // Si la agrega correctamente, dispara la accion con el objeto de personal cargado correctamente.
      dispatch(addNewPersonalSuccess(personal));

      // Alerta exitosa.
      Swal.fire(
        'Correcto',
        'El personal se agrego correctamente...',
        'success'
      );
    } catch (error) {
      console.error(error);
      // Si falla, envia una notificacion de error.
      dispatch(addNewPersonalError(true));
      // Alerta de error.
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error, intenta de nuevo.',
      });
    }
  };
}

const addNewPersonal = () => ({
  type: ADD_PERSONAL,
});

// Si el personal se guarda en la base de datos.
const addNewPersonalSuccess = (personal) => ({
  type: ADD_PERSONAL_SUCCESS,
  payload: personal,
});

// Si ocurre un error en el guardado del personal.
const addNewPersonalError = (status) => ({
  type: ADD_PERSONAL_ERROR,
  payload: status,
});

// Obtener todo el personal.
export function getAllPersonalsAction() {
  return async (dispatch) => {
    dispatch(getAllPersonals());
    try {
      const { data } = await client.get(`${personalUrl}/all`);
      dispatch(getAllPersonalsSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getAllPersonalsError(true));
    }
  };
}

const getAllPersonals = () => ({
  type: GET_PERSONALS,
});

const getAllPersonalsSuccess = (personals) => ({
  type: GET_PERSONALS_SUCCESS,
  payload: personals,
});

const getAllPersonalsError = (status) => ({
  type: GET_PERSONALS_ERROR,
  payload: status,
});

// Eliminar Personal.
export const deletePersonalAction = (id) => {
  return async (dispatch) => {
    dispatch(deletePersonal());
    try {
      await client.delete(`${personalUrl}/${id}`);
      dispatch(deletePersonalSuccess(id));
      Swal.fire(
        'Eliminado',
        'El personal se elimino correctamente...',
        'success'
      );
    } catch (error) {
      console.error(error);
      dispatch(deletePersonalError(true));
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error al eliminar personal, intenta de nuevo.',
      });
    }
  };
};

const deletePersonal = () => ({
  type: DELETE_PERSONAL,
});

const deletePersonalSuccess = (id) => ({
  type: DELETE_PERSONAL_SUCCESS,
  payload: id,
});

const deletePersonalError = (status) => ({
  type: DELETE_PERSONAL_ERROR,
  payload: status,
});

// Editar Personal.
export const editPersonalAction = (personal) => {
  return async (dispatch) => {
    dispatch(editPersonal(personal));
  };
};

const editPersonal = (personal) => ({
  type: EDIT_PERSONAL,
  payload: personal,
});

const editPersonalSuccess = (personal) => ({
  type: EDIT_PERSONAL_SUCCESS,
  payload: personal,
});

const editPersonalError = (status) => ({
  type: EDIT_PERSONAL_ERROR,
  payload: status,
});
