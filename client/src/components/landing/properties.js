import _ from 'lodash';
import React, {Component} from 'react';
import FIELDS from './props/props1';
import PropsRow from './props/propsRow';

class Properties extends Component {
renderContent(){
  return _.map(FIELDS, ({image, title, paragraph, colorScheme}) => {
      return <PropsRow key={image} image={image} title={title} paragraph={paragraph} colorScheme={colorScheme}  />
  });
}

render(){
    return(
        <div>
           {this.renderContent()}
        </div>
    )}
}

export default Properties;