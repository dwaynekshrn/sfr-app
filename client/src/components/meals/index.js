import React, {Component} from 'react';
import Meal from './meal';


class Meals extends Component{
    render(){
        return(
            <div className="container">
               <Meal />
            </div>
        )
    }
}

export default Meals;