import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Axios from "axios"
import "./App.scss"

//import uniqid from "uniqid"

// COMPONENTS
import Home from "./Components/Pages/Home"
//import HomeGuest from "./Components/Pages/HomeGuest"
import Profile from "./Components/Pages/Profile"
import CharacterSheet from "./Components/Pages/CharacterSheet"
import CampaignSheet from "./Components/Pages/CampaignSheet"

Axios.defaults.baseURL = process.env.BACKENDURL || "https://backendforpaxgameplay.herokuapp.com"
// "http://localhost:2890"

function App() {
  let UID = 1
  let CSID = "146"

  const [characterSheetArray, setCharacterSheetArray] = useState([])

  useEffect(() => {
    async function fetchCS() {
      // get all of the character sheets that match the current user id
      const corrSheet = await Axios.get("/loadmanycs", {
        params: {
          UID: UID,
        },
      })
      setCharacterSheetArray(corrSheet.data)
    }
    fetchCS()
  }, [UID])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home UID={UID} characterSheetArray={characterSheetArray} />
          {/* <HomeGuest /> */}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/character/:id/">
          <CharacterSheet CSID={CSID} characterSheetArray={characterSheetArray} />
        </Route>
        <Route path="/campaign/:id/">
          <CampaignSheet />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
