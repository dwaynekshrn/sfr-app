import React from 'react';


const MealWatch = ({meal}) => {
    return(
        <div className="video-container">
        <video preload="auto" poster={'https://shaolinfriedrice.com/sfr_movies/' + meal.mealPoster } width="100%" height="auto" controlsList="nodownload">
        <source src={'https://shaolinfriedrice.com/menu/' + meal.mealIDa + '/videos/' + meal.mealSrc } />
         <track id="trackSub" label={meal.language} kind="subtitles" srcLang="en" src={`meals/${meal.mealIDa}/videos/${meal.srt}`}  default />
        It seems your browser doesnt support the HTML5 video tag. Please update your browser.
      </video>
      <div className="fixed-action-btn toolbar">
      <a className="btn-floating btn-large red">
        <i className="large material-icons">menu</i>
      </a>
      <ul>
        <li className="waves-effect waves-light"><a href="#!"><i className="material-icons">play_arrow</i></a></li>
        <li className="waves-effect waves-light"><a href="/meals"><i className="material-icons">perm_media</i></a></li>
        <li className="waves-effect waves-light"><a href="#!"><i className="material-icons">rate_review</i></a></li>
        <li className="waves-effect waves-light"><a href="#!"><i className="material-icons">surround_sound</i></a></li>
        <li className="waves-effect waves-light"><a href="#!"><i className="material-icons">fullscreen</i></a></li>
      </ul>
    </div>
          
        </div>
    )
}



export default MealWatch;