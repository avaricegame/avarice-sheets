import React, { Component } from "react"
import Toggle from "../../components/nln/Toggle"

class CharacterDescriptionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  //   onChange = (e) => {
  //     console.log(e.target.value);
  //     console.log(e.target.name);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  onSubmit = (e) => {
    e.preventDefault()
    const {} = this.state

    fetch("", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
  }

  render() {
    const {} = this.state

    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Edit/Create Character Description</button>
            {on && (
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
                  <input type="radio" name="gender" value="male" />
                  Male
                  <input type="radio" name="gender" value="female" />
                  Female
                  <input type="radio" name="gender" value="ambiguous" />
                  Ambiguous
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
            )}
          </div>
        )}
      </Toggle>
    ) // END RETURN
  } // END RENDER
} // END CLASS

export default CharacterDescriptionForm
