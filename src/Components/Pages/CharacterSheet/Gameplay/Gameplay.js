import React, { useEffect } from "react"
import Toggle from "../../../nln/Toggle"

function Gameplay() {
  return (
    <>
      <div className="secondary-header">
        <h1>Gameplay</h1>
      </div>

      <div className="hit-points bgb">
        <div className="heading-bar">
          <h2>Hit Points</h2>
        </div>
        <div className="weapon-div">
          <h6>Hit Points</h6>

          <h5>Max HP: 45</h5>

          <h3>Current HP: 45</h3>
          <button>Take Damage</button>
          <button>Heal HP</button>
        </div>
      </div>
      <div className="spell-points bgb">
        <div className="heading-bar">
          <h2>Spell Points</h2>
        </div>
        <div className="weapon-div">
          <h6>Spell Points</h6>

          <h5>Max Spell Points: 45</h5>

          <h3>Current SP: 45</h3>
          <button>Use Spell Points</button>
          <button>Heal Spell Points</button>
        </div>
      </div>
      <div className="action-options bgb">
        <div className="heading-bar">
          <h2>Actions</h2>
        </div>
        <Toggle>
          {({ on, toggle }) => (
            <React.Fragment>
              <button id="attackButton" onClick={toggle} className="action-button">
                Attack
              </button>
              {on && (
                <div className="attack weapon-div">
                  <h6>Attack</h6>
                  <h5>Which weapon are you using?</h5>
                  <select>
                    <option>Choose Weapon</option>
                    <option>#1</option>
                    <option>#2</option>
                  </select>

                  <h5>Roll the Die</h5>
                  <button>Roll</button>
                  <p>
                    You rolled: <span>7</span>
                  </p>
                  <p>
                    After Modifier: <span>12</span>
                  </p>
                  <h4>
                    Modifier(s) Used: <span>Climb</span>
                  </h4>
                </div>
              )}
            </React.Fragment>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <React.Fragment>
              <button id="useAbilityButton" onClick={toggle} className="action-button">
                Use Ability
              </button>
              {on && (
                <div className="use-ability weapon-div">
                  <h6>Use Ability</h6>
                  <h5>Which ability are you using?</h5>
                  <select>
                    <option>Choose Race Ability</option>
                    <option>#1</option>
                    <option>#2</option>
                  </select>
                  <select>
                    <option>Choose Class Ability</option>
                    <option>#1</option>
                    <option>#2</option>
                  </select>
                  <select>
                    <option>Choose Character Ability</option>
                    <option>#1</option>
                    <option>#2</option>
                  </select>

                  <h5>Roll the Die</h5>
                  <button>Roll</button>
                  <p>
                    You rolled: <span>7</span>
                  </p>
                  <p>
                    After Modifier: <span>12</span>
                  </p>
                  <h6>
                    Modifier(s) Used: <span>Climb</span>
                  </h6>
                </div>
              )}
            </React.Fragment>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <React.Fragment>
              <button id="castSpellButton" onClick={toggle} className="action-button">
                Cast Spell
              </button>
              {on && (
                <div className="cast-spell weapon-div">
                  <h6>Cast Spell</h6>
                  <h5>Which spell are you casting?</h5>
                  <select>
                    <option>Choose Spell</option>
                    <option>#1</option>
                    <option>#2</option>
                  </select>

                  <p>
                    <span>Spell #1</span> uses <span>20</span> Spell Points. Please adjust your spell points accordingly.
                  </p>
                  <h5>Roll the Die</h5>
                  <button>Roll</button>
                  <p>
                    You rolled: <span>7</span>
                  </p>
                  <p>
                    After Modifier: <span>12</span>
                  </p>
                  <h6>
                    Modifier(s) Used: <span>Climb</span>
                  </h6>
                </div>
              )}
            </React.Fragment>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <React.Fragment>
              <button id="payMoneyButton" onClick={toggle} className="action-button">
                Pay Money
              </button>
              {on && (
                <div className="pay-money weapon-div">
                  <h6>Pay Money</h6>
                  <h5>Who are you paying?</h5>
                  <select>
                    <option>Choose Player</option>
                    <option>DM</option>
                    <option>Player 1</option>
                    <option>Player 2</option>
                    <option>Player 3</option>
                  </select>
                  <h5>How much are you paying?</h5>
                  <input type="number" /> <br />
                  <button>
                    Pay <span>(recipient)</span> <span>(amount)</span> Gold
                  </button>
                </div>
              )}
            </React.Fragment>
          )}
        </Toggle>
        <Toggle>
          {({ on, toggle }) => (
            <React.Fragment>
              <button id="sellItemsButton" onClick={toggle} className="action-button">
                Give Items
              </button>
              {on && (
                <div className="sell-items weapon-div">
                  <h6>Give Items</h6>
                  <h5>Which item are you giving?</h5>
                  <select>
                    <option>Choose Weapon</option>
                    <option>#1</option>
                    <option>#2</option>
                  </select>
                  <select>
                    <option>Choose Armour</option>
                    <option>#1</option>
                    <option>#2</option>
                  </select>
                  <select>
                    <option>Choose Items</option>
                    <option>#1</option>
                    <option>#2</option>
                  </select>

                  <h5>Who are you giving it to?</h5>
                  <select>
                    <option>Choose Player</option>
                    <option>DM</option>
                    <option>Player 1</option>
                    <option>Player 2</option>
                    <option>Player 3</option>
                  </select>

                  <button>
                    Give <span>(item)</span> to <span>(recipient)</span>
                  </button>
                </div>
              )}
            </React.Fragment>
          )}
        </Toggle>
      </div>

      <div className="action-steps bgb">
        <div className="heading-bar">
          <h2 id="actionStepsTitle">Notifications</h2>
        </div>
        <p>Notifications feature is currently under construction.</p>
      </div>
      <div className="quick-links bgb">
        <div className="heading-bar">
          <h2>Quick Links</h2>
        </div>

        <button className="action-button">Equip / Unequip Armour</button>
        <button className="action-button">See My Abilities</button>
        <button className="action-button">My Race and Class</button>
        <button className="action-button">Campaign Info</button>
        <button className="action-button">See My Stats</button>
        <button className="action-button">Excelence Chips</button>
        <button className="action-button">Level Up</button>
        <button className="action-button">My Notes</button>
        <button className="action-button">Messages</button>
        <button className="action-button">More...</button>
      </div>
    </>
  )
}

export default Gameplay
