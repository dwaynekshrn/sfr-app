import React from 'react';

const Slider = () => {
    return(
        <div className="carousel carousel-slider center" data-indicators="true">
        <div className="carousel-fixed-item center">
          <a href="/meals" className="btn-flat waves-effect light-blue white-text darken-text-2">GET STARTED</a>
          <a className="btn-flat waves-effect white grey-text darken-text-2">LEARN MORE</a>
        </div>
        <div className="carousel-item green accent-3 white-text" href="#one!">
         <img src="https://source.unsplash.com/random/1600x900" alt="Slider1" />
          </div>
        <div className="carousel-item orange white-text" href="#two!">
          <img src="https://source.unsplash.com/collection/190727/1600x900" alt="Slider2" />
          </div>
        <div className="carousel-item red white-text" href="#three!">
          <img src="https://source.unsplash.com/user/erondu/1600x900" alt="Slider3" />
          </div>
        <div className="carousel-item purple white-text" href="#four!">
          <img src="https://source.unsplash.com/daily" alt="Slider4" />
          </div>
      </div>
    )
}

export default Slider;