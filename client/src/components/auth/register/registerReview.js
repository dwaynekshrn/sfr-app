import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import FIELDS from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../actions';

export const RegisterReview = ({ onCancel, formValues, submitRegister, history }) => {
const reviewFields = _.map(FIELDS, ({name, label}) => {
    return(
      <div key={name}>
       <label>{label}</label>
       <div>{formValues[name]}</div>
      </div>
    );
});
    return(
        <div className="container">
           <h5>Please confirm your registration details</h5>
           {reviewFields}
           <button className="btn-flat left" onClick={onCancel}>Back</button>
           <button 
            onClick={() => submitRegister(formValues, history)}
           className="btn-flat red white-text right" type="submit">
              Register User
            <i className="material-icons right">person_add</i>
            </button>
        </div>
    )
}

function mapStateToProps(state){
    return {  formValues: state.form.registerForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(RegisterReview));