import React, { Component } from "react"
import Toggle from "../../components/nln/Toggle"

class CharacterBackgroundForm extends React.Component {
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
            <button onClick={toggle}>Edit/Create Character Background</button>
            {on && (
              <form id="editCharacterBackgroundForm">
                <fieldset>
                  <fieldset>
                    <legend>Who were your parents? How were you raised? Do you have any close family?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Where/From whom did you learn your skills?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Name your 3 most important personal beliefs?</legend>
                    <label>1)</label>
                    <textarea></textarea>
                    <br />
                    <label>2)</label>
                    <textarea></textarea>
                    <br />
                    <label>3)</label>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Name 3 or more character flaws that are most likely to trouble you?</legend>
                    <label>1)</label>
                    <textarea></textarea>
                    <br />
                    <label>2)</label>
                    <textarea></textarea>
                    <br />
                    <label>3)</label>
                    <textarea></textarea>
                    <br />
                    <label>4)</label>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>What do you secretly fear even in times of easy-going peace? Why?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Is this character a hero? Why or why not?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>What are your goals (both long and short term)?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Is your character merciful? Why or why not?</legend>
                    <textarea></textarea>
                  </fieldset>
                  <fieldset>
                    <legend>Why are you an adventurer?</legend>
                    <textarea></textarea>
                  </fieldset>
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

export default CharacterBackgroundForm
