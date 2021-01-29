import React from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { ReactComponent as AvariceLogo } from "../../assets/avarice-logo-light.svg"

import { selectCurrentCharSheet } from "../../redux/character-sheet/character-sheet.selectors"

import "./headers.styles.scss"

const SheetsHeader = ({ currentCharSheet: { characterName }, character, campaign, match }) => (
  <header className={`header ${character ? "header--purple" : campaign ? "header--blue" : ""}`}>
    <Link to="/">
      <div className="header__home-button">
        <AvariceLogo className="header__home-button-logo" />
      </div>
    </Link>
    <h1 className="header__logotype">{characterName}</h1>
    <Link to={`${match.url}/about`}>
      <div className="header__about-button">
        <span className="header__about-button-span">?</span>
      </div>
    </Link>
  </header>
)

const mapStateToProps = createStructuredSelector({
  currentCharSheet: selectCurrentCharSheet,
})

export default connect(mapStateToProps)(withRouter(SheetsHeader))
