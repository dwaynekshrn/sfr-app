import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Login from './components/auth/login';
import Register from './components/auth/register/register';
import Landing from './components/landing';
import Meals from './components/meals';
import MealInfo from './components/meals/mealInfo';
import MealPost from './components/meals/mealPost';
import './App.css';

const Activity = () => <h2>Activity</h2>;
const Wallet = () => <h2>Wallet</h2>;

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
         <BrowserRouter >
           <div>
             <Header />
             <Route exact path="/" component={Landing} />
             <Route path="/login" component={Login} />
             <Route path="/register" component={Register} />
             <Route exact path="/meals" component={Meals} />
             <Route path="/meals/:info" component={MealInfo} />
             <Route path="/meals/post" component={MealPost} />
             <Route path="/activity" component={Activity} />
             <Route path="/wallet" component={Wallet} />
           </div>
         </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
