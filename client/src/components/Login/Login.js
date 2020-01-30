import React from 'react';


function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <form className="form-group" action="/login" />
          <div>
            <h2>Sign In</h2>
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="pasword" className="form-control" id="password" name="password" placeholder="password" required />
          </div>
          <br />
          <a href="/allrecipes" className="btn btn-danger" type="submit">Login</a>
          {/* button still works even without form being filled in */}
        </div>
      </div>
      </div>
  );
}



export default Login;