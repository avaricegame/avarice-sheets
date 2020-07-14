import React, { useEffect } from "react"

// import CustomWeaponForm from "../../../Forms/CustomWeaponForm"
// import CustomItemForm from "../../../Forms/CustomItemForm"
// import CustomArmourForm from "../../../Forms/CustomArmourForm"
// import NewWeaponForm from "../../../Forms/NewWeaponForm"
// import NewItemForm from "../../../Forms/NewItemForm"
// import NewArmourForm from "../../../Forms/NewArmourForm"
// import AddSubtractMoneyForm from "../../../Forms/AddSubtractMoneyForm"

// // IMPORT ALL OF THE MAPPING COMPONENTS
// import LiquidatedWealth from "./Maps/LiquidatedWealth"
// import Weapons from "./Maps/Weapons"
// import Armour from "./Maps/Armour"
// import Items from "./Maps/Items"
// import Money from "./Maps/Money"

function Inventory() {
  return (
    <>
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

        {/* <AddSubtractMoneyForm />
        <Money /> */}
        {/* <LiquidatedWealth characterSheet={characterSheet} /> */}
      </div>

      {/****** BEGIN WEAPONS SECTION ******/}
      <div className="weapons bgb">
        <div className="heading-bar">
          <h2>Weapons</h2>
        </div>

        {/* <NewWeaponForm />
        <CustomWeaponForm />
        <Weapons /> */}
      </div>

      {/****** BEGIN ARMOUR SECTION ******/}
      <div className="armour bgb">
        <div className="heading-bar">
          <h2>Armour</h2>
        </div>

        {/* <NewArmourForm />
        <CustomArmourForm />
        <Armour /> */}
      </div>

      {/****** BEGIN ITEMS SECTION ******/}
      <div className="items bgb">
        <div className="heading-bar">
          <h2>Items</h2>
        </div>

        {/* <NewItemForm />
        <CustomItemForm />
        <Items /> */}
      </div>
    </>
  )
}

export default Inventory
