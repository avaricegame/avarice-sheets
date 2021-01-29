import React from "react"
import { NavLink, withRouter } from "react-router-dom"

import "./sheets-navigation.styles.scss"

const CharacterSheetNavigation = ({ match }) => (
  <nav>
    <ul className="sheet-navigation">
      <NavLink to={`${match.url}/gameplay`} activeClassName="active">
        <li>Gameplay</li>
      </NavLink>
      <NavLink to={`${match.url}/inventory`} activeClassName="active">
        <li>Inventory</li>
      </NavLink>
      <NavLink to={`${match.url}/stats`} activeClassName="active">
        <li>Stats</li>
      </NavLink>
      <NavLink to={`${match.url}/abilities`} activeClassName="active">
        <li>Abilities</li>
      </NavLink>
      <NavLink to={`${match.url}/info`} activeClassName="active">
        <li>Info</li>
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

export default withRouter(CharacterSheetNavigation)
