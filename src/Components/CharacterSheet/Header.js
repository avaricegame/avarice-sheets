import React, { useContext } from "react"
import { Link } from "react-router-dom"

import StateContext from "../../StateContext"

function Header() {
  const charSheetState = useContext(StateContext)
  return (
    <>
      <div className="header-bar">
        <a href="/">
          <div className="header-bar__home-button">
            <img src="/assets/temp-logo.png" alt="logo" className="header-bar__home-img" />
          </div>
        </a>
        <Link to={`/character/${charSheetState.charSheet._id}/about`}>
          <div className="header-bar__about-button">
            <span className="header-bar__about-img">?</span>
          </div>
        </Link>
        {/* <Link to="/profile/:username">
          <div className="header-bar__profile-button header-bar__profile-button--static">
            <img src="/assets/temp-user.jpg" alt="user" className="header-bar__profile-img" />
          </div>
        </Link> */}
      </div>
      <header className="header">
        <h1 className="header__logotype">{charSheetState.charSheet.characterName}</h1>
      </header>
    </>
  )
}

export default Header
