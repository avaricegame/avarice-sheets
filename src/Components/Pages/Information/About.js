import React from "react"
import { Link } from "react-router-dom"
import Footer from "../../Footer"

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

            <hr className="hg__hr" />
            <span>
              To learn more about Avarice, visit{" "}
              <a href="https://avarice-website.netlify.app/" rel="noopener noreferrer" target="_blank">
                our official website.
              </a>
            </span>
            <hr className="hg__hr" />
            <span>
              To learn more about Solidity Games, visit{" "}
              <a href="https://avarice-website.netlify.app/" rel="noopener noreferrer" target="_blank">
                our official website.
              </a>
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About
