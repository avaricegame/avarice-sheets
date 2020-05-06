import React from 'react';

const Register = ({ onRouteChange }) => {
    return (
      <article className="signin-box-container">

          <h2 className="h2-signin-header">* Register *</h2>
        <div className="signin-box">
        <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
            </div>
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
            className="submit-button" type="submit" value="| Register |" />


              <p>Have an account? <span  onClick={() => onRouteChange('signin')} className="underline">Sign in.</span></p>            
  
        </div>

      </article>
    );
}

export default Register