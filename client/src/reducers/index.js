import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import mealReducer from './mealReducers';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    meals: mealReducer
});