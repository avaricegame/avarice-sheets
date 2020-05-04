import React from 'react';


const Stats = () => {
    return (
                <React.Fragment>

          <div className="secondary-header">
                        <h1>Stats</h1>
                </div>

                        <div className="level bgb">
                                <div className="heading-bar">
                                        <h2>Level and Experience</h2>
                                </div>
                                
                                <h4>Level</h4>
                                <h5>You are at level 4</h5>
                                <button id="editLevelButton">Edit Level</button><button>Quick Level Up</button>
                                
                                
                                <form id="editLevelForm">
                                        <fieldset>
                                                <button>-</button>
                                                <input type="number" value="4" />
                                                <button>+</button>

                                                <input type="submit" className="submit-button" value="Save Level" />
                                        </fieldset>
                                </form>

                                <p>You currently have <span>4</span> Rank Points and <span>2</span> Ability Scores Level
                                        Up points that you can use. Be sure to apply them to keep your character as buff and smart as possible!</p>

                                <h4>Excelence Chips</h4>
                                <h5>You have <span>0</span> excelence chips</h5>
                                <button id="editExcellenceChipsButton">Edit Excelence Chips</button><button>Add an Excelence Chip</button>
                                
                                
                                <form id="editExcellenceChipsForm">
                                        <fieldset>
                                                <button>-</button>
                                                <input type="number" value="0" />
                                                <button>+</button>

                                                <input type="submit" className="submit-button" value="Save Changes" />
                                        </fieldset>
                                </form>
                                <p>Want to earn an excellence chip? Do something epic and make sure the DM sees! Excellence Chips can be cashed in whenever you'd like for an immediate perfect roll. Use them wisely</p>
                        </div>
                        <div className="important-stats bgb bgb--overflow">
                                <div className="heading-bar bgb--full-width">
                                        <h2>Important Stats</h2>
                                </div>
                                <button>Edit Important Stats</button><button>Save
                                                Changes</button>
                                <table>
                                        <tr>
                                                <th>Stat</th>
                                                <th>Total</th>
                                                <th>Ability Modifier</th>
                                                <th>Equipment Modifier</th>
                                                <th>Temporary Modifier</th>
                                                <th>Miscellanious Modifier</th>
                                        </tr>
                                        <tr>
                                                <td>Speed</td>
                                                <td><span>3</span></td>
                                                <td><span>3</span></td>
                                                <td><span>0</span></td>
                                                <td><span><input type="number" /></span></td>
                                                <td><span><input type="number" /></span></td>
                                        </tr>
                                        <tr>
                                                <td>Perception</td>
                                                <td><span>3</span></td>
                                                <td><span>3</span></td>
                                                <td><span>0</span></td>
                                                <td><span><input type="number" /></span></td>
                                                <td><span><input type="number" /></span></td>
                                        </tr>
                                        <tr>
                                                <td>Reflex (DEX)</td>
                                                <td><span>3</span></td>
                                                <td><span>3</span></td>
                                                <td><span>0</span></td>
                                                <td><span><input type="number" /></span></td>
                                                <td><span><input type="number" /></span></td>
                                        </tr>
                                        <tr>
                                                <td>Fortitude (CON)</td>
                                                <td><span>3</span></td>
                                                <td><span>3</span></td>
                                                <td><span>0</span></td>
                                                <td><span><input type="number" /></span></td>
                                                <td><span><input type="number" /></span></td>
                                        </tr>
                                        <tr>
                                                <td>Stealth</td>
                                                <td><span>3</span></td>
                                                <td><span>3</span></td>
                                                <td><span>0</span></td>
                                                <td><span><input type="number" /></span></td>
                                                <td><span><input type="number" /></span></td>
                                        </tr>
                                        <tr>
                                                <td>Ranged Accuracy</td>
                                                <td><span>3</span></td>
                                                <td><span>3</span></td>
                                                <td><span>0</span></td>
                                                <td><span><input type="number" /></span></td>
                                                <td><span><input type="number" /></span></td>
                                        </tr>
                                        <tr>
                                                <td>Melee Accuracy</td>
                                                <td><span>3</span></td>
                                                <td><span>3</span></td>
                                                <td><span>0</span></td>
                                                <td><span><input type="number" /></span></td>
                                                <td><span><input type="number" /></span></td>
                                        </tr>
                                </table>
                        </div>
                        
                        <div className="ability-scores bgb bgb--overflow">
                                <div className="heading-bar bgb--full-width">
                                        <h2>Ability Scores</h2>
                                </div><button>Edit Ability Scores</button><button>Save
                                                Changes</button>
                                <table>
                                        <tr>
                                                <th>Ability</th>
                                                <th>Total</th>
                                                <th>Level Ups</th>
                                                <th>Equipment</th>
                                                <th>Temporary</th>
                                                <th>Misc.</th>
                                                <th>Race/Class</th>
                                        </tr>
                                        <tr>
                                                <td>Strength (STR)</td>
                                                <td><span>5</span></td>
                                                <td><input type="number" /></td>
                                                <td><span>5</span></td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                                <td><span>5</span></td>
                                        </tr>
                                        <tr>
                                                <td>Dexterity (DEX)</td>
                                                <td><span>5</span></td>
                                                <td><input type="number" /></td>
                                                <td><span>5</span></td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                                <td><span>5</span></td>
                                        </tr>
                                        <tr>
                                                <td>Constitution (CON)</td>
                                                <td><span>5</span></td>
                                                <td><input type="number" /></td>
                                                <td><span>5</span></td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                                <td><span>5</span></td>
                                        </tr>
                                        <tr>
                                                <td>Intelligence (INT)</td>
                                                <td><span>5</span></td>
                                                <td><input type="number" /></td>
                                                <td><span>5</span></td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                                <td><span>5</span></td>
                                        </tr>
                                        <tr>
                                                <td>Charisma (CHA)</td>
                                                <td><span>5</span></td>
                                                <td><input type="number" /></td>
                                                <td><span>5</span></td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                                <td><span>5</span></td>
                                        </tr>
                                </table>
                        </div>
                        <div class="proficiencies bgb">
                                <div class="heading-bar">
                                        <h2>Proficiencies</h2>
                                </div>
                                <table>
                                        <tr>
                                                <th>Proficiency</th>
                                                <th>Modifier Value</th>
                                        </tr>
                                        <tr>
                                                <td>Explosive Proficiency</td>
                                                <td><span>0</span></td>
                                        </tr>
                                        <tr>
                                                <td>Magic Item Proficiency</td>
                                                <td><span>0</span></td>
                                        </tr>
                                        <tr>
                                                <td>Dexterity Proficiency</td>
                                                <td><span>0</span></td>
                                        </tr>
                                        <tr>
                                                <td>Strength Proficiency</td>
                                                <td><span>0</span></td>
                                        </tr>
                                        <tr>
                                                <td>Mixed (Dexterity/Strength) Proficiency</td>
                                                <td><span>0</span></td>
                                        </tr>

                                </table>
                        </div>
                        <div class="skills bgb bgb--overflow">
                                <div class="heading-bar bgb--full-width">
                                        <h2>Skills</h2>
                                </div><button>Edit Skills</button><button>Save Changes</button>
                                <table>
                                        <tr>
                                                <th>Proficiency</th>
                                                <th>Skill</th>
                                                <th>Key</th>
                                                <th>Total</th>
                                                <th>Ability</th>
                                                <th>Ranks</th>
                                                <th>Miscellanious</th>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Acrobatics</td>
                                                <td>DEX</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Appraise</td>
                                                <td>INT</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Bluff</td>
                                                <td>CHA</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Climb</td>
                                                <td>STR</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Diplomacy</td>
                                                <td>CHA</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Disable Device</td>
                                                <td>INT</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Disguise</td>
                                                <td>CHA</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Escape Artist</td>
                                                <td>DEX</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Explosive</td>
                                                <td>INT</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Technology</td>
                                                <td>INT</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Handle Animal</td>
                                                <td>CHA</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Medicine</td>
                                                <td>INT</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Intimidate</td>
                                                <td>CHA</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Linguistics</td>
                                                <td>INT</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Perform</td>
                                                <td>CHA</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Ride/Pilot</td>
                                                <td>DEX</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Repair</td>
                                                <td>INT</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Sense Motive</td>
                                                <td>CHA</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Sleight of Hand</td>
                                                <td>DEX</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Spellcraft</td>
                                                <td>INT</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Stealth</td>
                                                <td>DEX</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Survival</td>
                                                <td>INT</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Swim</td>
                                                <td>STR</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Use Magic Device</td>
                                                <td>CHA</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Ranged Accuracy</td>
                                                <td>DEX</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>
                                        <tr>
                                                <td><input type="number" /></td>
                                                <td>Melee Accuracy</td>
                                                <td>DEX</td>
                                                <td>5</td>
                                                <td>5</td>
                                                <td><input type="number" /></td>
                                                <td><input type="number" /></td>
                                        </tr>

                                </table>
                        </div>           
                     
 </React.Fragment>
        
    );
}



export default Stats;