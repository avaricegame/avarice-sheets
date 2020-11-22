import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        <Link to="/about">About</Link>
        {"   "}|{"   "}
        <Link to="/terms">Terms</Link>
        {"   "}|{"   "}
        <Link to="/privacy">Privacy</Link>
      </p>
      <p className="footer__text">
        &copy; {new Date().getFullYear()} by{" "}
        <a href="https://avarice-website.netlify.app/" rel="noopener noreferrer" target="_blank">
          Avarice
        </a>
        . All rights reserved. Application built by{" "}
        <a href="https://www.talondurrant.com/" target="_blank" rel="noopener noreferrer">
          Talon Durrant
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
