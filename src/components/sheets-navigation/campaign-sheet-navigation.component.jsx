import React from "react"
import { NavLink } from "react-router-dom"

import "./sheets-navigation.styles.scss"

const CampaignSheetNavigation = () => (
  <nav>
    <ul className="sheet-navigation">
      <NavLink to="/campaign/gameplay" activeClassName="active">
        <li>Gameplay</li>
      </NavLink>
      <NavLink to="/campaign/players" activeClassName="active">
        <li>Players</li>
      </NavLink>
      <NavLink to="/campaign/info" activeClassName="active">
        <li>Info</li>
      </NavLink>
      <NavLink to="/campaign/planning" activeClassName="active">
        <li>Campaign</li>
      </NavLink>
      <NavLink to="/campaign/campaign" activeClassName="active">
        <li>Planning</li>
      </NavLink>
      <NavLink to="/campaign/messages" activeClassName="active">
        <li>Messages</li>
      </NavLink>
      <NavLink to="/campaign/notes" activeClassName="active">
        <li>Notes</li>
      </NavLink>
    </ul>
  </nav>
)

export default CampaignSheetNavigation
