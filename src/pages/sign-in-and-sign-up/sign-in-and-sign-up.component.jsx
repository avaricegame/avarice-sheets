import React from "react"
import { Link } from "react-router-dom"

import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"

import "./sign-in-and-sign-up.styles.scss"

class SignInAndSignUpPage extends React.Component {
  state = {
    hasAccount: false,
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
          <h1 className="sign-in-and-sign-up__header-logotype">Avarice Sheets</h1>
        </div>
        <div className="sign-in-and-sign-up__form">
          {hasAccount ? <SignIn /> : <SignUp />}
          {!hasAccount ? (
            <p className="sign-in-and-sign-up__form-footer-text">
              Already have an account?{" "}
              <span className="sign-in-and-sign-up__form-footer-link" onClick={this.handleClick}>
                Sign in
              </span>
            </p>
          ) : (
            <p className="sign-in-and-sign-up__form-footer-text">
              Don't have an account?{" "}
              <span className="sign-in-and-sign-up__form-footer-link" onClick={this.handleClick}>
                Sign up
              </span>
            </p>
          )}
        </div>
        <div className="sign-in-and-sign-up__footer">
          <Link to="/about" className="sign-in-and-sign-up__footer-text">
            What is Avarice Sheets?
          </Link>
        </div>
      </div>
    )
  }
}

export default SignInAndSignUpPage
