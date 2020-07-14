import React from "react"

function Header() {
  return (
    <>
      <div className="header-bar">
        <div className="header-bar__profile-button header-bar__profile-button--static">
          <img src="/assets/temp-user.jpg" alt="user" className="header-bar__profile-img" />
        </div>
      </div>
      <header className="header">
        <h1 className="header__logotype">Wayne Bradford</h1>
      </header>
    </>
  )
}

export default Header
