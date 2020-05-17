import React from "react";

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
      weaponsCannon: [],
      armourCannon: [],
      itemsCannon: [],
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
      weaponsCannon,
      armourCannon,
      itemsCannon,
    } = this.state;
    let {
      characterSheet,
      weapons,
      armour,
      items,
      deleteWeapon,
      deleteItem,
      deleteArmour,
      addWeapon,
      addArmour,
      addItem,
      money,
      editMoney,
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

          <AddSubtractMoneyForm characterSheet={characterSheet} money={money} editMoney={editMoney} />
          <Money characterSheet={characterSheet} money={money} />
          {/* <LiquidatedWealth characterSheet={characterSheet} /> */}
        </div>

        {/****** BEGIN WEAPONS SECTION ******/}
        <div className="weapons bgb">
          <div className="heading-bar">
            <h2>Weapons</h2>
          </div>

          <NewWeaponForm characterSheet={characterSheet} weaponsCannon={weaponsCannon} />
          <CustomWeaponForm characterSheet={characterSheet} addWeapon={addWeapon} />
          <Weapons characterSheet={characterSheet} weapons={weapons} deleteWeapon={deleteWeapon} />
        </div>

        {/****** BEGIN ARMOUR SECTION ******/}
        <div className="armour bgb">
          <div className="heading-bar">
            <h2>Armour</h2>
          </div>

          <NewArmourForm characterSheet={characterSheet} armourCannon={armourCannon} />
          <CustomArmourForm characterSheet={characterSheet} addArmour={addArmour} />
          <Armour characterSheet={characterSheet} armour={armour} deleteArmour={deleteArmour} />
        </div>

        {/****** BEGIN ITEMS SECTION ******/}
        <div className="items bgb">
          <div className="heading-bar">
            <h2>Items</h2>
          </div>

          <NewItemForm characterSheet={characterSheet} itemsCannon={itemsCannon} />
          <CustomItemForm characterSheet={characterSheet} addItem={addItem} />
          <Items characterSheet={characterSheet} items={items} deleteItem={deleteItem} />
        </div>
      </React.Fragment>
    ); // END RETURN
  } // END RENDER
} // END CLASS

export default Inventory;
