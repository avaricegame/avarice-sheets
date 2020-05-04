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

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedin: false,
    };
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
          <Home onRouteChange={this.onRouteChange} />;
        </React.Fragment>
      );
    }
    return (
      <div className="container">
        {/* <Particles className="particles" params={particlesOptions} /> */}
        <Header
          isSignedin={this.isSignedin}
          onRouteChange={this.onRouteChange}
        />
        <Navbar onRouteChange={this.onRouteChange} />
        {this.state.route === "gameplay" ? (
          <Gameplay />
        ) : this.state.route === "inventory" ? (
          <Inventory />
        ) : this.state.route === "stats" ? (
          <Stats />
        ) : this.state.route === "abilities" ? (
          <Abilities />
        ) : this.state.route === "info" ? (
          <Info />
        ) : this.state.route === "messages" ? (
          <Messages />
        ) : this.state.route === "notes" ? (
          <Notes />
        ) : (
          <Error />
        )}
        <Footer />
      </div>
    );
  }
}








export default App;
