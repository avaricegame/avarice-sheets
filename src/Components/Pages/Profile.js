import React, { useContext } from "react"
import { Link } from "react-router-dom"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

import Error from "../Error"

function Profile() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  if (appState.loggedIn) {
    return (
      <div className="hg__body">
        <div className="header-bar">
          <Link to="/">
            <div className="header-bar__profile-button">
              <img src="/assets/temp-user.jpg" alt="user" className="header-bar__profile-img" />
            </div>
          </Link>
        </div>
        <header className="header">
          <h1 className="header__logotype">Avarice Sheets</h1>
        </header>
        <div className="hg__container">
          <div className="hg__content hg__content--100">
            <Link to="/" style={{ textDecoration: "none", marginTop: "1rem" }}>
              &larr; BACK TO HOME
            </Link>
            <hr className="hg__hr" />
            <h2 className="hg__heading hg__heading--center">Hi there, {appState.user.username}</h2>
            <hr className="hg__hr" />
            <div className="hg__flex-container">
              <div className="hg__content hg__content--50" style={{ height: "20rem" }}>
                {/* <h3 className="item-container__heading">Your Account Details</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Username:</td>
                      <td>name</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>name</td>
                    </tr>
                  </tbody>
                </table> */}
              </div>
              <div className="hg__content hg__content--50" style={{ height: "20rem" }}></div>
            </div>
            <hr className="hg__hr" />
            <Link to="/">
              <button
                className="sign-out-button"
                onClick={() => {
                  appDispatch({ type: "logout" })
                }}
              >
                Sign Out
              </button>
            </Link>
          </div>
        </div>
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
  } else {
    return <Error />
  }
}

export default Profile
