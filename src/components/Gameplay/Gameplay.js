import React from 'react';


const Gameplay = ({ fetchCharacterSheet }) => {
    return (
                <React.Fragment>
                    
                     <div className="secondary-header">
                        <h1>Gameplay</h1>
                </div>

                <div className="hit-points bgb">
                        <div className="heading-bar">
                                <h2>Hit Points</h2>
                        </div> 
                        <button onClick={() => fetchCharacterSheet()}>Take Damage</button>
                        <button>Heal HP</button>
                        <h4>Max HP: 86</h4>
                       
                        <h4 className="red toggle-green">Current HP: -7</h4>
                        <h4>Wounds and Healing History</h4>
                        {/* <ul>
                                <li><input type="number" /></li>
                                <li><input type="number" /></li>
                                <li><input type="number" /></li>
                                <li><input type="number" /></li>
                                <li><input type="number" /></li>
                                <li><input type="number" /></li>
                        </ul> */}
                </div>
                <div className="spell-points bgb">
                        <div className="heading-bar">
                                <h2>Spell Points</h2>
                        </div>
                        <button>Use Spell Points</button>
                        <button>Heal Spell Points</button>
                        <h4>Max Spell Points: 86</h4>
                       
                        <h4 className="red toggle-green">Current Spell Points: -7</h4>
                        <h4>Spell Energy Points History</h4>
                        {/* <ul>
                                <li><input type="number" /></li>
                                <li><input type="number" /></li>
                                <li><input type="number" /></li>
                                <li><input type="number" /></li>
                                <li><input type="number" /></li>
                                <li><input type="number" /></li>
                        </ul> */}
                </div>
                <div className="action-options bgb">
                        <div className="heading-bar">
                                <h2>Actions</h2>
                        </div>
                        <button id="attackButton" className="action-button">Attack</button>
                        <button id="useAbilityButton" className="action-button">Use Ability</button>
                        <button id="castSpellButton" className="action-button">Cast Spell</button>
                        <button id="payMoneyButton" className="action-button">Pay Money</button>
                        <button id="sellItemsButton" className="action-button">Sell Items</button>
                </div>
                <div className="action-steps bgb">
                        <div className="heading-bar">
                                <h2 id="actionStepsTitle">Please Choose an Action</h2>
                        </div>

                        <div className="attack">
                                <h4>Which weapon are you using?</h4>
                                <ul>
                                        <li><button>Weapon #1</button></li>
                                        <li><button>Weapon #2</button></li>
                                        <li><button>Weapon #3</button></li>
                                        <li><button>Weapon #4</button></li>
                                </ul>

                                <h4>Roll the Die</h4>
                                <button>Roll</button>
                                <p>You rolled: <span>7</span></p>
                                <p>After Modifier: <span>12</span></p>
                                <h6>Modifier(s) Used: <span>Climb</span></h6>
                        </div>

                        <div className="use-ability">
                                <h4>Which ability are you using?</h4>
                                <ul>
                                        <li><button>Ability #1</button></li>
                                        <li><button>Ability #2</button></li>
                                        <li><button>Ability #3</button></li>
                                        <li><button>Ability #4</button></li>
                                </ul>

                                <h4>Roll the Die</h4>
                                <button>Roll</button>
                                <p>You rolled: <span>7</span></p>
                                <p>After Modifier: <span>12</span></p>
                                <h6>Modifier(s) Used: <span>Climb</span></h6>
                        </div>

                        <div className="cast-spell">
                                <h4>Which spell are you casting?</h4>
                                <ul>
                                        <li><button>Spell #1</button></li>
                                        <li><button>Spell #2</button></li>
                                        <li><button>Spell #3</button></li>
                                        <li><button>Spell #4</button></li>
                                </ul>
<p><span>Spell #1</span> uses <span>20</span> Spell Points. Please adjust your spell points accordingly.</p>
                                <h4>Roll the Die</h4>
                                <button>Roll</button>
                                <p>You rolled: <span>7</span></p>
                                <p>After Modifier: <span>12</span></p>
                                <h6>Modifier(s) Used: <span>Climb</span></h6>

                        </div>

                        <div className="pay-money">
                                <h4>Who are you paying?</h4>
                                <ul>
                                        <li><button>NPC</button></li>
                                        <li><button>Dungeon Master</button></li>
                                        <li><button>Player #1</button></li>
                                        <li><button>Player #2</button></li>
                                        <li><button>Player #3</button></li>
                                </ul>

                                <h4>How much are you paying?</h4>
                                <input type="number" /> <br />

                                <button>Pay <span>Player #1</span> <span>100</span> Gold</button>

                        </div>

                        <div className="sell-items">
                                <h4>Which item are you selling?</h4>
                                <select>
                                        <option>Weapons</option>
                                        <option>Armour</option>
                                        <option>Other Items</option>
                                </select>
                                <h5>Weapons</h5>
                                <ul>
                                        <li><button>Weapon #1</button></li>
                                        <li><button>Weapon #2</button></li>
                                        <li><button>Weapon #3</button></li>
                                        <li><button>Weapon #4</button></li>
                                </ul>
                                <h5>Armour</h5>
                                <ul>
                                        <li><button>Armour #1</button></li>
                                        <li><button>Armour #2</button></li>
                                        <li><button>Armour #3</button></li>
                                        <li><button>Armour #4</button></li>
                                </ul>
                                <h5>Other Items</h5>
                                <ul>
                                        <li><button>Item #1</button></li>
                                        <li><button>Item #2</button></li>
                                        <li><button>Item #3</button></li>
                                        <li><button>Item #4</button></li>
                                </ul>
                                <h4>Who are you selling it to?</h4>
                                <ul>
                                        <li><button>NPC</button></li>
                                        <li><button>Dungeon Master</button></li>
                                        <li><button>Player #1</button></li>
                                        <li><button>Player #2</button></li>
                                        <li><button>Player #3</button></li>
                                </ul>

                                <button>Sell <span>Weapon #1</span> to <span>Player #2</span></button>
                        </div>

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
 </React.Fragment>
        
    );
}



export default Gameplay;