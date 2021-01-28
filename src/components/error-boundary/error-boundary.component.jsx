import React from "react"

import MainHeader from "../headers/main-header.component"
import Footer from "../footer/footer.component"

import { ErrorImageDiv, ErrorImageContainer, ErrorImageText } from "./error-boundary.styles"

class ErrorBoundary extends React.Component {
  constructor() {
    super()

    this.state = {
      hasErrored: false,
    }
  }
  static getDerivedStateFromError(error) {
    // process the error
    return {
      hasErrored: true,
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <>
          <MainHeader />
          <ErrorImageDiv>
            <ErrorImageContainer imageUrl="https://i.imgur.com/g3hgqe8.png" />
            <ErrorImageText>
              This page doesn't seem to
              <br /> be working right now
            </ErrorImageText>
          </ErrorImageDiv>
          <Footer />
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
