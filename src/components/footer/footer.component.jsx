import React from "react"

import "./footer.styles.scss"

const Footer = () => (
  <footer className="footer">
    <p>
      <a href="/about">About</a>
      {"   "}|{"   "}
      <a href="/terms">Terms</a>
      {"   "}|{"   "}
      <a href="/privacy">Privacy</a>
    </p>
    <p>
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

export default Footer
