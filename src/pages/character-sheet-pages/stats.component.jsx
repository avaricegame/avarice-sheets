import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import SheetsHeading from "../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../components/card-container/card-container.component"
import { default as Button } from "../../components/custom-button/custom-button.component"

import {
  selectCharacterName,
  selectLevel,
  selectCalculatedTransformedStats,
} from "../../redux/character-sheet/character-sheet.selectors"

import { togglePopupForm } from "../../redux/app/app.actions"
import PopupFormTypes from "../../components/popup-form/popup-form.types"

// display components
import DisplaySuccessPoints from "../../components/character-sheet-components/display-stats-tables/display-success-points.component"
import DisplayProficiencyPoints from "../../components/character-sheet-components/display-stats-tables/display-proficiency-points.component"

class StatsPage extends React.Component {
  componentDidMount() {
    const { characterName } = this.props
    document.title = `Stats | ${characterName} | Avarice Sheets`
  }

  render() {
    const { level, togglePopupForm, calculatedTransformedStats } = this.props

    return (
      <>
        <SheetsHeading heading="Stats" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Levels and Experience">
              <Card heading="Level" subheading={`You are at level ${level}`}>
                <Button onClick={() => togglePopupForm(PopupFormTypes.LEVEL_UP)}>Level Up</Button>
                <Button disabled>Remove Level</Button>
                <p>
                  When you level up you get to choose a new ability to upgrade or learn from your
                  ability tree.
                </p>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Success Points">
              <Card
                heading="Success Points Table"
                subheading="Earned by Succeeding on a Stat Check"
              >
                <DisplaySuccessPoints
                  transformedCalculatedStatValues={calculatedTransformedStats}
                />
              </Card>
            </Section>
          </Column>

          <Column width={50}>
            <Section heading="Skills">
              <Card
                heading="Proficiency Points Table"
                subheading="Upgraded by Earning Success Points"
              >
                <DisplayProficiencyPoints
                  transformedCalculatedStatValues={calculatedTransformedStats}
                />
              </Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  level: selectLevel,
  characterName: selectCharacterName,
  calculatedTransformedStats: selectCalculatedTransformedStats,
})

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StatsPage)
