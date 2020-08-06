import React from "react"
import { Link } from "react-router-dom"

function Home(props) {
  return (
    <>
      <div className="header-bar">
        <Link to="/profile/:username">
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
            <button>Create a New Character Sheet</button>
            {props.characterSheetArray.map((cs) => {
              return (
                <Link to={`/character/${cs.charid}/gameplay`} key={cs.charid} className="fixing-link-settings">
                  <div className="item-container item-container--hover-highlight">
                    <h3 className="item-container__heading">{cs.characterName}</h3>
                    <h4 className="item-container__subheading">charid: {cs.charid}</h4>
                    <table>
                      <tbody>
                        <tr>
                          <td>Level:</td>
                          <td>{cs.level}</td>
                        </tr>
                        <tr>
                          <td>Race:</td>
                          <td>{cs.raceName}</td>
                        </tr>
                        <tr>
                          <td>Class:</td>
                          <td>{cs.className}</td>
                        </tr>
                        <tr>
                          <td>Campaign ID:</td>
                          <td>
                            <em>{cs.campaignID}</em>
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
            <button>Create a New Campaign</button>

            <Link to="/campaign/123/gameplay" className="fixing-link-settings">
              <div className="item-container item-container--hover-highlight">
                <h3 className="item-container__heading">Welcoming Treaties</h3>
                <h4 className="item-container__subheading item-container__subheading--blue">campid: #123abc</h4>
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
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Current Mission:</td>
                      <td>
                        <em>"Finding Friends"</em>
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
}

export default Home
