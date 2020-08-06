import React from "react"
import { NavLink } from "react-router-dom"

function CampaignSheetNavigation() {
  return (
    <nav>
      <ul className="navigation">
        <NavLink to="/campaign/:id/gameplay" activeClassName="active">
          <li>Gameplay</li>
        </NavLink>
        <NavLink to="/campaign/:id/players" activeClassName="active">
          <li>Players</li>
        </NavLink>
        <NavLink to="/campaign/:id/info" activeClassName="active">
          <li>Info</li>
        </NavLink>
        <NavLink to="/campaign/:id/planning" activeClassName="active">
          <li>Campaign</li>
        </NavLink>
        <NavLink to="/campaign/:id/campaign" activeClassName="active">
          <li>Planning</li>
        </NavLink>
        <NavLink to="/campaign/:id/messages" activeClassName="active">
          <li>Messages</li>
        </NavLink>
        <NavLink to="/campaign/:id/notes" activeClassName="active">
          <li>Notes</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default CampaignSheetNavigation
