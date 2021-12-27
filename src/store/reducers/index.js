import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import personalsReducer from './personalsReducer';

// Se utiliza un reducer Index que integrara todos los demas reducers.

export default combineReducers({
  login: loginReducer,
  personals: personalsReducer
});
