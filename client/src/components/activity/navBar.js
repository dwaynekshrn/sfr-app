import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <div className="col s12 m4 l3">
            <ul className="collection with-header">
            <li className="collection-item avatar">
            <img src="https://lorempixel.com/300/300/people/9" className="circle" />
            <a href="/activity">@username
            <br/> available!
            </a>
            </li>
            <li className="collection-item">
            <div className="input-field row">
              <input className="validate"  placeholder="Search..." />
            </div>
            </li>
            <li className="collection-item">
            Meals Consumed <a>10</a>
            <br/>Meals Rated <a>10</a>
            <br/>Meal Rewards <a>10</a> XLN
            </li>
            <li className="collection-item">
            <i className="material-icons left green-text">forum</i>
             <a href="/activity/chat">Chat</a>
            <span className="new badge green">4</span>
            </li>
            <li className="collection-item">
            <i className="material-icons left orange-text">favorite_border</i>
            <a href="/activity/reviews">Reviews</a>
            <span className="new badge orange">4</span>
            </li>
            <li className="collection-item">
            <i className="material-icons left red-text">insert_chart</i>
            <a href="/activity/charts">Charts</a>
            <span className="new badge red">4</span>
            </li>
            <li className="collection-item">ADVERTISE</li>
          </ul>
        </div>
        )
    }
}

export default NavBar;