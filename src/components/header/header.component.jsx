import React from "react"
import { Link } from "react-router-dom"

import "./header.styles.scss"

const Header = () => (
  <header className={`header ${Math.floor(Math.random() * 2) ? "header--purple" : "header--blue"}`}>
    <h1 className="header__logotype">Avarice Sheets</h1>
    <Link to="/profile">
      <div className="header__profile">
        <img src="/assets/temp-user.jpg" alt="profile" className="header__profile-image" />
      </div>
    </Link>
  </header>
)

export default Header
