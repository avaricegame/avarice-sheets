import React, { Component } from "react";

// IMPORT THE LAYOUT COMPONENTS
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// IMPORT USER FEATURES COMPONENTS
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
//import Signedout from "./components/Signedout/Signedout";

// IMPORT THE MAIN PAGES
import Gameplay from "./components/Gameplay/Gameplay";
import Inventory from "./components/Inventory/Inventory";
import Stats from "./components/Stats/Stats";
import Abilities from "./components/Abilities/Abilities";
import Info from "./components/Info/Info";
import Messages from "./components/Messages/Messages";
import Notes from "./components/Notes/Notes";

// IMPORT STYLING FEATURES
import "./App.css";
import Particles from "react-particles-js";
import uniqid from "uniqid";

// IMPORT OTHER COMPONENTS
import Error from "./components/Error/Error";

// BEGIN FILE
const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
  },
};

let characterSheet,
  weapons,
  armour,
  items,
  races,
  classes,
  customAbilities,
  spells,
  equipmentAbilities,
  money;

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedin: false,
      characterSheet: [],
      weapons: [],
      armour: [],
      items: [],
      customAbilities: [],
      stats: [],
      money: 0,
      phyTotal: 0,
      refTotal: 0,
      intTotal: 0,
      chaTotal: 0,
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:2890")
      .then((response) => response.json())
      .then((response) => {
        characterSheet = response[0];
        this.setState({ characterSheet: characterSheet });
        console.log(characterSheet, "CHARACTER SHEET LOGGED HERE");

        money = response[0].inventory.money
        this.setState({ money: money });
        console.log(money, "MONEY IS LOGGED HERE")

        customAbilities = response[0].customCharacterAbilities;
        this.setState({ customAbilities: customAbilities });
        console.log(customAbilities, "CUSTOM ABILITIES LOGGED HERE");

        weapons = response[0].inventory.weapons;
        weapons.push(...response[0].inventory.customWeapons);
        this.setState({ weapons: weapons });
        console.log(weapons, "WEAPONS LOGGED HERE");

        armour = response[0].inventory.armour;
        armour.push(...response[0].inventory.customArmour);
        this.setState({ armour: armour });
        console.log(armour, "ARMOUR LOGGED HERE");

        items = response[0].inventory.items;
        items.push(...response[0].inventory.customItems);
        this.setState({ items: items });
        console.log(items, "ITEMS LOGGED HERE");
      });

    fetch("http://localhost:2890/races")
      .then((response) => response.json())
      .then((response) => {
        races = response;
        console.log(races, "RACES ARRAY LOGGED HERE");
      });
    fetch("http://localhost:2890/classes")
      .then((response) => response.json())
      .then((response) => {
        classes = response;
        console.log(classes, "CLASSES ARRAY LOGGED HERE");
      });
    fetch("http://localhost:2890/spells")
      .then((response) => response.json())
      .then((response) => {
        spells = response;
        console.log(spells, "SPELLS ARRAY LOGGED HERE");
      });

    fetch("http://localhost:2890/equipmentabilities")
      .then((response) => response.json())
      .then((response) => {
        equipmentAbilities = response;
        console.log(
          equipmentAbilities,
          "EQUIPMENT ABILITIES ARRAY LOGGED HERE"
        );
      });
  }; // END COMPONENT DID MOUNT

  onRouteChange = (route) => {
    if (route === "signin" || route === "register") {
      this.setState({ isSignedin: false });
    } else {
      this.setState({ isSignedin: true });
    }

    this.setState({ route: route });
  }; // END ON ROUTE CHANGE

  // ADDING NEW ARRAY ITEM TO VARYING ARRAYS
  addCustomAbility = (name, description, published) => {
    const newAbility = {
      id: uniqid(),
      level: 1,
      name: name,
      description: description,
      published: published,
    };
    this.setState({
      customAbilities: [newAbility, ...this.state.customAbilities],
    });
    console.log(newAbility.id);
  };

  addWeapon = (
    weaponName,
    rangedMelee,
    imageurl,
    range,
    proficiency,
    weaponType,
    requirements,
    abilityBonus,
    damage,
    uses,
    critical,
    magicalAbilities,
    description,
    published,
    createdBy
  ) => {
    const newWeapon = {
      id: uniqid(),
      name: weaponName,
      rangedMelee,
      imageurl,
      range,
      proficiency,
      weaponType,
      requirements: "None",
      abilityBonus,
      damage,
      uses,
      critical,
      magicalAbilities: "coming soon...",
      description,
      published,
      createdBy,
      published: published,
    };
    this.setState({ weapons: [newWeapon, ...this.state.weapons] });
    console.log(newWeapon.id);
  };

  addArmour = (
    name,
    bodyArea,
    requirements,
    hp,
    speed,
    strength,
    dexterityReflex,
    constitutionFortitude,
    intelligence,
    charisma,
    perception,
    stealth,
    rangedAccuracy,
    meleeAccuracy,
    magicalAbilities,
    description,
    createdBy,
    published,
    imageurl
  ) => {
    const newArmour = {
      id: uniqid(),
      name,
      bodyArea,
      requirements,
      modifiers: {
        hp,
        speed,
        strength,
        dexterityReflex,
        constitutionFortitude,
        intelligence,
        charisma,
        perception,
        stealth,
        rangedAccuracy,
        meleeAccuracy,
      },
      magicalAbilities: "coming soon...",
      description,
      createdBy,
      published,
      imageurl,
    };
    this.setState({ armour: [newArmour, ...this.state.armour] });
    console.log(newArmour.id);
  };

  addItem = (
    itemName,
    published,
    imageurl,
    itemDescription,
    createdBy,
    ) => {
    const newItem = {
      id: uniqid(),
      itemName,
      published,
      imageurl,
      itemDescription,
      createdBy,
    };
    this.setState({
      items: [newItem, ...this.state.items],
    });
    console.log(newItem.id);
  };

  // DELETING THE VARYING ITEMS THAT CAN BE DELETED
  deleteCustomAbility = (id) => {
    console.log(id);
    this.setState({
      customAbilities: [
        ...this.state.customAbilities.filter(
          (customAbility) => customAbility.id !== id
        ),
      ],
    });
    console.log("Deleted!!", this.state.customAbilities);
  };

  deleteWeapon = (id) => {
    console.log(id);
    this.setState({
      weapons: [...this.state.weapons.filter((weapon) => weapon.id !== id)],
    });
    console.log("Deleted!!", this.state.weapons);
  };

  deleteArmour = (id) => {
    console.log(id);
    this.setState({
      armour: [...this.state.armour.filter((armour) => armour.id !== id)],
    });
    console.log("Deleted!!", this.state.armour);
  };

  deleteItem = (id) => {
    console.log(id);
    this.setState({
      items: [...this.state.items.filter((item) => item.id !== id)],
    });
    console.log("Deleted!!", this.state.items);
  };

// EDITING THE AMOUNT OF MONEY
editMoney = ( x ) => {
  console.log(x, "THIS IS X FROM APP")
  this.setState(Object.assign(this.state.money, { money: x }))
};

// CALCULATING THE COMBINED STATS OF ALL THE WEAPONS


// CALCULATING THE ABILITY SCORE TOTALS
calculatePhyTotal = ( x ) => {
  this.setState(Object.assign(this.state.phyTotal, { phyTotal: x }))
}

calculateRefTotal = ( x ) => {
  this.setState(Object.assign(this.state.refTotal, { refTotal: x }))
}

calculateIntTotal = ( x ) => {
  this.setState(Object.assign(this.state.intTotal, { intTotal: x }))
}

calculateChaTotal = ( x ) => {
  this.setState(Object.assign(this.state.chaTotal, { chaTotal: x }))
}

  render() {
    if (this.state.route === "signin") {
      return (
        <React.Fragment>
          <Particles className="particles" params={particlesOptions} />
          <Signin onRouteChange={this.onRouteChange} />
        </React.Fragment>
      );
    } else if (this.state.route === "register") {
      return (
        <React.Fragment>
          <Particles className="particles" params={particlesOptions} />
          <Register onRouteChange={this.onRouteChange} />;
        </React.Fragment>
      );
    } else if (this.state.route === "signedout") {
      return (
        <React.Fragment>
          <Particles className="particles" params={particlesOptions} />
          <Signin onRouteChange={this.onRouteChange} />
        </React.Fragment>
      );
    } else if (this.state.route === "home") {
      return (
        <React.Fragment>
          <Particles className="particles" params={particlesOptions} />
          <Home onRouteChange={this.onRouteChange} />;
        </React.Fragment>
      );
    }
    return (
      <div className="container">
        <Header
          isSignedin={this.isSignedin}
          onRouteChange={this.onRouteChange}
          characterSheet={characterSheet}
        />
        <Navbar onRouteChange={this.onRouteChange} />

        {this.state.route === "gameplay" ? (
          <Gameplay
            characterSheet={this.state.characterSheet}
            races={races}
            classes={classes}
            armour={armour}
          />
        ) : this.state.route === "inventory" ? (
          <Inventory
            characterSheet={this.state.characterSheet}
            money={this.state.money}
            editMoney={this.editMoney}
            weapons={this.state.weapons}
            armour={this.state.armour}
            items={this.state.items}
            equipmentAbilities={equipmentAbilities}
            addWeapon={this.addWeapon}
            addArmour={this.addArmour}
            addItem={this.addItem}
            deleteArmour={this.deleteArmour}
            deleteWeapon={this.deleteWeapon}
            deleteItem={this.deleteItem}
          />
        ) : this.state.route === "stats" ? (
          <Stats
            characterSheet={this.state.characterSheet}
            races={races}
            classes={classes}
            armour={armour}
            phyTotal={this.state.phyTotal}
            refTotal={this.state.refTotal}
            intTotal={this.state.intTotal}
            chaTotal={this.state.chaTotal}
            calculatePhyTotal={this.calculatePhyTotal}
            calculateRefTotal={this.calculateRefTotal}
            calculateIntTotal={this.calculateIntTotal}
            calculateChaTotal={this.calculateChaTotal}
          />
        ) : this.state.route === "abilities" ? (
          <Abilities
            characterSheet={this.state.characterSheet}
            races={races}
            classes={classes}
            customAbilities={this.state.customAbilities}
            spells={spells}
            deleteCustomAbility={this.deleteCustomAbility}
            addCustomAbility={this.addCustomAbility}
          />
        ) : this.state.route === "info" ? (
          <Info
            characterSheet={this.state.characterSheet}
            races={races}
            classes={classes}
          />
        ) : this.state.route === "messages" ? (
          <Messages />
        ) : this.state.route === "notes" ? (
          <Notes characterSheet={this.state.characterSheet} />
        ) : (
          <Error />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
