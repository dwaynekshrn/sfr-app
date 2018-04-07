import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Login from './components/auth/login';
import Register from './components/auth/register/register';
import Landing from './components/landing';
import Meals from './components/meals';
import MealIndex from './components/meals/mealIndex';
import MealPost from './components/meals/mealPost';
import Activity from './components/activity';
import Profile from './components/user';
import './App.css';

const Wallet = () => <h2>Wallet</h2>;

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
         <BrowserRouter >
           <div className="row">
             <Header />
             <Route exact path="/" component={Landing} />
             <Route path="/login" component={Login} />
             <Route path="/register" component={Register} />
             <Route path="/activity" component={Activity} />
             <Route path="/wallet" component={Wallet} />
             <Route path="/user/:id" component={Profile} />
             <Route exact path="/meals" component={Meals} />
             <Route path="/meals/:id" component={MealIndex} />
           </div>
         </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
