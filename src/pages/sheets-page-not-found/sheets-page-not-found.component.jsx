import React from "react"

import SheetsPageContainer from "../../components/sheets-page-container/sheets-page-container.component"
import SheetsHeading from "../../components/sheets-heading/sheets-heading.component"

import "./sheets-page-not-found.styles.scss"

class SheetsPageNotFound extends React.Component {
  componentDidMount() {
    document.title = `Page Not Found | Avarice Sheets`
  }
  render() {
    return (
      <>
        <SheetsHeading heading="Page Not Found" />
        <SheetsPageContainer>
          <img
            className="sheets-page-not-found-image"
            src="https://i.imgur.com/FOeYt4E.png"
            alt="not found"
          />
        </SheetsPageContainer>
      </>
    )
  }
}

export default SheetsPageNotFound
