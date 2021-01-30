import React from "react"
import { NavLink, withRouter } from "react-router-dom"

import "./sheets-navigation.styles.scss"

const CampaignSheetNavigation = ({ match }) => (
  <nav>
    <ul className="sheet-navigation">
      <NavLink to={`${match.url}/gameplay`} activeClassName="active">
        <li>Gameplay</li>
      </NavLink>
      <NavLink to={`${match.url}/combat`} activeClassName="active">
        <li>Combat</li>
      </NavLink>
      <NavLink to={`${match.url}/players`} activeClassName="active">
        <li>Players</li>
      </NavLink>
      <NavLink to={`${match.url}/campaign`} activeClassName="active">
        <li>Campaign</li>
      </NavLink>
      <NavLink to={`${match.url}/planning`} activeClassName="active">
        <li>Planning</li>
      </NavLink>
      <NavLink to={`${match.url}/messages`} activeClassName="active">
        <li>Messages</li>
      </NavLink>
      <NavLink to={`${match.url}/notes`} activeClassName="active">
        <li>Notes</li>
      </NavLink>
    </ul>
  </nav>
)

export default withRouter(CampaignSheetNavigation)
