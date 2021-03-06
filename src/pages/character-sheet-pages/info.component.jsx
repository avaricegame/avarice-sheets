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
  selectCharacterBackground,
  selectCharacterDescription,
  selectCharacterLog,
  selectCharacterName,
  selectRaceInfo,
  selectClassInfo,
  selectCampaignInfo,
  selectCaptainsLog,
} from "../../redux/character-sheet/character-sheet.selectors"

import { togglePopupForm } from "../../redux/app/app.actions"
import PopupFormTypes from "../../components/popup-form/popup-form.types"

// display components
import DisplayCampaignInfo from "../../components/shared-sheets-components/display-campaign-info/display-campaign-info.component"
import { default as Log } from "../../components/shared-sheets-components/display-log/display-log.component"
import RaceCard from "../../components/character-sheet-components/race-card/race-card.component"
import ClassCard from "../../components/character-sheet-components/class-card/class-card.component"

class InfoPage extends React.Component {
  componentDidMount() {
    const { characterName } = this.props
    document.title = `Info | ${characterName} | Avarice Sheets`
  }

  render() {
    const {
      characterBackground,
      characterDescription,
      characterLog,
      characterName,
      raceInfo,
      classInfo,
      campaignInfo: { players, missions, campaignName, _id, background, creatorName },
      captainsLog,
      togglePopupForm,
    } = this.props
    return (
      <>
        <SheetsHeading heading="Info" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Mission Logs">
              <Button onClick={() => togglePopupForm(PopupFormTypes.NEW_CHARACTER_LOG)}>
                Add a New Character Log
              </Button>
              <Card heading="Character's Logs" subheading={`For ${characterName}`}>
                {characterLog.map((log, index) => (
                  <Log
                    edit
                    key={index}
                    log={log}
                    whatToEdit="charLogToEdit"
                    popupFormType={PopupFormTypes.NEW_CHARACTER_LOG}
                  />
                ))}
              </Card>
              <Card heading="Captain's Logs" subheading={`For ${campaignName}`}>
                {captainsLog.map((log, index) => (
                  <Log key={index} log={log} />
                ))}
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Campaign Information">
              <Card heading="Campaign Details" subheading={campaignName} terheading={`ID#${_id}`}>
                <DisplayCampaignInfo
                  creatorName={creatorName}
                  players={players}
                  missions={missions}
                  background={background}
                />
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Race and Class Information">
              <RaceCard raceInfo={raceInfo} />
              <ClassCard classInfo={classInfo} />
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Character Information">
              <Card heading="Character Description" subheading={`For ${characterName}`}>
                <table>
                  <tbody>
                    {characterDescription.map(({ descriptor, value }) => (
                      <tr key={descriptor}>
                        <td>{descriptor}:</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
              <Card heading="Character Background" subheading={`For ${characterName}`}>
                {characterBackground.map(({ question, answer }, index) => (
                  <p key={index}>
                    <strong>{question}</strong>
                    <br />
                    {answer}
                  </p>
                ))}
              </Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  characterBackground: selectCharacterBackground,
  characterDescription: selectCharacterDescription,
  characterLog: selectCharacterLog,
  characterName: selectCharacterName,
  raceInfo: selectRaceInfo,
  classInfo: selectClassInfo,
  campaignInfo: selectCampaignInfo,
  captainsLog: selectCaptainsLog,
})

const mapDispatchToProps = (dispatch) => ({
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)
