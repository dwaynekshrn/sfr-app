import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
              return 'Still deciding';
            case false:
               return (
                <div>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </div>
               );
            default:
              return (
                <div>
                <ul className="right hide-on-med-and-down">
                 <li><a href="/activity">Activity</a></li>
                 <li><a href="/meals">Meals</a></li>
                 <li><a href="/wallet">Wallet</a></li>
                 <li><a className="dropdown-button" data-activates="dropdown1">{this.props.auth.username}<i className="material-icons right">arrow_drop_down</i></a></li>
                 </ul>
                 </div>
              );
        }
    }
    render(){
        return(
        <div>
           <ul id="dropdown1" className="dropdown-content">
                <li><a href="/account">Account</a></li>
                <li><a href="/meals/post">Post</a></li>
                <li className="divider"></li>
                <li><a href="/login">Login</a></li>
            </ul>
        <nav>
          <div className="container">
            <div className="nav-wrapper">
            <a href="/" className="brand-logo">SFR</a>
            <ul className="right hide-on-med-and-down">
                {this.renderContent()}
            </ul>
            <ul id="slide-out" className="side-nav">
            <li><div className="user-view">
              <div className="background">
                <img src="images/office.jpg" alt="background" />
              </div>
              <a href="/"><img className="circle" src="images/yuna.jpg" alt="profile" /></a>
              <a href="/profile"><span className="white-text name">John Doe</span></a>
              <a href="/profile"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
             {this.renderContent()}
          </ul>
          <a data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
            </div>
        </nav> 
        </div>  
        )
    }
}

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(Header);