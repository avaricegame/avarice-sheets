import React, { useEffect } from "react"

function Header() {
  return (
    <>
      <header>
        <div className="player-character-campaign">
          <span class="color--accent">
            <h1 className="name-of-character-heading">character name</h1>
          </span>
        </div>
        <div class="header__top-bar">
          <h2 class="header__h2--link">Exit</h2>
        </div>
      </header>
    </>
  )
}

export default Header
