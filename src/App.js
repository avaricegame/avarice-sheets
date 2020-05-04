import React, { Component } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Signedout from './components/Signedout/Signedout';

import Gameplay from "./components/Gameplay/Gameplay";
import Inventory from "./components/Inventory/Inventory";
import Stats from "./components/Stats/Stats";
import Abilities from "./components/Abilities/Abilities";
import Info from "./components/Info/Info";
import Messages from "./components/Messages/Messages";
import Notes from "./components/Notes/Notes";

import Error from "./components/Error/Error";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedin: false
    }
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
    if (route === 'signin' || route === 'register') {
      this.setState({isSignedin: false})
    } else {
      this.setState({isSignedin: true})
    }

    this.setState({route: route});
  }

  render() {
    if (this.state.route === 'signin') {
      return <Signin onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'register') {
      return <Register onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'signedout') {
      return <Signedout onRouteChange={this.onRouteChange}  />
    } else if (this.state.route === 'home') {
      return (
        <div className="container">
          <Header  isSignedin={this.isSignedin} onRouteChange={this.onRouteChange} />
          <Home onRouteChange={this.onRouteChange} />
        </div>
      )
    }
    return (
      <div className="container">
        <Header  isSignedin={this.isSignedin} onRouteChange={this.onRouteChange} />
        <Navbar onRouteChange={this.onRouteChange} />
       {
       this.state.route === 'gameplay'
       ? <Gameplay />
       : this.state.route === 'inventory' ? <Inventory />
       : this.state.route === 'stats' ? <Stats />
       : this.state.route === 'abilities' ? <Abilities />
       : this.state.route === 'info' ? <Info />
       : this.state.route === 'messages' ? <Messages />
       : this.state.route === 'notes' ? <Notes />
       : <Error />
      }
      <Footer />
      </div>
    );
  }
}

export default App;
