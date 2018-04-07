import React, {Component} from 'react';

class Chat extends Component{
    render(){
        return(
            <div className="row">
              <ul className="collection">
              <li className="collection-item avatar">
                <img src="https://lorempixel.com/300/300/people/7" alt="" className="circle" />
                <span className="title">Title</span>
                <p>First Line 
                   Second Line
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">favorite_border</i><i className="material-icons">monetization_on</i></a>
              </li>
            </ul>
            <input placeholder="Type A Message..."  />                      
          
          </div>
        )
    }
}

export default Chat;