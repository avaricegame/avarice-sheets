import React from 'react';


const Info = () => {
    return (
                <React.Fragment>

               <div className="secondary-header">
                        <h1>Info</h1>
                </div>


                <div className="campaign-details bgb">
                        <div className="heading-bar">
                                <h2>Campaign Details</h2>
                        </div>
                        <button>Edit/Create Campaign Details (make this form eventually)</button>
                        <p>All the information on the campaign goes here.</p>
                </div>
                <div className="character-details bgb">
                        <div className="heading-bar">
                                <h2>Character Background and Information</h2>
                        </div>
                        <h4>Character Race and Class</h4>
                        <p>Character Race: <span>The Race Here</span></p>
                        <p>Character Class: <span>The Class Here</span></p>

                        <h4>Character Description</h4>
                        <button id="editCharacterDescriptionButton">Edit/Create Character Description</button>
                        <form id="editCharacterDescriptionForm">
                                <fieldset>
                                        <label>Player Name:</label>
                                        <input type="text" value="Zack Bringhurst" />
                                        <label>Character Name:</label>
                                        <input type="text" value="Todd Bendy" />
                                        <label>Effect:</label>
                                        <select>
                                                <option></option>
                                                <option>None</option>
                                                <option>Were-wolf</option>
                                                <option>Vampire</option>
                                        </select>
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
                                <input type="submit" className="submit-button" value="Save Changes" />
                        </form>
                        <p>All of the information on the characters background and information goes here.</p>


                        <h4>Character Background</h4>
                        <button id="editCharacterBackgroundButton">Edit/Create Character Background</button>

                        <form id="editCharacterBackgroundForm">
                                <fieldset>
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
                                <input type="submit" className="submit-button" value="Save Changes" />
                        </form>
                        <p>All of the information on the characters background and information goes here.</p>

                </div>
                <div className="race-details bgb">
                        <div className="heading-bar">
                                <h2>Race Details and Information</h2>
                        </div>
                        <p>All the information on the character's race goes here.</p>
                </div>
                <div className="class-details bgb">
                        <div className="heading-bar">
                                <h2>Class Details and Information</h2>
                        </div>
                        <p>All the information on the character's class goes here.</p>
                </div>
                <div className="quick-rules bgb">
                        <div className="heading-bar">
                                <h2>Quick Rules</h2>
                        </div>
                        <p>The quick rules rulebook goes here.</p>
                        <a href="">View the Official Pax Rulebooks</a>
                </div>
      
                     
 </React.Fragment>
        
    );
}



export default Info;