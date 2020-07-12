import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function CharacterSheetNavigation() {
  return (
    <nav>
      <ul className="navigation">
        <Link to="/character/:id/gameplay" activeClassName="active">
          <a>
            <li>Gameplay</li>
          </a>
        </Link>
        <Link to="/character/:id/inventory" activeClassName="active">
          <a>
            <li>Inventory</li>
          </a>
        </Link>
        <Link to="/character/:id/stats" activeClassName="active">
          <a>
            <li>Stats</li>
          </a>
        </Link>
        <Link to="/character/:id/abilities" activeClassName="active">
          <a>
            <li>Abilities</li>
          </a>
        </Link>
        <Link to="/character/:id/info" activeClassName="active">
          <a>
            <li>Info</li>
          </a>
        </Link>
        <Link to="/character/:id/messages" activeClassName="active">
          <a>
            <li>Messages</li>
          </a>
        </Link>
        <Link to="/character/:id/notes" activeClassName="active">
          <a>
            <li>Notes</li>
          </a>
        </Link>
      </ul>
    </nav>
  )
}

export default CharacterSheetNavigation
