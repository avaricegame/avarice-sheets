import React, { Component } from "react";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Navbar from "./components/Navbar/Navbar";

// import Signin from './components/Signin/Signin';
// import Register from './components/Register/Register';

import Gameplay from "./components/Gameplay/Gameplay";
import Inventory from "./components/Inventory/Inventory";
import Stats from "./components/Stats/Stats";
import Abilities from "./components/Abilities/Abilities";
import Info from "./components/Info/Info";
import Messages from "./components/Messages/Messages";
import Notes from "./components/Notes/Notes";

import Footer from "./components/Footer/Footer";

import "./App.css";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     route: 'signin',
  //     isSignedin: false
  //   }

  // }

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

  // onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     this.setState({isSignedin: false})
  //   } else if (route === 'home') {
  //     this.setState({isSignedin: true})
  //   }

  //   this.setState({route: route});
  // }

  render() {
    return (
      <div className="container">
        <Header />
        <Navbar />
      <Gameplay />
      <Footer />
      </div>
    );
  }
}

export default App;
