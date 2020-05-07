import React from 'react';


const Inventory = ({ characterSheet }) => {
    return (
                <React.Fragment>
                    
                    <div className="secondary-header">
                        <h1>Inventory</h1>
                </div>

                        <div className="equipped bgb">
                                <div className="heading-bar">
                                        <h2>Equipped</h2>
                                </div>
                                <button>Equip/Unequip</button>
                                <h4>Weapons:</h4>
                                <h5>Melee/Ranged Weapon Name: </h5>
                                <h6><span>{characterSheet[0]['inventory']['weapons'][0].name}</span></h6>
                                <ul>

                                        <li>Range: <span>1</span></li>
                                        <li>Proficiency: <span>2</span></li>
                                        <li>Weapon Type: <span>Improvised/Normal</span></li>
                                        <li>Ability Bonus: <span>Dexterity/Constitution</span></li>
                                        <li>Damage: <span>D4/D6/D8/etc</span></li>
                                        <li>Uses: <span>undefined</span></li>
                                        <li>Critical: <span>20</span></li>
                                        <li>Weapon Notes: <span>Here are the weapon notes</span></li>

                                </ul>
                                <h5>Melee/Ranged Weapon Name: </h5>
                                <h6><span>{characterSheet[0]['inventory']['weapons'][1].name}</span></h6>
                                <ul>

                                        <li>Range: <span>1</span></li>
                                        <li>Proficiency: <span>2</span></li>
                                        <li>Weapon Type: <span>Improvised/Normal</span></li>
                                        <li>Ability Bonus: <span>Dexterity/Constitution</span></li>
                                        <li>Damage: <span>D4/D6/D8/etc</span></li>
                                        <li>Uses: <span>undefined</span></li>
                                        <li>Critical: <span>20</span></li>
                                        <li>Weapon Notes: <span>Here are the weapon notes</span></li>

                                </ul>
                                <h4>Armour and Items:</h4>
                                <h5>Head</h5>
                                <h6>Name of Armour Piece Here</h6>
                               
                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Hands</h5>
                                <h6>Name of Armour Piece Here</h6>

                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Arms</h5>
                                <h6>Name of Armour Piece Here</h6>

                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Torso</h5>
                                <h6>Name of Armour Piece Here</h6>
                                 
                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Waist</h5>
                                <h6>Name of Armour Piece Here</h6>
                                 
                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Feet</h5>
                                <h6>Name of Armour Piece Here</h6>
                                 
                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Neck</h5>
                                <h6>Name of Armour Piece Here</h6>
                                 
                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Shoulders</h5>
                                <h6>Name of Armour Piece Here</h6>
                                 
                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Eyes</h5>
                                <h6>Name of Armour Piece Here</h6>
                                 
                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Wrists</h5>
                                <h6>Name of Armour Piece Here</h6>
                                 
                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Ring 1</h5>
                                <h6>Name of Armour Piece Here</h6>
                                <p>Modifier Information</p>
                                 
                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>
                                <h5>Ring 2</h5>
                                <h6>Name of Armour Piece Here</h6>
                                 
                                <div className="equipped-armour-details">
                                        <p>Modifier Information</p>
                                        <ul>
                                                <li>Type: <span>Armour/Item</span></li>
                                                <li>Speed:<span>n/a</span></li>
                                                <li>Hit Points:<span> 1</span></li>
                                                <li>Strength:<span></span>n/a</li>
                                                <li>Dexterity/Reflex:<span>n/a</span></li>
                                                <li>Constitution/Fortitude:<span>n/a</span></li>
                                                <li>Intelligence:<span>n/a</span></li>
                                                <li>Charisma:<span>n/a</span></li>
                                                <li>Perception:<span>n/a</span></li>
                                                <li>Stealth:<span>n/a</span></li>
                                                <li>Ranged Accuracy:<span>n/a</span></li>
                                                <li>Melee Accuracy:<span>n/a</span></li>
                                                <li>Other:<span>n/a</span></li>
                                        </ul>
                                </div>

                                
                        </div>
                        <div className="money bgb">
                                <div className="heading-bar">
                                        <h2>Money</h2></div>
                                        <button id="addSubtractMoneyButton">Add / Subtract Money</button>
                                        <h4>Uni-Credits/Gold</h4>
                                        <h5>Current Savings:</h5>
                                        <h3>450 Gold</h3>
                                        <h5>Liquidated Savings:</h5>
                                        <h3>895 Gold</h3>
                                        
                                        <form id="addSubtractMoneyForm">
                                                <fieldset>
                                                        <label>Add or Subtract</label>
                                                        <select>
                                                                <option>Add</option>
                                                                <option>Subtract</option>
                                                        </select>
                                                        <label>How Much?</label>
                                                        <input type="number" />

                                                           <input type="submit" className="submit-button" value="Submit the change" />
                                                </fieldset>
                                        </form>
                                
                                
                                <button className="show-hide-liquidated-wealth-info">Show/Hide Liquidated Wealth Information</button>
                                <div className="liquidated-wealth-information">
                                        <h4>Liquidated Wealth Information</h4>
                                        <h5>Weapons <span>1</span></h5>
                                        <h6>Weapons Value: <span>450</span> gold</h6>
                                        <ul className="liquidated-wealth-ul">
                                                <li>Name: <span>Weapon #1</span></li>
                                                <li>Type: <span>Weapon</span></li>
                                                <li>Value: <span>450</span> gold</li>
                                        </ul>
                                     
                                        <h5>Armour <span>2</span></h5>
                                       
                                                <h6>Armour Value: <span>450</span> gold</h6>
                                                <ul className="liquidated-wealth-ul">
                                                        <li>Name: <span>Armour #1</span></li>
                                                        <li>Type: <span>Armour</span></li>
                                                        <li>Value: <span>450</span> gold</li>
                                                </ul>
                                                
                                    
                                        <h5>Items <span>3</span></h5>
                                        <h6>Items Value: <span>450</span> gold</h6>
                                        <ul className="liquidated-wealth-ul">
                                                <li>Name: <span>Item #1</span></li>
                                                <li>Type: <span>Item</span></li>
                                                <li>Value: <span>450</span> gold</li>
                                        </ul>
                                      

                                </div>
                        </div>
                        <div className="weapons bgb">
                                <div className="heading-bar">
                                        <h2>Weapons</h2>
                                </div>
                                        <button id="addNewWeaponButton">Add New Weapon</button>
                                        <form id="addNewWeaponForm">
                                                <fieldset>
                                                        <label>Weapon Name:</label>
                                                        <input type="text" />
                                                        <label>Range:</label>
                                                        <input type="number" />
                                                        <label>Weapon Type:</label>
                                                        <select>
                                                                <option>Improvised</option>
                                                                <option>Normal</option>
                                                                <option>Unarmed</option>
                                                        </select>
                                                        <label>Ability Bonus:</label>
                                                        <select>
                                                                <option>Strength</option>
                                                                <option>Dexterity</option>
                                                                <option>Mixed</option>
                                                        </select>
                                                        <label>Uses (1 - 15):</label>
                                                        <input type="number" />
                                                        <label>Damage:</label>
                                                        <select>
                                                                <option>D2</option>
                                                                <option>D4</option>
                                                                <option>D6</option>
                                                                <option>D8</option>
                                                                <option>D10</option>
                                                                <option>D12</option>
                                                                <option>D20</option>
                                                                <option>D100</option>
                                                        </select>
                                                        <label>Critical:</label>
                                                        <select>
                                                                <option>20</option>
                                                                <option>19-20</option>
                                                                <option>18-20</option>
                                                                <option>17-20</option>
                                                                <option>16-20</option>
                                                                <option>15-20</option>
                                                        </select>
                                                            <input type="submit" className="submit-button" value="Save New Weapon" />
                                                </fieldset>
                                        </form>
                                        <h4>Melee/Ranged Weapon Name:</h4>
                                        <h5>Weapon #1</h5> 
                                        <ul>

                                                <li>Range: <span>1</span></li>
                                                <li>Proficiency: <span>2</span></li>
                                                <li>Weapon Type: <span>Improvised/Normal</span></li>
                                                <li>Ability Bonus: <span>Dexterity/Constitution</span></li>
                                                <li>Damage: <span>D4/D6/D8/etc</span></li>
                                                <li>Uses: <span>undefined</span></li>
                                                <li>Critical: <span>20</span></li>
                                                <li>Weapon Notes: <span>Here are the weapon notes</span></li>

                                        </ul>
                                        <h4>Melee/Ranged Weapon Name:</h4>
                                        <h5>Weapon #2</h5> 
                                        <ul>

                                                <li>Range: <span>1</span></li>
                                                <li>Proficiency: <span>2</span></li>
                                                <li>Weapon Type: <span>Improvised/Normal</span></li>
                                                <li>Ability Bonus: <span>Dexterity/Constitution</span></li>
                                                <li>Damage: <span>D4/D6/D8/etc</span></li>
                                                <li>Uses: <span>undefined</span></li>
                                                <li>Critical: <span>20</span></li>
                                                <li>Weapon Notes: <span>Here are the weapon notes</span></li>

                                        </ul>
                                        <h4>Melee/Ranged Weapon Name:</h4>
                                        <h5>Weapon #3</h5> 
                                        <ul>

                                                <li>Range: <span>1</span></li>
                                                <li>Proficiency: <span>2</span></li>
                                                <li>Weapon Type: <span>Improvised/Normal</span></li>
                                                <li>Ability Bonus: <span>Dexterity/Constitution</span></li>
                                                <li>Damage: <span>D4/D6/D8/etc</span></li>
                                                <li>Uses: <span>undefined</span></li>
                                                <li>Critical: <span>20</span></li>
                                                <li>Weapon Notes: <span>Here are the weapon notes</span></li>

                                        </ul>
                        
                        </div>
                        <div className="armour bgb">
                                <div className="heading-bar">
                                        <h2>Armour</h2>
                                </div>
                                        <button id="addNewArmourButton">Add New Armour</button>
                                        <form id="addNewArmourForm">
                                                <fieldset>
                                                        <label>Armour Type:</label>
                                                        <select>
                                                                <option>Head</option>
                                                                <option>Hands</option>
                                                                <option>Arms</option>
                                                                <option>Torso</option>
                                                                <option>Waist</option>
                                                                <option>Feet</option>
                                                                <option>Neck</option>
                                                                <option>Shoulders</option>
                                                                <option>Eyes</option>
                                                                <option>Wrists</option>
                                                                <option>Ring 1</option>
                                                                <option>Ring 2</option>
                                                        </select>
                                                        <label>Armour Piece Name:</label>
                                                        <input type="text" />
                                                        <h4>Modifiers</h4>
                                                        <label>Speed:</label>
                                                        <input type="number" />
                                                        <label>Hit Points:</label>
                                                        <input type="number" />
                                                        <label>Strength:</label>
                                                        <input type="number" />
                                                        <label>Dexterity/Reflex:</label>
                                                        <input type="number" />
                                                        <label>Constitution/Fortitude:</label>
                                                        <input type="number" />
                                                        <label>Intelligence:</label>
                                                        <input type="number" />
                                                        <label>Charisma:</label>
                                                        <input type="number" />
                                                        <label>Perception:</label>
                                                        <input type="number" />
                                                        <label>Stealth:</label>
                                                        <input type="number" />
                                                        <label>Ranged Accuracy:</label>
                                                        <input type="number" />
                                                        <label>Melee Accuracy:</label>
                                                        <input type="number" />
                                                        <label>Abilities Given:</label>
                                                        <select>
                                                                <option>TBA</option>
                                                        </select>
                                                            <input type="submit" className="submit-button" value="Save New Armour Piece" />
                                                </fieldset>
                                        </form>
                                        <h4>Head</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Hands</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Arms</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Torso</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Waist</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Feet</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Neck</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Shoulders</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Eyes</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Wrists</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                        <p>Modifier Information</p>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Ring 1</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Ring 2</h4>
                                        <h5>Name of Armour Piece Here</h5>
                                         
                                        <div className="armour-details">
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                        
                        </div>
                        <div className="items bgb">
                                <div className="heading-bar">
                                        <h2>Items</h2>
                                </div>
                                <button>Add New Item</button>
                                        <button id="addNewCustomItemButton">Add New Custom Item</button>
                                        <form id="addNewCustomItemForm">
                                                <fieldset>
                                                        <label>Item Name:</label>
                                                        <input type="text" />
                                                        <label>Item Description:</label>
                                                        <textarea></textarea>
                                                        <h4>Modifiers</h4>
                                                        <label>Speed:</label>
                                                        <input type="number" />
                                                        <label>Hit Points:</label>
                                                        <input type="number" />
                                                        <label>Strength:</label>
                                                        <input type="number" />
                                                        <label>Dexterity/Reflex:</label>
                                                        <input type="number" />
                                                        <label>Constitution/Fortitude:</label>
                                                        <input type="number" />
                                                        <label>Intelligence:</label>
                                                        <input type="number" />
                                                        <label>Charisma:</label>
                                                        <input type="number" />
                                                        <label>Perception:</label>
                                                        <input type="number" />
                                                        <label>Stealth:</label>
                                                        <input type="number" />
                                                        <label>Ranged Accuracy:</label>
                                                        <input type="number" />
                                                        <label>Melee Accuracy:</label>
                                                        <input type="number" />
                                                            <input type="submit" className="submit-button" value="Save New Item" />
                                                </fieldset>
                                        </form>
                                        <h4>Name of Item Here</h4>
                                        <div className="item-details">
                                                <p>Item Description: <span>Item description goes here</span></p>
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                        </div>
                                        <h4>Name of Item Here</h4>
                                        <div className="item-details">
                                                <p>Item Description: <span>Item description goes here</span></p>
                                                <p>Modifier Information</p>
                                                <ul>
                                                        <li>Speed:<span>n/a</span></li>
                                                        <li>Hit Points:<span> 1</span></li>
                                                        <li>Strength:<span></span>n/a</li>
                                                        <li>Dexterity/Reflex:<span>n/a</span></li>
                                                        <li>Constitution/Fortitude:<span>n/a</span></li>
                                                        <li>Intelligence:<span>n/a</span></li>
                                                        <li>Charisma:<span>n/a</span></li>
                                                        <li>Perception:<span>n/a</span></li>
                                                        <li>Stealth:<span>n/a</span></li>
                                                        <li>Ranged Accuracy:<span>n/a</span></li>
                                                        <li>Melee Accuracy:<span>n/a</span></li>
                                                        <li>Other:<span>n/a</span></li>
                                                </ul>
                                     
                                </div>
                 

                </div>          
 </React.Fragment>
        
    );
}



export default Inventory;