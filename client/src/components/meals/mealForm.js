import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import MealField from './mealField';
import mapProps from '../../utils/mapProps';
import FIELDS from './formFields';

class MealForm extends Component {
renderFields(){
    return _.map(FIELDS, ({label, name}) => {
       return <Field key={name} label={label} type="text" name={name} component={MealField} />
    })
}
render(){
    return(
        <div className="container">
           
                <div className="row">
                <form onSubmit={this.props.handleSubmit(this.props.onMealSubmit)}>
                     {this.renderFields()}    
                    <div className="input-field col s12 m6 l4">
                    <button type="submit" className="btn-flat waves-effect waves-light red white-text validate">
                    Post
                    <i className="material-icons right">video_library</i>
                    </button>
                    </div>
                </form>
                </div>         
        </div>
    )
  }
}

function validate(values){
    const errors = {};
    _.map(FIELDS, ({ name }) => {
        if(!values[name]){
          errors[name] = 'You must provide a value'
        }
    });

    errors.mapProps = mapProps(values.mapProps || '');
    return errors;
  }
  

export default reduxForm({
    validate,
    form: 'mealPost',
    destroyOnUnmount: false
})(MealForm);