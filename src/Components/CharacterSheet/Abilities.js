import React from "react"

function Abilities() {
  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Abilities</h1>
      </div>
      <div className="page-container">
        <div className="cw__75">
          <h2 className="heading">Abilities Tree</h2>
          <div className="cw__container">
            <p>
              <strong>How does the Abilities Tree work?</strong> <br />
              Each time you level up, you will be asked to choose one ability between three separate options. The choices will include new abilities as well as ability power-ups. Each ability can be leveled up to Power V.
            </p>
          </div>

          <h4 className="item-container__terheading">Options Upon Next Level Up</h4>
          <div className="cw__container cw__container--tree">
            <div className="cw__33">
              <div className="item-container">
                <h3 className="item-container__heading">Sound-off, Sound-on</h3>
                <h4 className="item-container__terheading">Power IV</h4>
                <p>
                  <strong>Details: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className="item-container">
                <h3 className="item-container__heading">Wilbo Wagons</h3>
                <h4 className="item-container__terheading">Power I</h4>
                <p>
                  <strong>Details: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="cw__33">
              <div className="item-container">
                <h3 className="item-container__heading">Hunky Monkey</h3>
                <h4 className="item-container__terheading">Power I</h4>
                <p>
                  <strong>Details: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="cw__33">
              <div className="item-container">
                <h3 className="item-container__heading">Chiminey Crickets</h3>
                <h4 className="item-container__terheading">Power II</h4>
                <p>
                  <strong>Details: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>

          <h4 className="item-container__subheading">Level 2</h4>
          <div className="cw__container cw__container--tree">
            <div className="cw__33">
              <div className="item-container">
                <h3 className="item-container__heading">Sound-off, Sound-on</h3>
                <h4 className="item-container__subheading">Power III</h4>
                <p>
                  <strong>Details: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="cw__33"></div>
            <div className="cw__33"></div>
          </div>

          <h4 className="item-container__subheading">Level 1</h4>
          <div className="cw__container cw__container--tree">
            <div className="cw__33">
              <div className="item-container">
                <h3 className="item-container__heading">Sound-off, Sound-on</h3>
                <h4 className="item-container__subheading">Power II</h4>
                <p>
                  <strong>Details: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="cw__33"></div>
            <div className="cw__33"></div>
          </div>
          <h4 className="item-container__subheading">Level 0</h4>
          <div className="cw__container cw__container--tree">
            <div className="cw__33">
              <div className="item-container">
                <h3 className="item-container__heading">Sound-off, Sound-on</h3>
                <h4 className="item-container__subheading">Power I</h4>
                <p>
                  <strong>Details: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="cw__33"></div>
            <div className="cw__33">
              <div className="item-container">
                <h3 className="item-container__heading">Chiminy Crickets</h3>
                <h4 className="item-container__subheading">Power I</h4>
                <p>
                  <strong>Details: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Your Abilities</h2>
          <div className="cw__container">
            <button>Create New Character Ability</button>
            <div className="item-container">
              <h3 className="item-container__heading">Sound-off, Sound-on</h3>
              <h4 className="item-container__subheading">Power III</h4>
              <p>
                <strong>Details: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Chiminey Crickets</h3>
              <h4 className="item-container__subheading">Power I</h4>
              <p>
                <strong>Details: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Abilities
