import React from "react"

import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"

import "./messages.styles.scss"

class MessagesPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Under Construction" />
        <SheetsPageContainer>
          <img
            className="messages-page-under-construction-image"
            src="https://i.imgur.com/qIufhof.png"
            alt="not found"
          />
        </SheetsPageContainer>
      </>
    )
  }
}

export default MessagesPage
