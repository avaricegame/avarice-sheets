import React, { useState } from "react"
import { Link } from "react-router-dom"

function HomeGuest(props) {
  let [username] = useState()
  let [email] = useState()
  let [password] = useState()
  let [emailUsername] = useState()

  const loginSubmitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.emailUsername.value, e.target.password.value)
    // SEND FORM DATA TO SERVER AND GET BACK A PASS OR FAIL, PLUS THE UID
    if (e.target.emailUsername.value === "email@email.com") {
      props.UIDHandler("1")
      props.loggedInHandler(true)
    } else {
      props.UIDHandler(0)
    }
  }

  const registerSubmitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.email.value, e.target.username.value, e.target.password.value)
    // SEND FOR DATA TO SERVER AND GET BACK A SUCCESS OR FAIL, PLUS THE UID
    if (e.target.email.value === "email@email.com") {
      props.UIDHandler("1")
      props.accountHandler(true)
      props.loggedInHandler(true)
    } else {
      props.UIDHandler(0)
    }
  }

  return (
    <div className="hg__body">
      <div className="header-bar">
        <Link to="/about">
          <div className="header-bar__about-button">
            <span className="header-bar__about-img">?</span>
          </div>
        </Link>
      </div>
      <header className="header">
        <h1 className="header__logotype">Avarice Sheets</h1>
      </header>
      <main>
        <div className="hg__container">
          <div className="hg__content hg__content--60">
            <h2 className="hg__heading">Welcome to Avarice Sheets</h2>
            <hr className="hg__hr" />
            <h3>What is Avarice Sheets?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>How do I get started?</h3>
            <p>Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>How can I contact you?</h3>
            <p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          {props.hasAccount ? (
            <div className="hg__form-div hg__form-div--login">
              <form className="hg__form" onSubmit={(e) => loginSubmitHandler(e)}>
                <h2 className="hg__subheading">Login</h2>
                <fieldset>
                  <legend>Please fill out the fields below to login.</legend>
                  <label htmlFor="email">
                    Username or Email: <input value={emailUsername} name="emailUsername" type="text" />
                  </label>
                  <label htmlFor="password">
                    Password: <input value={password} name="password" type="password" />
                  </label>
                  <input className="hg__form-submit" type="submit" value="Login" />
                </fieldset>
                <hr className="hg__hr--form" />
                <fieldset>
                  <label className="hg__center" htmlFor="">
                    Don't have an account?
                  </label>
                  <label onClick={props.accountHandler} className="hg__fake-link hg__center" htmlFor="">
                    <span className="">Create an Account</span>
                  </label>
                </fieldset>
              </form>
            </div>
          ) : (
            <div className="hg__form-div hg__form-div--register">
              <form className="hg__form" onSubmit={(e) => registerSubmitHandler(e)}>
                <h2 className="hg__subheading">Register</h2>
                <fieldset>
                  <legend>Please fill out the fields below to register for an account.</legend>
                  <label htmlFor="">
                    Username: <input value={username} name="username" type="text" />
                  </label>
                  <label htmlFor="">
                    Email: <input value={email} name="email" type="email" />
                  </label>
                  <label htmlFor="">
                    Password: <input value={password} name="password" type="password" />
                  </label>
                  <input className="hg__form-submit" type="submit" value="Create Account" />
                </fieldset>
                <hr className="hg__hr--form" />
                <fieldset>
                  <label className="hg__center" htmlFor="">
                    Already have an account?
                  </label>
                  <label onClick={props.accountHandler} className="hg__fake-link hg__center" htmlFor="">
                    <span className="">Sign in</span>
                  </label>
                </fieldset>
              </form>
            </div>
          )}
        </div>
      </main>
      <footer className="footer">
        <p className="footer__text">
          &copy; 2020 by Avarice. All rights reserved. Application built by{" "}
          <a href="https://talonmd.github.io/talondurrant/" target="_blank" rel="noopener noreferrer">
            Talon Durrant
          </a>
        </p>
      </footer>
    </div>
  )
}

export default HomeGuest
