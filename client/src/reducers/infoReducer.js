import { MEAL_INFO } from '../actions/types';

export default function(state = null, action){
    switch(action.type){
        case MEAL_INFO:
        return action.payload;
         break;

        default:
        return state
    }


}