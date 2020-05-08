import React, { Component } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Signedout from "./components/Signedout/Signedout";

import Gameplay from "./components/Gameplay/Gameplay";
import Inventory from "./components/Inventory/Inventory";
import Stats from "./components/Stats/Stats";
import Abilities from "./components/Abilities/Abilities";
import Info from "./components/Info/Info";
import Messages from "./components/Messages/Messages";
import Notes from "./components/Notes/Notes";

import Error from "./components/Error/Error";

import "./App.css";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: { 
    number: { 
      value: 150, 
      density: { 
        enable: true, 
        value_area: 1000, 
      } 
    }, 
  }, 
};

let characterSheet, weapons, armour, items, races, classes, customAbilities, spells, equipmentAbilities

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedin: false,
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:2890')
          .then(response => response.json())
          .then(response => {
characterSheet = response
console.log(characterSheet)
})
fetch('http://localhost:2890/weapons')
          .then(response => response.json())
          .then(response => {
weapons = response
console.log(weapons)
})
fetch('http://localhost:2890/armour')
          .then(response => response.json())
          .then(response => {
armour = response
console.log(armour)
})
fetch('http://localhost:2890/items')
          .then(response => response.json())
          .then(response => {
items = response
console.log(items)
})
fetch('http://localhost:2890/races')
          .then(response => response.json())
          .then(response => {
races = response
console.log(races)
})
fetch('http://localhost:2890/classes')
          .then(response => response.json())
          .then(response => {
classes = response
console.log(classes)
})
fetch('http://localhost:2890/spells')
          .then(response => response.json())
          .then(response => {
spells = response
console.log(spells, "logging from app js")
})
fetch('http://localhost:2890/customabilities')
          .then(response => response.json())
          .then(response => {
customAbilities = response
console.log(customAbilities)
})
fetch('http://localhost:2890/equipmentabilities')
          .then(response => response.json())
          .then(response => {
equipmentAbilities = response
console.log(equipmentAbilities)
})

      //.catch(err => console.log(err));
  }
  
  // onInputChange = (event) => {
  //   this.setState({ input: event.target.value });
  // }

  // onButtonSubmit = () => {
  //   this.setState({ imageUrl: this.state.input });
  //   app.models.predict(
  //     Clarifai.FACE_DETECT_MODEL,
  //     this.state.input)
  //     .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
  //     .catch(err => console.log(err));
  // }

  onRouteChange = (route) => {
    if (route === "signin" || route === "register") {
      this.setState({ isSignedin: false });
    } else {
      this.setState({ isSignedin: true });
    }

    this.setState({ route: route });
  };

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
          <Home onRouteChange={this.onRouteChange}/>;
        </React.Fragment>
      );
    }
    return (
      <div className="container">
        {/* <Particles className="particles" params={particlesOptions} /> */}
        <Header
          isSignedin={this.isSignedin}
          onRouteChange={this.onRouteChange}
          characterSheet={characterSheet}
        />
        <Navbar onRouteChange={this.onRouteChange} />
        {this.state.route === "gameplay" ? (
          <Gameplay characterSheet={characterSheet} races={races} classes={classes} armour={armour}/>
        ) : this.state.route === "inventory" ? (
          <Inventory characterSheet={characterSheet} weapons={weapons} armour={armour} items={items} equipmentAbilities={equipmentAbilities}/>
        ) : this.state.route === "stats" ? (
          <Stats characterSheet={characterSheet} races={races} classes={classes} armour={armour} />
        ) : this.state.route === "abilities" ? (
          <Abilities characterSheet={characterSheet} races={races} classes={classes} customAbilities={customAbilities} spells={spells} />
        ) : this.state.route === "info" ? (
          <Info characterSheet={characterSheet} characterSheet={characterSheet} races={races} classes={classes} />
        ) : this.state.route === "messages" ? (
          <Messages />
        ) : this.state.route === "notes" ? (
          <Notes  characterSheet={characterSheet}/>
        ) : (
          <Error />
        )}
        <Footer />
      </div>
    );
  }
}








export default App;




