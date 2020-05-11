import React from 'react';

class Register extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    email: '',
    password: '',
    name: ''
  }
}

onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:2890/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      }) 
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
  } 
  render () {
    const { onRouteChange } = this.props;
    return (
      <article className="signin-box-container">

          <h2 className="h2-signin-header">* Register *</h2>
        <div className="signin-box">
        <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
              <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
 
            <input 
            onClick={this.onSubmitSignIn}
            className="submit-button" type="submit" value="| Register |" />


              <p>Have an account? <span  onClick={() => onRouteChange('signin')} className="underline">Sign in.</span></p>            
  
        </div>

      </article>
);
    }
  }

export default Register