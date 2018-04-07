import _ from 'lodash';
import React, {Component} from 'react';
import MealInfo from './mealInfo';
import MealSlider from './mealSlider/mealSlider';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMeals, mealInfo } from '../../actions/';

class Meal extends Component{
    componentDidMount(){
        this.props.fetchMeals();
    }

    renderSliders(){
        return <MealSlider />
    }

    renderMeals(){
        return _.map(this.props.meals, meal => {
            return(
                <div className="col s12 m4 l3" key={meal._id}>
                <div className="card z-depth-0" style={{ height: '495px'}}>
                    <div className="card-image">
                    <img src={'https://shaolinfriedrice.com/covers/' + meal.poster } alt={meal.poster} height="270px" />
                    <Link to={`/meals/${meal.mealIDb}`} onClick={() => <MealInfo watch={() => this.setState({playing: true}) }  />}  className="btn-floating waves-effect waves-light green right"><i className="material-icons">play_arrow</i></Link>
                    <Link to={`/meals/${meal.mealIDb}`} className="btn-floating waves-effect waves-light red right"><i className="material-icons">toc</i></Link>
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
            <div>
            <div>
               {this.renderSliders()}
            </div>
               {this.renderMeals()}
            </div>
        )
    }
}

function mapStateToProps({ meals }){
    return { meals }
}

export default connect(mapStateToProps, { mealInfo, fetchMeals })(Meal);
