import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './navBar';
import Banner from './banner';
import Chat from './chat';
import Reviews from './reviews';
import Charts from './charts';
import LandingReview from './landingReview';


class Activity extends Component{
    render(){
        return(
                <div className="row">
                        <NavBar />
                        <div className="col s12 m8 l8 white" style={{marginTop: '10px'}}>
                        <Banner />
                        <BrowserRouter >
                        <div className="row">
                        <Route exact path="/activity/" component={LandingReview} />
                            <Route exact path="/activity/chat" component={Chat} />
                            <Route exact path="/activity/reviews" component={Reviews} />
                            <Route exact path="/activity/charts" component={Charts} />  
                        </div>
                        </BrowserRouter>
                    </div>
                </div>
        )
    }
}

export default Activity;