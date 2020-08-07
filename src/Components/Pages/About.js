import React from "react"
import { Link } from "react-router-dom"

function About() {
  return (
    <div className="hg__body">
      <div className="header-bar">
        <Link to="/">
          <div className="header-bar__about-button">
            <span className="header-bar__about-img">?</span>
          </div>
        </Link>
      </div>
      <header className="header">
        <h1 className="header__logotype">Avarice Sheets</h1>
      </header>
      <main>
        <div className="hg__container">
          <div className="hg__content hg__content--100">
            <Link to="/" style={{ textDecoration: "none", marginTop: "1rem" }}>
              &larr; BACK TO HOME
            </Link>
            <hr className="hg__hr" />
            <h2 className="hg__heading hg__heading--bmargin">About Avarice Sheets</h2>

            <h3>What is Avarice Sheets?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>How do I get started?</h3>
            <p>Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>How can I contact you?</h3>
            <p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>Lorem ipsum dolor sit amet?</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
            <h3>Duis aute irure dolor in reprehenderit?</h3>
            <p>Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
            <hr className="hg__hr" />
            <p>
              To learn more about Avarice, visit{" "}
              <a href="https://talonmd.github.io/pax-templates/" rel="noopener noreferrer" target="_blank">
                our official website.
              </a>
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p className="footer__text">
          &copy; 2020 by Avarice. All rights reserved. Application built by{" "}
          <a href="https://talonmd.github.io/talondurrant/" target="_blank" rel="noopener noreferrer">
            Talon Durrant
          </a>
        </p>
      </footer>
    </div>
  )
}

export default About
