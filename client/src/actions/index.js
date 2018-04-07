import axios from 'axios';
import { FETCH_USER, FETCH_MEALS, MEAL_INFO, WATCH_MEAL } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitRegister = (values, history) => async dispatch => {
  const res = await axios.post('/auth/register', values);
  history.push('/');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitMeals = (values, history) => async dispatch => {
    const res = await axios.post('/api/meals', values);
    history.push('/meals');
    dispatch({ type: FETCH_USER, payload: res.data });
  };

  export const fetchMeals = () => async dispatch => {
     const res = await axios.get('/api/meals');
    dispatch({type: FETCH_MEALS, payload: res.data });
  }

  export const mealInfo = (mealIDb) => async dispatch => {
    const req = await axios.get(`/api/meals/${mealIDb}`);
    dispatch({type: MEAL_INFO, payload: req });
  }

  export const watchMeal = meal => async dispatch => {
    dispatch({type: WATCH_MEAL, payload: meal });
  }