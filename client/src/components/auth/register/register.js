import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import RegisterForm from './registerForm';
import RegisterReview from './registerReview';

class Register extends Component{
state = { showRegisterReview: false }
renderContent(){
    if(this.state.showRegisterReview){
        return <RegisterReview onCancel={() => this.setState({ showRegisterReview: false})} />
    }
    return <RegisterForm onRegisterSubmit={() => this.setState({ showRegisterReview: true })} />
}
    render(){
        return(
            <div>
               {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
 form: 'registerForm'
})(Register);