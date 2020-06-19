import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"
import "./App.css"

import uniqid from "uniqid"

// my components
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Signin from "./components/Signin/Signin"
import Register from "./components/Register/Register"
import Error from "./components/Error/Error"

Axios.defaults.baseURL = process.env.BACKENDURL || "https://backendforpaxgameplay.herokuapp.com"

function App() {
  const initialState = {}

  function ourReducer(draft, action) {
    switch (action.type) {
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
