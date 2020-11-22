import React, { useContext } from "react"
import { Link } from "react-router-dom"
//import Axios from "axios"

// COMPONENTS
import Loader from "../Loader"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function Home(props) {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  let reversedCharacterSheetArray = appState.charSheetArray.map((charsheet) => charsheet).reverse()

  if (!appState.isLoading) {
    return (
      <>
        <div className="header-bar">
          <Link to="/profile">
            <div className="header-bar__profile-button">
              <img src="/assets/temp-user.jpg" alt="user" className="header-bar__profile-img" />
            </div>
          </Link>
        </div>
        <header className="header">
          <h1 className="header__logotype">Avarice Sheets</h1>
        </header>
        <div className="container">
          <div className="campaign-sheets">
            <h2 className="heading">Character Sheets</h2>
            <div className="sheets-container">
              <button
                className="button"
                onClick={() => {
                  appDispatch({ type: "showPopupForm" })
                  appDispatch({ type: "changePopupForm", data: "newCharacterSheet" })
                }}
              >
                Create a New Character Sheet
              </button>
              {reversedCharacterSheetArray.map((charSheet) => {
                return (
                  <Link to={`/character/${charSheet._id}/gameplay`} key={charSheet._id} className="fixing-link-settings">
                    <div className="item-container item-container--hover-highlight">
                      <h3 className="item-container__heading">{charSheet.characterName}</h3>
                      <h4 className="item-container__subheading">ID: #{charSheet._id}</h4>
                      <table>
                        <tbody>
                          <tr>
                            <td>Level:</td>
                            <td>{charSheet.level}</td>
                          </tr>
                          <tr>
                            <td>Race:</td>
                            <td>{charSheet.raceName}</td>
                          </tr>
                          <tr>
                            <td>Class:</td>
                            <td>{charSheet.className}</td>
                          </tr>
                          <tr>
                            <td>Campaign ID:</td>
                            <td>
                              <em>{charSheet.campaignID}</em>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="character-sheets">
            <h2 className="heading">Campaign Sheets</h2>
            <div className="sheets-container">
              <button
                className="button"
                onClick={() => {
                  appDispatch({ type: "showPopupForm" })
                  appDispatch({ type: "changePopupForm", data: "newCampaignSheet" })
                }}
              >
                Create a New Campaign
              </button>

              <Link to="/campaign/gameplay" className="fixing-link-settings">
                <div className="item-container item-container--hover-highlight">
                  <h3 className="item-container__heading">Campaign Name</h3>
                  <h4 className="item-container__subheading item-container__subheading--blue">campid: #exampleid</h4>
                  <table>
                    <tbody>
                      <tr>
                        <td>Players:</td>
                        <td>Player 1, Player 2, Player 3</td>
                      </tr>
                      <tr>
                        <td>Characters:</td>
                        <td>Character 1, Character 2, Character 3</td>
                      </tr>
                      <tr>
                        <td>Missions Served:</td>
                        <td>#</td>
                      </tr>
                      <tr>
                        <td>Current Mission:</td>
                        <td>
                          <em>"Mission Name"</em>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <footer className="footer">
          <p className="footer__text">
            &copy; 2020 by Avarice. All rights reserved. Application built by{" "}
            <a href="https://talonmd.github.io/talondurrant/" target="_blank" rel="noopener noreferrer">
              Talon Durrant
            </a>
          </p>
        </footer>
      </>
    )
  } else {
    return <Loader />
  }
}

export default Home
