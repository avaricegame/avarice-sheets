import React, { Component } from "react";
import Toggle from "../../Toggle/Toggle";

class Items extends React.Component {
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
    const {characterSheet} = this.state;

    return (
      <React.Fragment>
{/* {
            //characterSheet[0]['inventory']['weapons'].map(function(weapon) {
            items.map(function (item) {
              let x = [
                <h4>{item.itemName}</h4>,
                <div className="item-details">
                  <p>
                    <strong>Item Description:</strong> {item.itemDescription}
                  </p>
                </div>,
              ];

              // console.log(x)

              // console.log(item)
              // console.log(item.name)

              return x;
            })
          } */}
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Items;