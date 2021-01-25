import React from "react"
import { Link } from "react-router-dom"

import { ReactComponent as AvariceLogo } from "../../assets/avarice-logo-light.svg"

import "./header.styles.scss"

const SheetsHeader = ({ name, character, campaign }) => (
  <header className={`header ${character ? "header--purple" : campaign ? "header--blue" : ""}`}>
    <Link to="/">
      <div className="header__home-button">
        <AvariceLogo className="header__home-button-logo" />
      </div>
    </Link>
    <h1 className="header__logotype">{name}</h1>
    <Link to={`/character/about`}>
      <div className="header__about-button">
        <span className="header__about-button-span">?</span>
      </div>
    </Link>
  </header>
)

export default SheetsHeader
