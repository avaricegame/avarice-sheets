import React, { useEffect } from "react"
import Toggle from "../Toggle"

function Gameplay() {
  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Gameplay</h1>
      </div>
      <div className="page-container">
        <div className="cw__25">
          <h2 className="heading">Hit Points</h2>
          <div className="item-container">
            <h3 className="item-container__heading">Hit Points</h3>
            <h4 className="item-container__subheading">Max HP: 45</h4>
            <h4 className="item-container__terheading">Current HP: 45</h4>
            <button>Take Damage</button>
            <button>Heal HP</button>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Actions</h2>
          <button>Attack</button>
          <button>Use Ability</button>
          <button>Pay Money</button>
          <button>Sell Items</button>
        </div>

        <div className="cw__25">
          <h2 className="heading">Notifications</h2>
          <p>notifications section is coming soon</p>
        </div>

        <div className="cw__25">
          <h2 className="heading">Quick Links</h2>
          <button>Equip / Unequip Armour</button>
          <button>See My Abilities</button>
          <button>My Race and Class</button>
          <button>Campaign Info</button>
          <button>See My Stats</button>
          <button>Excelence Chips</button>
          <button>Level Up</button>
          <button>My Notes</button>
          <button>Messages</button>
          <button>More...</button>
        </div>
        {/* /////// CLOSE PAGE CONTAINER /////// */}
      </div>
    </>
  )
}

export default Gameplay
