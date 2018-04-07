import React, {Component} from 'react';

class LandingReview extends Component{
    render(){
        return(
            <div className="row">
            <table className="highlight centered">
            <thead>
              <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Market Cap</th>
                  <th>Royalties</th>
                  <th>Users</th>
                  <th>Rewards</th>
                  <th>Views</th>
                  <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1  <img src="https://lorempixel.com/300/300/people/1" className="circle" width="50px" /> </td>
                <td>Title</td>
                <td>$100,000,000</td>
                <td>$50,000,000</td>
                <td>7,500</td>
                <td>$50,000,000</td>
                <td>10,000</td>
                <td>$1,500</td>
              </tr>
              <tr>
              <td>2  <img src="https://lorempixel.com/300/300/people/4" className="circle" width="50px" /> </td>
              <td>Title 2</td>
              <td>$70,000,000</td>
              <td>$35,000,000</td>
              <td>5,500</td>
              <td>$35,000,000</td>
              <td>7,500</td>
              <td>$950</td>
            </tr>
            <tr>
            <td>3  <img src="https://lorempixel.com/300/300/people/3" className="circle" width="50px" /> </td>
            <td>Title 3</td>
            <td>$50,000,000</td>
            <td>$25,000,000</td>
            <td>3,500</td>
            <td>$25,000,000</td>
            <td>5,000</td>
            <td>$750</td>
          </tr>
            </tbody>
          </table>
            </div>
        )
    }
}

export default LandingReview;