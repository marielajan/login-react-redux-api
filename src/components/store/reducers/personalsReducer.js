import {
    ADD_PERSONAL,
    ADD_PERSONAL_SUCCESS,
    ADD_PERSONAL_ERROR,
    GET_PERSONALS,
    GET_PERSONALS_SUCCESS,
    GET_PERSONALS_ERROR,
    DELETE_PERSONAL,
    DELETE_PERSONAL_SUCCESS,
    DELETE_PERSONAL_ERROR,
    EDIT_PERSONAL,
    EDIT_PERSONAL_SUCCESS,
    EDIT_PERSONAL_ERROR,
  } from '../../types/personals';
  
  // Cada reducer tiene su propio State.
  const initialState = {
    personals: [],
    error: null,
    loading: false,
    film: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_PERSONAL:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_PERSONAL_SUCCESS:
        return {
          ...state,
          loading: false,
          personals: [...state.personals, action.payload],
          error: false,
        };
  
      case ADD_PERSONAL_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case GET_PERSONALS:
        return {
          ...state,
          loading: true,
        };
  
      case GET_PERSONALS_SUCCESS:
        return {
          ...state,
          loading: false,
          personals: action.payload,
          error: false,
        };
  
      case GET_PERSONALS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case DELETE_PERSONAL:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_PERSONAL_SUCCESS:
        return {
          ...state,
          loading: false,
          personals: state.personals.filter(
            (film) => film._id !== action.payload
          ),
          error: false,
        };
  
      case DELETE_PERSONAL_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case EDIT_PERSONAL:
        return {
          ...state,
          loading: false,
          film: action.payload,
        };
  
      case EDIT_PERSONAL_SUCCESS:
        return {
          ...state,
          loading: false,
          personals: state.personals.filter(
            (film) => film._id !== action.payload
          ),
          error: false,
        };
  
      case EDIT_PERSONAL_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
      default:
        return state;
    }
  }
  