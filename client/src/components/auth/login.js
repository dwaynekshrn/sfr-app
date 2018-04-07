import React, {Component} from 'react';

class Login extends Component {
render(){
    return(
        <div className="row">
        <div className="col s4">
        <div class="card"  style={{height: '400px'}}>
        <h4 className="align-center">Login</h4>
        <form action="/auth/login" method="post">
        <div class="card-content">
          <div>
              <label>Username:</label>
              <input type="text" name="username"/>
          </div>
          <div>
              <label>Password:</label>
              <input type="password" name="password"/>
          </div>
          <div>
              <a  href="/register" className="btn-flat left">Register Account</a>
              <input className="btn-flat red white-text right" type="submit" value="Log In"/>
          </div>
          </div>
      </form>
      </div>
      </div>
      </div>
      );
}
}

export default Login;