import React, { Component } from "react";

// IMPORT ALL THE FORM COMPONENTS
import CustomWeaponForm from "./Forms/CustomWeaponForm";
import CustomItemForm from "./Forms/CustomItemForm";
import CustomArmourForm from "./Forms/CustomArmourForm";
import NewWeaponForm from "./Forms/NewWeaponForm";
import NewItemForm from "./Forms/NewItemForm";
import NewArmourForm from "./Forms/NewArmourForm";
import AddSubtractMoneyForm from "./Forms/AddSubtractMoneyForm";

// IMPORT ALL OF THE MAPPING COMPONENTS
import LiquidatedWealth from "./Maps/LiquidatedWealth";
import Weapons from "./Maps/Weapons";
import Armour from "./Maps/Armour";
import Items from "./Maps/Items";

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    console.log(e.target.value);
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

    let {
      characterSheet,
      weapons,
      armour,
      items,
      equipmentAbilities,
    } = this.props;
    return (
      <React.Fragment>
        <div className="secondary-header">
          <h1>Inventory</h1>
        </div>

        {/****** BEGIN EQUIPPED SECTION ******/}
        <div className="equipped bgb">
          <div className="heading-bar">
            <h2>Equipped</h2>
          </div>

          <button>Equip/Unequip</button>
        </div>

        {/****** BEGIN MONEY SECTION ******/}
        <div className="money bgb">
          <div className="heading-bar">
            <h2>Money</h2>
          </div>

          <AddSubtractMoneyForm />
          <h4>Uni-Credits/Gold</h4>
          <h5>Current Savings:</h5>
          <h3>{characterSheet[0]["inventory"]["money"]}</h3>
          <h5>Liquidated Savings:</h5>
          <h3>895 Gold</h3>
          <LiquidatedWealth />
        </div>

        {/****** BEGIN WEAPONS SECTION ******/}
        <div className="weapons bgb">
          <div className="heading-bar">
            <h2>Weapons</h2>
          </div>

          <NewWeaponForm />
          <CustomWeaponForm />
          <Weapons />
        </div>

        {/****** BEGIN ARMOUR SECTION ******/}
        <div className="armour bgb">
          <div className="heading-bar">
            <h2>Armour</h2>
          </div>

          <NewArmourForm />
          <CustomArmourForm />
          <Armour />
        </div>

        {/****** BEGIN ITEMS SECTION ******/}
        <div className="items bgb">
          <div className="heading-bar">
            <h2>Items</h2>
          </div>

          <NewItemForm />
          <CustomItemForm />
          <Items />
        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Inventory;
