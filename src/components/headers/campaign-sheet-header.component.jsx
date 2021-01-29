import React from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { ReactComponent as AvariceLogo } from "../../assets/avarice-logo-light.svg"

import { selectCurrentCampSheet } from "../../redux/campaign-sheet/campaign-sheet.selectors"

import "./headers.styles.scss"

const CampaignSheetHeader = ({ currentCampSheet: { campaignName }, match }) => (
  <header className={`header header--blue`}>
    <Link to="/">
      <div className="header__home-button">
        <AvariceLogo className="header__home-button-logo" />
      </div>
    </Link>
    <h1 className="header__logotype">{campaignName}</h1>
    <Link to={`${match.url}/about`}>
      <div className="header__about-button">
        <span className="header__about-button-span">?</span>
      </div>
    </Link>
  </header>
)

const mapStateToProps = createStructuredSelector({
  currentCampSheet: selectCurrentCampSheet,
})

export default connect(mapStateToProps)(withRouter(CampaignSheetHeader))
