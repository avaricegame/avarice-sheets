import React from "react"
import { NavLink } from "react-router-dom"

function CharacterSheetNavigation() {
  return (
    <nav>
      <ul className="navigation">
        <NavLink to="/character/gameplay" activeClassName="active">
          <li>Gameplay</li>
        </NavLink>
        <NavLink to="/character/inventory" activeClassName="active">
          <li>Inventory</li>
        </NavLink>
        <NavLink to="/character/stats" activeClassName="active">
          <li>Stats</li>
        </NavLink>
        <NavLink to="/character/abilities" activeClassName="active">
          <li>Abilities</li>
        </NavLink>
        <NavLink to="/character/info" activeClassName="active">
          <li>Info</li>
        </NavLink>
        <NavLink to="/character/messages" activeClassName="active">
          <li>Messages</li>
        </NavLink>
        <NavLink to="/character/notes" activeClassName="active">
          <li>Notes</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default CharacterSheetNavigation
