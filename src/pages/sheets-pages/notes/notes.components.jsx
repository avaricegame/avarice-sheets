import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Button } from "../../../components/custom-button/custom-button.component"

import "./notes.styles.scss"

class NotesPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Notes" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Your Notes">
              <Button>Create a New Note</Button>
              <div className="note-excerpt note-excerpt--active">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
              </div>
              <div className="note-excerpt">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
              </div>
              <div className="note-excerpt">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
              </div>
            </Section>
          </Column>

          <Column width={75}>
            <Section heading="Note Content">
              <p className="editable-note-content" contentEditable>
                Click anywhere in the box and begin typing to write your note...
              </p>
              <Button formButton>Save Note</Button>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default NotesPage
