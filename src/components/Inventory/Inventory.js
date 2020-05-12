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
import Money from "./Maps/Money"

// BEGIN CLASS

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weapons: "",
      armour: "",
      items: "",
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:2890/weapons")
      .then((response) => response.json())
      .then((response) => {
        this.setState({weapons: response})
      });
    fetch("http://localhost:2890/armour")
      .then((response) => response.json())
      .then((response) => {
        this.setState({armour: response})
      });
    fetch("http://localhost:2890/items")
      .then((response) => response.json())
      .then((response) => {
        this.setState({items: response})
      });
  }

  render() {
    const {
      weapons,
      armour,
      items,
    } = this.state;
    let {
      characterSheet,
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

          <p>The equip and unequip functionality is currently under construction, but will be available soon!</p>
          
        </div>

        {/****** BEGIN MONEY SECTION ******/}
        <div className="money bgb">
          <div className="heading-bar">
            <h2>Money</h2>
          </div>

          <AddSubtractMoneyForm characterSheet={characterSheet} />
          <Money characterSheet={characterSheet} />
          <LiquidatedWealth characterSheet={characterSheet} />
        </div>

        {/****** BEGIN WEAPONS SECTION ******/}
        <div className="weapons bgb">
          <div className="heading-bar">
            <h2>Weapons</h2>
          </div>

          <NewWeaponForm characterSheet={characterSheet} weapons={weapons} />
          <CustomWeaponForm characterSheet={characterSheet} />
          <Weapons characterSheet={characterSheet} />
        </div>

        {/****** BEGIN ARMOUR SECTION ******/}
        <div className="armour bgb">
          <div className="heading-bar">
            <h2>Armour</h2>
          </div>

          <NewArmourForm characterSheet={characterSheet} armour={armour} />
          <CustomArmourForm characterSheet={characterSheet} />
          <Armour characterSheet={characterSheet} />
        </div>

        {/****** BEGIN ITEMS SECTION ******/}
        <div className="items bgb">
          <div className="heading-bar">
            <h2>Items</h2>
          </div>

          <NewItemForm characterSheet={characterSheet} items={items} />
          <CustomItemForm characterSheet={characterSheet} />
          <Items characterSheet={characterSheet} />
        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Inventory;
