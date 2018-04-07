import _ from 'lodash';
import { FETCH_MEALS, MEAL_INFO } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case MEAL_INFO:
        return {...state, [action.payload.toLowerCase().mealIDb]: action.payload };

        case FETCH_MEALS:
        return _.mapKeys(action.payload, 'mealIDb');

        default:
        return state;
    }
}