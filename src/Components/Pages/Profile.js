import React from "react"
import { Link } from "react-router-dom"

// COMPONENTS
import HomeGuest from "./HomeGuest"

function Profile(props) {
  const signOutHandler = () => {
    //props.CSIDHandler(0)
    props.UIDHandler(0)
    props.loggedInHandler(false)
  }

  if (props.loggedIn) {
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
            <h2 className="hg__heading hg__heading--center">Hi there, Username</h2>
            <hr className="hg__hr" />
            <div className="hg__flex-container">
              <div className="hg__content hg__content--50">
                <h3 className="item-container__heading">Your Account Details</h3>
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
                </table>
              </div>
              <div className="hg__content hg__content--50">hi</div>
            </div>
            <hr className="hg__hr" />
            <Link to="/">
              <button className="sign-out-button" onClick={signOutHandler}>
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
    return "hi"
  }
}

export default Profile
