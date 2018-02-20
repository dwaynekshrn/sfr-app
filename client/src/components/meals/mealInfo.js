import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {mealInfo} from '../../actions';

import {connect} from 'react-redux';

class MealInfo extends Component{
constructor(meal){
  super();
  this.state = {}
  console.log('WHAT IS MEALS', meal)
}

  renderContent(meal){
   if(!this.props.meal){
     return (
       <h4>Select a meal...</h4>
     )
   } else {
     return(
    <div>
      <div className="col s12 m6 l4" >
      <div className="row">
      <div className="container">
      <img src={'image/' + this.props.meal.poster} alt={this.props.meal.poster} />
      <p>{this.props.meal.mealIDa}-{this.props.meal.mealIDb}</p>
      <div className="row">
      <a href="/meals/watch" className="btn-flat red white-text left">
       <i className="material-icons left">play_circle_outline</i>
        Watch
       </a>
       </div>
       <div className="row">
      <a href="/meals" className="btn-flat green white-text left">
      <i className="material-icons left">playlist_add</i>
        More Meals
      </a>
      </div>
      <div className="row">
      <div className="col s6"><b>Director</b></div>
      <div className="col s6"><a>{this.props.meal.director}</a></div>
      <div className="col s6"><b>Language</b></div>
      <div className="col s6"><a>{this.props.meal.language}</a></div>
      <div className="col s6"><b>Starring</b></div>
      <div className="col s6"><a>{this.props.meal.actors}</a></div>
      <div className="col s6"><b>Subtitle</b></div>
      <div className="col s6"><a>{this.props.meal.subtitle}</a></div>
      <div className="col s6"><b>Studio</b></div>
      <div className="col s6"><a>{this.props.meal.studio}</a></div>
    </div>
    </div>
      </div>    
    </div>
    <div className="col s12 m6 l8">
    <div className="container">
       <div className="row">
          <h3>{this.props.meal.title}</h3>
          <p>{this.props.meal.ratings} | {this.props.meal.hrs} hr {this.props.meal.mins} min | {this.props.meal.genre} | {this.props.meal.releaseDate} </p>
          <img src={'covers/' + this.props.meal.mealPoster} alt={this.props.meal.mealPoster}/>
          <div className="row">
          <h5>PLOT</h5>
          <p>{this.props.meal.description}</p>
          <hr />

          <div className="row">
            <i>[ BE THE FIRST TO REVIEW ]</i>
          </div>
          <div className="row">
          <h5>Leave A Review!</h5>
          <form>
          <input type="text" name="subject" placeholder="Subject" />
          <input type="text" name="review" placeholder="Review" />
          <a type="submit"  disable="true">Review</a>
          </form>
        </div>
          </div>
       </div>
       </div>
    </div>
    </div>
     )
   }
  }

    render(){
      console.log(this.props);
        return(
            <div className="row">
            {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps(state){
  return { meal: state.info }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ mealInfo }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MealInfo);