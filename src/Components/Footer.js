import React from "react"

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        <a href="/about">About</a>
        {"   "}|{"   "}
        <a href="/terms">Terms</a>
        {"   "}|{"   "}
        <a href="/privacy">Privacy</a>
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
