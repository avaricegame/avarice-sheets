// PACKAGES
import React, { useEffect, useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import Axios from "axios"

// CSS
import "./App.scss"

// CONTEXT
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

// COMPONENTS
import Home from "./Components/Pages/Home"
import HomeGuest from "./Components/Pages/HomeGuest"
import CharacterSheet from "./Components/Pages/CharacterSheet"
import CampaignSheet from "./Components/Pages/CampaignSheet"
import Profile from "./Components/Pages/Profile"
import About from "./Components/Pages/About"
import Loader from "./Components/Loader"
import PopupForm from "./Components/PopupForm"
import FlashMessage from "./Components/FlashMessage"

Axios.defaults.baseURL = "http://localhost:2890"
//Axios.defaults.baseURL = "https://backendforpaxgameplay.herokuapp.com"

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("avariceApiToken")),
    flashMessages: [],
    flashMessagesDisplayed: false,
    user: {
      token: localStorage.getItem("avariceApiToken"),
      username: localStorage.getItem("avariceUsername"),
    },
    currentPopupForm: "",
    popupFormVisible: false,
    charSheetID: localStorage.getItem("charSheetID"),
    charSheetArray: [],
  }

  function appReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        break
      case "logout":
        draft.loggedIn = false
        break
      case "register":
        draft.loggedIn = true
        draft.user = action.data
        break
      case "flashMessage":
        draft.flashMessages.push(action.value)
        break
      case "changePopupForm":
        draft.currentPopupForm = action.data
        break
      case "showPopupForm":
        draft.popupFormVisible = true
        break
      case "hidePopupForm":
        draft.popupFormVisible = false
        break
      case "displayFlashMessage":
        draft.flashMessagesDisplayed = true
        break
      case "setCharSheetID":
        draft.charSheetID = action.value
        localStorage.removeItem("charSheetID")
        localStorage.setItem("charSheetID", action.value)
        break
      case "setCharSheetArray":
        draft.charSheetArray = action.data
        break
      default:
        break
    }
  }

  const [state, dispatch] = useImmerReducer(appReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("avariceApiToken", state.user.token)
      localStorage.setItem("avariceUsername", state.user.username)
    } else {
      localStorage.removeItem("avariceApiToken")
      localStorage.removeItem("avariceUsername")
      localStorage.removeItem("charSheetID")
    }
  }, [state.loggedIn, state.user.token, state.user.username])

  // make sure the app loads while pulling up the character sheet array
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (state.loggedIn) {
      // make the call to grab ALL the charsheets for the current user
      Axios.post(`/character/all`, {
        token: state.user.token,
        username: state.user.username,
      })
        .then(function (response) {
          console.log(response)
          // dispatch to set the array of charsheetes
          dispatch({
            type: "setCharSheetArray",
            data: response.data,
          })
          setIsLoading(false)
        })
        .catch(function (e) {
          console.log(e)
        })
    }
  }, [state.loggedIn, dispatch, state.user.token, state.user.username])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {state.loggedIn ? <Home isLoading={isLoading} /> : <HomeGuest />}
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/character">
              <CharacterSheet />
            </Route>
            <Route path="/campaign">
              <CampaignSheet />
            </Route>
          </Switch>
          {state.popupFormVisible ? <PopupForm /> : ""}
          {state.flashMessagesDisplayed ? <FlashMessage /> : ""}
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
