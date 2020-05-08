import React from 'react';


const Inventory = ({ characterSheet, weapons, armour, items, equipmentAbilities }) => {
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
                                {//characterSheet[0]['inventory']['weapons'].map(function(weapon) {
                                  weapons.map(function(weapon) {
                                          let x = [
                                          <h5>{weapon.rangedMelee} Weapon Name: </h5>,
                                                <h6>{weapon.name}</h6>,
                                                <ul>
                                                        <li>Range: {weapon.range}</li>
                                                        <li>Proficiency: {weapon.proficiency}</li>
                                                        <li>Requirements: {weapon.requirements}</li>
                                                        <li>Weapon Type: {weapon.weaponType}</li>
                                                        <li>Ability Bonus: {weapon.abilityBonus}</li>
                                                        <li>Damage: {weapon.damage}</li>
                                                        <li>Uses: {weapon.uses}</li>
                                                        <li>Critical: {weapon.critical}</li>
                                          <li>Magical Abilities:</li> 
                                                        <ul>
                                                                <li>{weapon.magicalAbilities}: {equipmentAbilities[0].description}</li>
                                                                </ul>
                                                        <li><strong>Description:</strong> {weapon.description}</li>
                                                </ul>
                                                ]

                                                console.log(x)
                                          
                                        console.log(weapon)
                                        console.log(weapon.name)


     return x
                                          })}
                                          


                                
                                <h4>Armour:</h4>
                                {//characterSheet[0]['inventory']['weapons'].map(function(weapon) {
                                  armour.map(function(armour) {
                                        let x = [
                                        <h5>{armour.bodyArea}</h5>,
                                              <h6>{armour.name}</h6>,
                                              <ul>
                                                      <li>Requirements: {armour.requirements}</li>
                                                      
                                                      <li>Hit Points: {armour.modifiers.hp}</li>
                                               <li>Speed: {armour.modifiers.speed}</li>
                                               <li>Strength: {armour.modifiers.strength}</li>
                                               <li>Dexterity/Reflex: {armour.modifiers.dexterityReflex}</li>
                                               <li>Constitution/Fortitude: {armour.modifiers.constitutionFortitude}</li>
                                               <li>Intelligence: {armour.modifiers.intelligence}</li>
                                               <li>Charisma: {armour.modifiers.charisma}</li>
                                               <li>Perception: {armour.modifiers.perception}</li>
                                               <li>Stealth: {armour.modifiers.stealth}</li>
                                               <li>Ranged Accuracy: {armour.modifiers.rangedAccuracy}</li>
                                               <li>Melee Accuracy: {armour.modifiers.meleeAccuracy}</li>
                                                      
                                               <li>Magical Abilities:</li> 
                                                        <ul>
                                                                <li>{armour.magicalAbilities}: {/*equipmentAbilities[0].description*/}</li>
                                                                </ul>
                                                      <li><strong>Description:</strong> {armour.description}</li>
                                              </ul>
                                              ]

                                              console.log(x)
                                        
                                      console.log(armour)
                                      console.log(armour.name)


   return x
                                        })}
                        
                                
                        </div>
                        <div className="money bgb">
                                <div className="heading-bar">
                                        <h2>Money</h2></div>
                                        <button id="addSubtractMoneyButton">Add / Subtract Money</button>
                                        <h4>Uni-Credits/Gold</h4>
                                        <h5>Current Savings:</h5>
                                <h3>{characterSheet[0]['inventory']['money']}</h3>
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
                                 {//characterSheet[0]['inventory']['weapons'].map(function(weapon) {
                                  weapons.map(function(weapon) {
                                        let x = [
                                        <h5>{weapon.rangedMelee} Weapon Name: </h5>,
                                              <h6>{weapon.name}</h6>,
                                              <ul>
                                                      <li>Range: {weapon.range}</li>
                                                      <li>Proficiency: {weapon.proficiency}</li>
                                                      <li>Requirements: {weapon.requirements}</li>
                                                      <li>Weapon Type: {weapon.weaponType}</li>
                                                      <li>Ability Bonus: {weapon.abilityBonus}</li>
                                                      <li>Damage: {weapon.damage}</li>
                                                      <li>Uses: {weapon.uses}</li>
                                                      <li>Critical: {weapon.critical}</li>
                                                      <li>Magical Abilities:</li> 
                                                        <ul>
                                                                <li>{weapon.magicalAbilities}: {equipmentAbilities[0].description}</li>
                                                                </ul>
                                                      <li><strong>Description:</strong> {weapon.description}</li>
                                              </ul>
                                              ]

                                              console.log(x)
                                        
                                      console.log(weapon)
                                      console.log(weapon.name)


   return x
                                        })}       
                        
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
                                         
                                    {//characterSheet[0]['inventory']['weapons'].map(function(weapon) {
                                  armour.map(function(armour) {
                                        let x = [
                                        <h5>{armour.bodyArea}</h5>,
                                              <h6>{armour.name}</h6>,
                                              <ul>
                                                      <li>Requirements: {armour.requirements}</li>
                                                      
                                                      <li>Hit Points: {armour.modifiers.hp}</li>
                                               <li>Speed: {armour.modifiers.speed}</li>
                                               <li>Strength: {armour.modifiers.strength}</li>
                                               <li>Dexterity/Reflex: {armour.modifiers.dexterityReflex}</li>
                                               <li>Constitution/Fortitude: {armour.modifiers.constitutionFortitude}</li>
                                               <li>Intelligence: {armour.modifiers.intelligence}</li>
                                               <li>Charisma: {armour.modifiers.charisma}</li>
                                               <li>Perception: {armour.modifiers.perception}</li>
                                               <li>Stealth: {armour.modifiers.stealth}</li>
                                               <li>Ranged Accuracy: {armour.modifiers.rangedAccuracy}</li>
                                               <li>Melee Accuracy: {armour.modifiers.meleeAccuracy}</li>
                                                      
                                               <li>Magical Abilities:</li> 
                                                        <ul>
                                                                <li>{armour.magicalAbilities}: {/*equipmentAbilities[0].description*/}</li>
                                                                </ul>
                                                      <li><strong>Description:</strong> {armour.description}</li>
                                              </ul>
                                              ]

                                              console.log(x)
                                        
                                      console.log(armour)
                                      console.log(armour.name)


   return x
                                        })}    
                        
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


{//characterSheet[0]['inventory']['weapons'].map(function(weapon) {
                                  items.map(function(item) {
                                        let x = [
                                                <h4>{item.itemName}</h4>,
                                                <div className="item-details">
                                        <p><strong>Item Description:</strong> {item.itemDescription}</p>
                                        </div>
                                              ]

                                              console.log(x)
                                        
                                      console.log(item)
                                      console.log(item.name)


   return x
                                        })}
                                       
                                     
                 

                </div>          
 </React.Fragment>
        
    );
}



export default Inventory;