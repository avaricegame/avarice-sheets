import React from 'react';

const Home = ({ onRouteChange }) => { 

            return (

<div className="container">
                <header>
                        <div class="header__top-bar">
                                <h2><a href="" class="header__h2--link">Back to Pax</a></h2>
                                <h2></h2>
                                <h2><a href="" class="header__h2--link">Settings</a></h2>
                                </div>
                                <div>
                                        <h2>Welcome, <span class="color--accent">Zack Bringhurst</span></h2>
                        </div>
                        
                </header>
                <nav>

                </nav>
                <div className="secondary-header">
                    <h1>Home</h1>
                </div>
                <div class="campaigns">
                        <div class="heading-bar">
                                <h1>Campaigns</h1>
                        </div>
                        <p>This feature is coming soon!</p>
                </div>
                <div class="character-sheets">
                        <div class="heading-bar">
                                <h1>Character Sheets</h1>
                        </div>
                        <h2>Create Character Sheets</h2>
                        <button id="createNewCharacterSheetButton">Create a New Character Sheet</button>
                        <form id="createNewCharacterSheetForm">
                                <fieldset>
                                        <legend>Basic Information</legend>
                                        <label>Player Name:</label>
                                        <input type="text" value="Zack Bringhurst" />
                                        <label>Character Name:</label>
                                        <input type="text" />
                                        <label>Effect:</label>
                                                <select>
                                                        <option></option>
                                                        <option>None</option>
                                                        <option>Were-wolf</option>
                                                        <option>Vampire</option>
                                                </select>
                                        <label>Choose your Race:</label>
                                        <select>
                                                <option></option>
                                                <option>Bruttu (Orcs)</option>
                                                <option>Dhuine (Gnomes)</option>
                                                <option>Guardian Angels</option>
                                                <option>Hada</option>
                                                <option>Freemakers (Humans)</option>
                                                <option>Khurd (Goblins)</option>
                                                <option>Lowca (Elves)</option>
                                                <option>Narak (Tieflings)</option>
                                                <option>Sakana (Kua-Toa)</option>
                                                <option>Sedie (Dwarves)</option>
                                                <option>Sirin</option>
                                                <option>Sourit (Mousefolk)</option>
                                                <option>Succubus</option>
                                        </select>
                                        <label>Choose your Class:</label>
                                        <select>
                                                <option></option>
                                                <option>Apa (Aquamancer)</option>
                                                <option>Armor Command</option>
                                                <option>Assassin</option>
                                                <option>Demolitionist</option>
                                                <option>Infantry</option>
                                                <option>Maho (Monk)</option>
                                                <option>Maindo (Telepath)</option>
                                                <option>Marksman</option>
                                                <option>Medic</option>
                                                <option>Ohen (Pyromancer)</option>
                                                <option>Sagart (Paladin)</option>
                                                <option>Savage (Barbarian)</option>
                                                <option>Slinger</option>
                                                <option>Survivalist (Ranger)</option>
                                                <option>Temptress/Temptor</option>
                                                <option>Turchin (Rogue)</option>
                                                <option>Yinyue (Sonomancer)</option>
                                                <option>Ziel (Necromancer)</option>
                                        </select>

                                        <p>Want to learn more about the Races and Classes of Pax? <a href="" target="_blank">Visit our site to learn everything you will need to know,</a> and read about our <a href="" target="_blank">races</a> and <a href="" target="_blank">classes.</a> </p>
                                </fieldset>
                                <fieldset>
                                        <legend>Character Description</legend>
                                        <label>Approximate Age in Years:</label>
                                        <input type="number" /> <label>Years</label>

                                        <label>Gender:</label>
                                        <input type="radio" name="gender" value="male" />Male
                                        <input type="radio" name="gender" value="female" />Female
                                        <input type="radio" name="gender" value="ambiguous" />Ambiguous

                                        <label>Skin Tone:</label>
                                        <select>
                                                <option></option>
                                                <option>Brown</option>
                                                <option>White</option>
                                                <option>Green</option>
                                                <option>Blue</option>
                                                <option>Purple</option>
                                                <option>Gray</option>
                                                <option>Other</option>
                                        </select>
                                        <label>Hair Length:</label>
                                        <select>
                                                <option></option>
                                                <option>Long</option>
                                                <option>Medium</option>
                                                <option>Short</option>
                                                <option>Bald</option>
                                        </select>
                                        <label>Hair Color:</label>
                                        <select>
                                                <option></option>
                                                <option>Brown</option>
                                                <option>Black</option>
                                                <option>Blonde</option>
                                                <option>Dirty Blonde</option>
                                                <option>Blue</option>
                                                <option>Purple</option>
                                                <option>Orange</option>
                                                <option>Silver</option>
                                                <option>White</option>
                                                <option>Red</option>
                                                <option>Gray</option>
                                                <option>Other</option>
                                        </select>
                                        <label>Eyes:</label>
                                        <select>
                                                <option></option>
                                                <option>Amber</option>
                                                <option>Blue</option>
                                                <option>Brown</option>
                                                <option>Hazel</option>
                                                <option>Red</option>
                                                <option>Green</option>
                                                <option>Purple</option>
                                                <option>Black</option>
                                                <option>White</option>
                                                <option>Gray</option>
                                                <option>Orange</option>
                                                <option>Yellow</option>
                                                <option>Pink</option>
                                                <option>Other</option>
                                        </select>
                                        <label>Approximate Weight in LBS:</label>
                                        <input type="number" /> <label>LBS</label>
                                        <labe> Approximate Height in FT:</labe>
                                        <input type="number" /> <label>FT</label>
                                </fieldset>
                                <fieldset>
                                        <legend>Character Backstory</legend>
                                        <fieldset>
                                                <legend>Who were your parents? How were you raised? Do you have
                                                        any close family?</legend>
                                                <textarea></textarea>
                                        </fieldset>
                                        <fieldset>
                                                <legend>Where/From whom did you learn your skills?
                                                </legend>
                                                <textarea></textarea>
                                        </fieldset>
                                        <fieldset>
                                                <legend>Name your 3 most important personal beliefs?
                                                </legend>
                                                <label>1)</label><textarea></textarea><br />
                                                <label>2)</label><textarea></textarea><br />
                                                <label>3)</label><textarea></textarea>
                                        </fieldset>
                                        <fieldset>
                                                <legend>Name 3 or more character flaws that are most likely to
                                                        trouble you?
                                                </legend>
                                                <label>1)</label><textarea></textarea><br />
                                                <label>2)</label><textarea></textarea><br />
                                                <label>3)</label><textarea></textarea><br />
                                                <label>4)</label><textarea></textarea>
                                        </fieldset>
                                        <fieldset>
                                                <legend>What do you secretly fear even in times of easy-going
                                                        peace? Why?
                                                </legend>
                                                <textarea></textarea>
                                        </fieldset>
                                        <fieldset>
                                                <legend>Is this character a hero? Why or why not?
                                                </legend>
                                                <textarea></textarea>
                                        </fieldset>
                                        <fieldset>
                                                <legend>What are your goals (both long and short term)?
                                                </legend>
                                                <textarea></textarea>
                                        </fieldset>
                                        <fieldset>
                                                <legend>Is your character merciful? Why or why not?
                                                </legend>
                                                <textarea></textarea>
                                        </fieldset>
                                        <fieldset>
                                                <legend>Why are you an adventurer?
                                                </legend>
                                                <textarea></textarea>
                                        </fieldset>
                                </fieldset>
                                <fieldset>
                                        <legend>Choose Your Starting Weapons</legend>
                                        <h3>Weapon #1</h3>
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
                                        <h3>Weapon #2</h3>
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
                                </fieldset>
                                
                                
                                <fieldset>
                                        <legend>
                                                Information for Starting Out
                                        </legend>
                                        <p>When your character sheet loads, you have the following steps to take:</p>
                                        <ol>
                                                <li>Go to the Stats tab of your character sheet</li>
                                                <li>Put 2 points in your Ability Scores under the Level Ups section</li>
                                                <li>Put 5 Ranks for any of the skills you are proficient in</li>
                                                <ul>
                                                        <li>Do not put more than 2 ranks for any one skill</li>
                                                </ul>
                                        </ol>
                                        <input type="submit" value="Create my new Character" />
                                </fieldset>
                                
                        </form>

                        <h2>Manage Character Sheets</h2>
                        <p onClick={() => onRouteChange('gameplay')} >CHARACTER SHEET CHOICE #1</p>
                        <ul>
                                <a href="index.html">
                                        <li>Character Sheet #1</li>
                                </a>
                                <a href="index.html">
                                        <li>Character Sheet #3</li>
                                </a>
                                <a href="index.html">
                                        <li>Character Sheet #3</li>
                                </a>

                        </ul>
</div>
</div>
            )     
}

export default Home;