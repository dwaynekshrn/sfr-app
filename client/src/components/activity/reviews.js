import React, {Component} from 'react';

class Reviews extends Component{
    render(){
        return(
            <div className="row">
            <ul className="collection">
            <li className="collection-item avatar">
              <img src="https://lorempixel.com/300/300/people/7" alt="" className="circle" />
              <span className="title"><h4>Title</h4><a>@username</a></span>

              <div id="adjustMargin" className="container-fluid">
              <p>First Line Second Line First Line Second Line First Line Second Line First Line Second Line First Line Second Line First Line Second Line First Line Second Line First Line Second Line First Line Second Line First Line Second Line First Line Second Line First Line Second Line
              </p>
              </div>
              <a href="#!" className="secondary-content"><i className="material-icons">grade</i><i className="material-icons">grade</i><i className="material-icons">grade</i><i className="material-icons">grade</i><i className="material-icons">grade</i></a>
              <div className="row">
              <div className="col s1"><i className="material-icons">chat_bubble</i></div>
              <div className="col s1"><i className="material-icons">attach_money</i></div>
              </div>
              </li>
          </ul>                    
        
        </div>
        )
    }
}

export default Reviews;