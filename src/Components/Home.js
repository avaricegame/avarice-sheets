import React, { useEffect } from "react"

function Home() {
  return (
    <>
      <div className="header-bar">
        <div className="header-bar__profile-button">
          <img src="/temp-user.jpg" alt="user profile photo" className="header-bar__profile-img" />
        </div>
      </div>
      <header className="header">
        <h1 className="header__logotype">Avarice Sheets</h1>
      </header>
      <div className="container">
        <div className="campaign-sheets">
          <h2 className="heading">Character Sheets</h2>
          <div className="sheets-container">
            <button>Create a New Character Sheet</button>
            <div className="item-container">
              <h3 className="item-container__heading">William Wendford</h3>
              <h4 className="item-container__subheading">charid: #123abc</h4>
              <table>
                <tr>
                  <td>Level:</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Race:</td>
                  <td>Bruttu</td>
                </tr>
                <tr>
                  <td>Class:</td>
                  <td>Apa</td>
                </tr>
                <tr>
                  <td>Campaign:</td>
                  <td>
                    <em>"Welcoming Treaties"</em>
                  </td>
                </tr>
              </table>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Todd Bendy</h3>
              <h4 className="item-container__subheading">charid: #123abc</h4>
              <table>
                <tr>
                  <td>Level:</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Race:</td>
                  <td>Bruttu</td>
                </tr>
                <tr>
                  <td>Class:</td>
                  <td>Apa</td>
                </tr>
                <tr>
                  <td>Campaign:</td>
                  <td>
                    <em>"Welcoming Treaties"</em>
                  </td>
                </tr>
              </table>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Grape Muethers</h3>
              <h4 className="item-container__subheading">charid: #123abc</h4>
              <table>
                <tr>
                  <td>Level:</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Race:</td>
                  <td>Bruttu</td>
                </tr>
                <tr>
                  <td>Class:</td>
                  <td>Apa</td>
                </tr>
                <tr>
                  <td>Campaign:</td>
                  <td>
                    <em>"Welcoming Treaties"</em>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="character-sheets">
          <h2 className="heading">Campaign Sheets</h2>
          <div className="sheets-container">
            <button>Create a New Campaign</button>
            <div className="item-container">
              <h3 className="item-container__heading">Welcoming Treaties</h3>
              <h4 className="item-container__subheading">campid: #123abc</h4>
              <table>
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
              </table>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Hungry Hippoes</h3>
              <h4 className="item-container__subheading">campid: #123abc</h4>
              <table>
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
              </table>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Capsizing Monkeys</h3>
              <h4 className="item-container__subheading">campid: #123abc</h4>
              <table>
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
              </table>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="footer__text">
          &copy; 2020 by Avarice. All rights reserved. Application built by <a href="#">Talon Durrant</a>
        </p>
      </footer>
    </>
  )
}

export default Home
