import React from "react"
import { Link } from "react-router-dom"

import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"

import { ReactComponent as AvariceLogo } from "../../assets/avarice-logo-light.svg"

import "./sign-in-and-sign-up.styles.scss"

class SignInAndSignUpPage extends React.Component {
  state = {
    hasAccount: localStorage.getItem("hasAccount"),
  }

  componentDidMount() {
    if (this.state.hasAccount) {
      document.title = "Sign In | Avarice Account"
    } else {
      document.title = "Sign Up | Avarcie Account"
    }
  }

  handleClick = () => {
    const { hasAccount } = this.state
    this.setState({ hasAccount: !hasAccount })
  }

  render() {
    const { hasAccount } = this.state
    return (
      <div className="sign-in-and-sign-up">
        <div className="sign-in-and-sign-up__header">
          <AvariceLogo className="sign-in-and-sign-up__header-logo" />
        </div>
        <div className="sign-in-and-sign-up__form">
          {hasAccount ? <SignIn /> : <SignUp />}
          {!hasAccount ? (
            <p className="sign-in-and-sign-up__form-footer-text">
              Already have an account?{" "}
              <span className="sign-in-and-sign-up__form-footer-link" onClick={this.handleClick}>
                Sign in.
              </span>
            </p>
          ) : (
            <p className="sign-in-and-sign-up__form-footer-text">
              Don't have an account?{" "}
              <span className="sign-in-and-sign-up__form-footer-link" onClick={this.handleClick}>
                Sign up.
              </span>
            </p>
          )}
        </div>
        <div className="sign-in-and-sign-up__footer">
          <p className="sign-in-and-sign-up__footer-text">
            By signing {hasAccount ? "in" : "up"} to Avarice, you agree to our{" "}
            <Link to="/">terms of service.</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default SignInAndSignUpPage
