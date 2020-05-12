import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class LiquidatedWealth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   onChange = (e) => {
  //     console.log(e.target.value);
  //     console.log(e.target.name);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  onSubmit = (e) => {
    e.preventDefault();
    const {} = this.state;

    fetch("", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  };

  render() {
    const {} = this.state;

    return (
        <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>
              Show/Hide Liquidated Wealth Information
            </button>
            {on && (
              <div className="liquidated-wealth-information">
                <h4>Liquidated Wealth Information</h4>
                <h5>
                  Weapons <span>1</span>
                </h5>
                <h6>
                  Weapons Value: <span>450</span> gold
                </h6>
                <ul className="liquidated-wealth-ul">
                  <li>
                    Name: <span>Weapon #1</span>
                  </li>
                  <li>
                    Type: <span>Weapon</span>
                  </li>
                  <li>
                    Value: <span>450</span> gold
                  </li>
                </ul>

                <h5>
                  Armour <span>2</span>
                </h5>

                <h6>
                  Armour Value: <span>450</span> gold
                </h6>
                <ul className="liquidated-wealth-ul">
                  <li>
                    Name: <span>Armour #1</span>
                  </li>
                  <li>
                    Type: <span>Armour</span>
                  </li>
                  <li>
                    Value: <span>450</span> gold
                  </li>
                </ul>

                <h5>
                  Items <span>3</span>
                </h5>
                <h6>
                  Items Value: <span>450</span> gold
                </h6>
                <ul className="liquidated-wealth-ul">
                  <li>
                    Name: <span>Item #1</span>
                  </li>
                  <li>
                    Type: <span>Item</span>
                  </li>
                  <li>
                    Value: <span>450</span> gold
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </Toggle>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default LiquidatedWealth;