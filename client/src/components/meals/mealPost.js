import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MealForm from './mealForm';
import MealReview from './mealReview';

class MealPost extends Component{
    state = {showReview: false };
    renderContent(){
        if(this.state.showReview){
            return <MealReview onCancel={() => this.setState({ showReview: false })} />;
        }
      return <MealForm onMealSubmit={() => this.setState({ showReview: true })} />
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
    form: 'mealPost'
})(MealPost);