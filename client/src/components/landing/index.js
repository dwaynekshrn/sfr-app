import React, { Component } from 'react';
import Slider from './slider';
import Properties from './properties';
import Stats from './stats';
import Parallax from './parallax';
import Blog from './blog';
import Footer from '../Footer';



class Landing extends Component{
    render(){
        return(
            <div>
               <Slider />
        
    <div className="container">
               <Properties />
               <Stats />
    </div>

    <Parallax />
    <Blog />
    <Footer />

            </div>
        )
    }
}

export default Landing;