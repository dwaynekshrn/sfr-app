import React from 'react';

const Slider = () => {
    return(
        <div className="carousel carousel-slider center" data-indicators="true">
        <div className="carousel-fixed-item center">
          <a className="btn-flat waves-effect light-blue white-text darken-text-2">GET STARTED</a>
          <a className="btn-flat waves-effect white grey-text darken-text-2">LEARN MORE</a>
        </div>
        <div className="carousel-item green accent-3 white-text" href="#one!">
          <h2>Medallion helps publishers</h2>
          <p className="white-text">increase engagement and build loyal audiences</p>
        </div>
        <div className="carousel-item orange white-text" href="#two!">
          <h2>Second Panel</h2>
          <p className="white-text">This is your second panel</p>
        </div>
        <div className="carousel-item red white-text" href="#three!">
          <h2>Third Panel</h2>
          <p className="white-text">This is your third panel</p>
        </div>
        <div className="carousel-item purple white-text" href="#four!">
          <h2>Fourth Panel</h2>
          <p className="white-text">This is your fourth panel</p>
        </div>
      </div>
    )
}

export default Slider;