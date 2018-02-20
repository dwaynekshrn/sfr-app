import React, {Component} from 'react';
import MealInfo from './mealInfo';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchMeals, mealInfo } from '../../actions';

class Meal extends Component{
    componentDidMount(){
        this.props.fetchMeals();
    }

    renderMeals(){
        return this.props.meals.map(meal => {
            return(
                <div className="col s12 m4 l3" key={meal._id}>
                <div className="card" style={{height: '300px'}}>
                    <div className="card-image">
                    <img src={'/images' + meal.poster} alt={meal.poster} />
                    <a onClick={() => this.props.mealInfo(meal)} href="/meals/:meal"  className="btn-floating halfway-fab waves-effect waves-light red right"><i className="material-icons">add</i></a>
                    </div>
                    <div className="card-content">
                    <h5>{meal.title}</h5>
                    <p className="truncate">{meal.description}</p>
                    </div>
                    <div className="card-action">
                    <a>{meal.year}</a>
                    <a>{meal.genre}</a>
                  </div>
                </div>
                
                </div>
            )
        })
    }
    render(){
        return(
            <div className="row">
               {this.renderMeals()}
               <MealInfo />
            </div>
          
        )
    }
}

function mapStateToProps({ meals }){
    return { meals }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({ mealInfo, fetchMeals }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Meal);