import React from 'react';


function Welcome() {
  return (
//  Returning Users ========== All routes currently lead to All Recipes page
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-5">
          <form className="form-group" action="/login" />
          <div>
            <h2>Welcome Back</h2>
            <a href="/login" className="btn btn-danger" type="submit">Login</a>
            <br/>
            <hr/>
            <h2>Sample Only</h2>
            <a href="/allrecipes" className="btn btn-danger" type="submit">Guest</a>
            {/* <label for="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="pasword" className="form-control" id="password" name="password" placeholder="password" required /> */}
          </div>

           {/* button still works even without form being filled in */}
        </div>

{/* New Users ========== All routes currently lead to All Recipes Page */}
        <div className="col-5">
          <form className="form-group" action="/login" />
          <h2>Fully Immerse</h2>
          <div>
            <label for="fullname">Full Name</label>
            <input type="text" className="form-control" id="fullname" name="fullname" placeholder="Full Name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="password" required />
          </div>
          <br />
          <a href="/login" className="btn btn-danger" type="submit">Signup</a>
          {/* button still works even without form being filled in */}
        </div>
      </div>
    </div>



  );
}



export default Welcome;