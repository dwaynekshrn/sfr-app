import React, {Component} from 'react';

class Login extends Component {
render(){
    return(
        <div className="container">
        <h4>Login</h4>
        <form action="/auth/login" method="post">
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
      </form>
      </div>
      );
}
}

export default Login;