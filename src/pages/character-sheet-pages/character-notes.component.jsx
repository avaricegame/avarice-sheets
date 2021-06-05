import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import SheetsHeading from "../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Button } from "../../components/custom-button/custom-button.component"

import {
  selectCharacterName,
  selectNotes,
} from "../../redux/character-sheet/character-sheet.selectors"

import "../sheets-pages/notes/notes.styles.scss"

class CharacterNotesPage extends React.Component {
  componentDidMount() {
    const { characterName } = this.props
    document.title = `Notes | ${characterName} | Avarice Sheets`
  }

  render() {
    const { notes } = this.props
    return (
      <>
        <SheetsHeading heading="Notes" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Your Notes">
              <Button disabled>Create a New Note</Button>
              {notes.map((note, index) => {
                return (
                  <div
                    className={`note-excerpt ${index === 0 ? "note-excerpt--active" : ""}`}
                    key={note.id}
                    data-noteid={note.id}
                  >
                    <p>{note.content}</p>
                  </div>
                )
              })}
            </Section>
          </Column>

          <Column width={75}>
            <Section heading="Note Content">
              <p className="editable-note-content" contentEditable>
                {notes[0] ? notes[0].content : null}
              </p>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  notes: selectNotes,
  characterName: selectCharacterName,
})

export default connect(mapStateToProps)(CharacterNotesPage)
