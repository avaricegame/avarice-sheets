import React from 'react';

const Signin = ({ onRouteChange }) => {
    return (
        <article className="signin-box-container">

          
        <div className="signin-box">
            <h2 className="h2-signin-header">Sign In</h2>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
 
            <input 
            onClick={() => onRouteChange('home')}
            className="submit-button" type="submit" value="Sign in" />


              {/* <p>Don't have an account? <span  onClick={() => onRouteChange('register')} className="underline">Register now to create a free account.</span></p>             */}
  
        </div>

      </article> 
    );
}

export default Signin