import React, {Component} from 'react';

class Profile extends Component{
    render(){
        return(
            <div className="container-fluid">
              <div className="row white">
              <img src="https://lorempixel.com/1080/280/abstract/1" width="100%" height="auto" />
              <div className="row">
              <div className="col s1"><img src="https://lorempixel.com/50/50/people/6" className="circle" width="100%" height="auto" /></div>
              <div className="col s3"><h4>First Name</h4><i>Ninja</i></div>
              <div className="col s3"></div>
              </div>
              </div>
              <div className="row">
              <div className="col l3 white">
                 <h4>Bio</h4>
               </div>
              <div className="col l8 right green">
                <h4>Posts</h4>
              </div>
              </div>
            </div>
        )
    }
}

export default Profile;