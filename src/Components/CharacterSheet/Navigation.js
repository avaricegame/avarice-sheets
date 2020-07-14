import React from "react"
import { NavLink } from "react-router-dom"

function CharacterSheetNavigation() {
  return (
    <nav>
      <ul className="navigation">
        <NavLink to="/character/:id/gameplay" activeClassName="active">
          <li>Gameplay</li>
        </NavLink>
        <NavLink to="/character/:id/inventory" activeClassName="active">
          <li>Inventory</li>
        </NavLink>
        <NavLink to="/character/:id/stats" activeClassName="active">
          <li>Stats</li>
        </NavLink>
        <NavLink to="/character/:id/abilities" activeClassName="active">
          <li>Abilities</li>
        </NavLink>
        <NavLink to="/character/:id/info" activeClassName="active">
          <li>Info</li>
        </NavLink>
        <NavLink to="/character/:id/messages" activeClassName="active">
          <li>Messages</li>
        </NavLink>
        <NavLink to="/character/:id/notes" activeClassName="active">
          <li>Notes</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default CharacterSheetNavigation
