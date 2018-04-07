import React from 'react';
import {Link} from 'react-router-dom';

const MealInfo = ({ meal, watch }) => {
if(!meal){
  return (
    <h4>Select a meal...</h4>
  )
} else {
  return(
 <div className="row">
 <div>
   <div className="col s12 m6 l3" >
   <div className="row">
   <div className="container">
   <img src={'https://shaolinfriedrice.com/covers/' + meal.poster} alt={meal.poster} width="250px" height="auto" />
   <p className="center-align">{meal.mealIDa}-{meal.mealIDb}</p>
   <div className="row">
   <a onClick={() => watch()} className="btn-floating waves-effect waves-light red white-text">
    <i className="material-icons left">play_circle_outline</i>
     Watch
    </a>
   <Link to="/meals" className="btn-floating  waves-effect waves-light green white-text">
   <i className="material-icons left">playlist_add</i>
     More Meals
   </Link>
   </div>
   <div className="row">
   <div className="col s6"><b>Director</b></div>
   <div className="col s6"><a>{meal.director}</a></div>
   <div className="col s6"><b>Language</b></div>
   <div className="col s6"><a>{meal.language}</a></div>
   <div className="col s6"><b>Starring</b></div>
   <div className="col s6"><a>{meal.actors}</a></div>
   <div className="col s6"><b>Subtitle</b></div>
   <div className="col s6"><a>{meal.subtitle}</a></div>
   <div className="col s6"><b>Studio</b></div>
   <div className="col s6"><a>{meal.studio}</a></div>
 </div>
 </div>
   </div>    
 </div>
 <div className="col s12 m6 l9">
 <div className="container">
    <div className="row">
       <h3 className="center-align">{meal.title}</h3>
       <p className="center-align">{meal.ratings} | {meal.hrs} hr {meal.mins} min | {meal.genre} | {meal.releaseDate} </p>
       <img src={'https://shaolinfriedrice.com/sfr_movies/' + meal.mealPoster} alt={meal.mealPoster} width="100%" height="auto"/>
       <div className="row">
       <h5 className="center-align">PLOT</h5>
       <p className="center-align">{meal.description}</p>
       <hr />

       <div className="row">
         <i className="center-align">[ BE THE FIRST TO REVIEW ]</i>
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
 </div>
  )
}
}



export default MealInfo;