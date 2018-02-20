import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import RegisterField from './registerFields';
import validateEmails from '../../../utils/validateEmails';
import FIELDS from './formFields';

class RegisterForm extends Component {
renderFields(){
  return(
    <div>
        <div class="input-field col s12">
      <select>
        <option value="" disabled selected>Choose your Account Type</option>
        <option value="Cop">Cop</option>
        <option value="Pirate">Pirate</option>
        <option value="Monk">Monk</option>
        <option value="Ninja">Ninja</option>
      </select>
    </div>

    <div className="row">
    <div className="input-field col s12">
      <p>Username</p>
      <input type="text" name="username" style={{ marginBottom: '5px'}} />
      <div className="red-text" style={{ marginBottom: '20px'}}>
      </div>
    </div>
</div>

<div className="row">
    <div className="input-field col s12">
      <p>Email</p>
      <input type="email" name="password" style={{ marginBottom: '5px'}} />
      <div className="red-text" style={{ marginBottom: '20px'}}>
      </div>
    </div>
</div>

<div className="row">
    <div className="input-field col s12">
      <p>Password</p>
      <input type="password" name="password" style={{ marginBottom: '5px'}} />
      <div className="red-text" style={{ marginBottom: '20px'}}>
      </div>
    </div>
</div>

  </div>
  )       
}
render(){
 return(
      <div className="container">
      <h4>Register</h4>
      <form onSubmit={this.props.handleSubmit(this.props.onRegisterSubmit)} >
      {this.renderFields()}
      <div>
      <a href="/login" className="btn-flat left">Login</a>
      <button className="btn-flat red white-text right" type="submit">
        Confirm Account
      <i className="material-icons right">person_add</i>
      </button>
      </div>

    </form>
    </div>
    );
  }
}

function validate(values){
  const errors = {}
  _.each(FIELDS, ({name}) => {
    if(!values[name]){
      errors[name] = 'You must enter a value'
    }
  });

  errors.email = validateEmails(values.email || '');
  return errors;
}

export default reduxForm({
 validate,
 form: 'registerForm',
 destroyOnUnmount: false
})(RegisterForm);