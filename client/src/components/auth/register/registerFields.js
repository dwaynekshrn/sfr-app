import React from 'react';

export default({ input, label, meta: {error, touched} }) => {
    return(
        <div className="row">
        <div className="input-field col s12">
          <p>{label}</p>
          <input {...input} onBlur={input.blur} onChange={input.onChange} style={{ marginBottom: '5px'}} />
          <div className="red-text" style={{ marginBottom: '20px'}}>
          {touched && error}
          </div>
        </div>
    </div>
    );
}