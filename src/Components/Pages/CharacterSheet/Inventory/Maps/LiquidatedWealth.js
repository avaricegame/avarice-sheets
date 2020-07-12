import React, { Component } from "react"
import Toggle from "../../../../nln/Toggle"

class LiquidatedWealth extends React.Component {
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
    let { characterSheet } = this.props

    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Liquidated Wealth Information</button>
            {on && (
              <React.Fragment>
                <div className="weapon-div">
                  <h6>
                    Weapons Value: <span>450</span> gold
                  </h6>
                  <h5>Subheading</h5>
                </div>
                <div className="weapon-div">
                  <h6>
                    Armour Value: <span>450</span> gold
                  </h6>
                  <h5>Subheading</h5>
                </div>
                <div className="weapon-div">
                  <h6>
                    Items Value: <span>450</span> gold
                  </h6>
                  <h5>Subheading</h5>
                </div>
              </React.Fragment>
            )}
          </div>
        )}
      </Toggle>
    ) // END RETURN
  } // END RENDER
} // END CLASS

export default LiquidatedWealth
