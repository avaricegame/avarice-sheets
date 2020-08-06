import React from "react"
import { Link } from "react-router-dom"

function Gameplay(props) {
  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Gameplay</h1>
      </div>
      <div className="page-container">
        <div className="cw__25">
          <h2 className="heading">Hit Points</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Hit Points</h3>
              <h4 className="item-container__subheading">Max HP: {props.charSheet.level * 10 + 10}</h4>
              <h4 className="item-container__terheading">Current HP: {props.charSheet.currentHP}</h4>
              <button>Take Damage</button>
              <button>Heal HP</button>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Actions</h2>
          <div className="cw__container">
            <button>Attack</button>
            <button>Use Ability</button>
            <button>Pay Money</button>
            <button>Sell Items</button>
            <button>Roll</button>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Notifications</h2>
          <div className="cw__container">
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Attacked</em> with WEAPON and rolled 17
            </p>
            <p>
              <strong>Player 2: </strong>
              <em className="highlight">Used Ability</em> ABILITY and rolled 17
            </p>
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Paid Money</em> 30 GOLD to PLAYER 2
            </p>
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Sold Item</em> WEAPON / WEARABLE / ITEM
            </p>
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Rolled D20</em> and got 17
            </p>
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Leveled Up</em> to level 5
            </p>
            <p>
              <strong>Player 1: </strong>
              <em className="highlight">Added Excelence Chip</em>
            </p>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Quick Links</h2>
          <div className="cw__container">
            <Link to="/character/123/inventory">
              <button>Equip / Unequip Armour</button>
            </Link>
            <Link to="/character/123/abilities">
              <button>See My Abilities</button>
            </Link>
            <Link to="/character/123/abilities">
              <button>Character Information</button>
            </Link>
            <Link to="/character/123/info">
              <button>My Race and Class</button>
            </Link>
            <Link to="/character/123/info">
              <button>Campaign Info</button>
            </Link>
            <Link to="/character/123/stats">
              <button>See My Stats</button>
            </Link>
            <Link to="/character/123/stats">
              <button>Excellence Chips</button>
            </Link>
            <Link to="/character/123/stats">
              <button>Level Up</button>
            </Link>
            <Link to="/character/123/notes">
              <button>My Notes</button>
            </Link>
            <Link to="/character/123/messages">
              <button>Messages</button>
            </Link>
          </div>
        </div>
        {/* /////// CLOSE PAGE CONTAINER /////// */}
      </div>
    </>
  )
}

export default Gameplay
