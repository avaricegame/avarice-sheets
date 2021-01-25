import React from "react"

import MainHeader from "../../components/header/main-header.component"
import Footer from "../../components/footer/footer.component"

import "./page-not-found.styles.scss"

class PageNotFound extends React.Component {
  render() {
    return (
      <>
        <MainHeader />
        <div className="container">
          {/* <h1>Page not found</h1> */}
          <img
            className="page-not-found-image"
            src="https://i.imgur.com/A040Lxr.png"
            alt="not found"
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default PageNotFound
