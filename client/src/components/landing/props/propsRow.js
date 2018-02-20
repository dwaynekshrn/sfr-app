import React from 'react';

export default({image, title, paragraph, colorScheme}) => {
   return(
    <div className="row">
    <div className="col s12 m6 l6">
          <img src={image} width="100%" height="auto" alt={image} />
    </div>
    <div className="col s12 m6 l6">
          <div className="container">
            <h5 className={colorScheme}>{title}</h5>
            <p>
                {paragraph}
                <a className="btn-flat">Learn more <i className="material-icons">arrow_forward</i></a>
              </p>
          </div>
      </div>
  </div>
   );
}