import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <div className="header-bar">
        <Link to="/">
          <div className="header-bar__profile-button header-bar__profile-button--static">
            <img src="/assets/temp-user.jpg" alt="user" className="header-bar__profile-img" />
          </div>
        </Link>
      </div>
      <header className="header">
        <h1 className="header__logotype">Wayne Bradford</h1>
      </header>
    </>
  )
}

export default Header
