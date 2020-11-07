// PACKAGES
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"

// CONTEXT
import DispatchContext from "../../DispatchContext"

function HomeGuest() {
  const appDispatch = useContext(DispatchContext)

  let [username, setUsername] = useState()
  let [email, setEmail] = useState()
  let [password, setPassword] = useState()

  let [hasAccount, setHasAccount] = useState(false)

  async function loginSubmitHandler(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("/login", { email, password })
      if (response.data.token) {
        // log in app dispatch
        appDispatch({ type: "login", data: response.data })
        appDispatch({ type: "flashMessage", value: "You have successfully registered." })
        console.log("logging from HomeGuest line 29", response.data)
      } else {
        console.log(response.data)
      }
    } catch (error) {
      console.log("There was a problem " + error)
    }
  }

  async function registerSubmitHandler(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("/register", { username, email, password })
      if (response.data.token) {
        // log in app dispatch
        appDispatch({ type: "register", data: response.data })
        appDispatch({ type: "flashMessage", value: "You have successfully registered." })
        console.log("logging from HomeGuest line 46", response.data)
      } else {
        console.log(response.data)
      }
    } catch (error) {
      console.log("There was a problem" + error)
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
          {hasAccount ? (
            <div className="hg__form-div hg__form-div--login">
              <form className="hg__form" onSubmit={loginSubmitHandler}>
                <h2 className="hg__subheading">Login</h2>
                <fieldset>
                  <legend>Please fill out the fields below to login.</legend>
                  <label htmlFor="email">
                    Email: <input onChange={(e) => setEmail(e.target.value)} name="email" type="text" />
                  </label>
                  <label htmlFor="password">
                    Password: <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" />
                  </label>
                  <input className="hg__form-submit" type="submit" value="Login" />
                </fieldset>
                <hr className="hg__hr--form" />
                <fieldset>
                  <label className="hg__center" htmlFor="">
                    Don't have an account?
                  </label>
                  <label onClick={() => setHasAccount(false)} className="hg__fake-link hg__center" htmlFor="">
                    <span className="">Create an Account</span>
                  </label>
                </fieldset>
              </form>
            </div>
          ) : (
            <div className="hg__form-div hg__form-div--register">
              <form className="hg__form" onSubmit={registerSubmitHandler}>
                <h2 className="hg__subheading">Register</h2>
                <fieldset>
                  <legend>Please fill out the fields below to register for an account.</legend>
                  <label htmlFor="">
                    Username: <input onChange={(e) => setUsername(e.target.value)} name="username" type="text" />
                  </label>
                  <label htmlFor="">
                    Email: <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" />
                  </label>
                  <label htmlFor="">
                    Password: <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" />
                  </label>
                  <input className="hg__form-submit" type="submit" value="Create Account" />
                </fieldset>
                <hr className="hg__hr--form" />
                <fieldset>
                  <label className="hg__center" htmlFor="">
                    Already have an account?
                  </label>
                  <label onClick={() => setHasAccount(true)} className="hg__fake-link hg__center" htmlFor="">
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
