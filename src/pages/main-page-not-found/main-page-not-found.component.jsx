import React from "react"
import { Link } from "react-router-dom"

import MainHeader from "../../components/headers/main-header.component"
import Footer from "../../components/footer/footer.component"

import "./main-page-not-found.styles.scss"

class PageNotFound extends React.Component {
  componentDidMount() {
    document.title = `Page Not Found | Avarice Sheets`
  }

  render() {
    return (
      <>
        <MainHeader />
        <div className="container">
          {/* <h1>Page not found</h1> */}
          <Link to="/" className="main-page-not-found-link">
            <img
              className="main-page-not-found-image"
              src="https://i.imgur.com/A040Lxr.png"
              alt="not found"
            />
          </Link>
        </div>
        <Footer />
      </>
    )
  }
}

export default PageNotFound
