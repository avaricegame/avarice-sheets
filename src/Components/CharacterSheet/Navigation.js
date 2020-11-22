import React from "react"
import { NavLink } from "react-router-dom"

function CharacterSheetNavigation(props) {
  return (
    <nav>
      <ul className="navigation">
        <NavLink to={`/character/${props.charid}/gameplay`} activeClassName="active">
          <li>Gameplay</li>
        </NavLink>
        <NavLink to={`/character/${props.charid}/inventory`} activeClassName="active">
          <li>Inventory</li>
        </NavLink>
        <NavLink to={`/character/${props.charid}/stats`} activeClassName="active">
          <li>Stats</li>
        </NavLink>
        <NavLink to={`/character/${props.charid}/abilities`} activeClassName="active">
          <li>Abilities</li>
        </NavLink>
        <NavLink to={`/character/${props.charid}/info`} activeClassName="active">
          <li>Info</li>
        </NavLink>
        <NavLink to={`/character/${props.charid}/messages`} activeClassName="active">
          <li>Messages</li>
        </NavLink>
        <NavLink to={`/character/${props.charid}/notes`} activeClassName="active">
          <li>Notes</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default CharacterSheetNavigation
