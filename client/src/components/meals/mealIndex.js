import React, {Component} from 'react';
import MealInfo from './mealInfo';
import MealWatch from './mealWatch';
import {connect} from 'react-redux';
import { fetchMeals, mealInfo } from '../../actions/';

class MealIndex extends Component{
constructor(props){
    super(props)
    this.state = {
       playing: false
    }
}

componentDidMount(){
    console.log('HAMILTON', this.props);
    this.props.fetchMeals();
    const { id } = this.props.match.params;
    this.props.mealInfo(id);
  }

displayContent(){
    const {meal} = this.props;
   if(!this.state.playing){
       return <MealInfo meal={meal} watch={() => this.setState({playing: true})}/>
   } else {
       return <MealWatch meal={meal}/> 
   }
}

render(){
    return(
        <div>
          {this.displayContent()}
        </div>
    )
}
}

const mapStateToProps = ({meals}, ownProps) => {
    return { meal: meals[ownProps.match.params.id]}
  }
  
  
  export default connect(mapStateToProps, { mealInfo, fetchMeals })(MealIndex);