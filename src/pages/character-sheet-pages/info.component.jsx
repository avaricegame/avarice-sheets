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
} from "../../redux/character-sheet/character-sheet.selectors"

class InfoPage extends React.Component {
  render() {
    const { characterBackground, characterDescription, characterLog, characterName } = this.props
    return (
      <>
        <SheetsHeading heading="Info" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Mission Logs">
              <Button>Add a New Character Log</Button>
              <Card heading="Character's Logs" subheading={`For ${characterName}`}>
                {characterLog.map((log) => {
                  const { id, title, details } = log
                  return (
                    <p data-logid={id} key={id}>
                      <strong>{title}: </strong>
                      {details}
                    </p>
                  )
                })}
              </Card>
              <Card heading="Captain's Logs" subheading="For Campaign Name">
                campaign
                {/* <p>
                  <strong>Log II: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum ratione illum recusandae, omnis enim, quae porro doloribus fugiat reiciendis
                  totam et iusto, mollitia exercitationem animi aspernatur. Id facere alias
                  voluptatibus.
                </p> */}
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Campaign Information">
              <Card heading="Campaign Details" subheading="For Campaign Name">
                campaign
                {/* <p>
                  <strong>Background: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <td>Campaign Name:</td>
                      <td>Fluttering Butterflies</td>
                    </tr>
                    <tr>
                      <td>Campaign ID:</td>
                      <td>#123ABC</td>
                    </tr>
                    <tr>
                      <td>Players:</td>
                      <td>Player 1, Player 2, Player 3</td>
                    </tr>
                    <tr>
                      <td>Characters:</td>
                      <td>Character 1, Character 2, Character 3</td>
                    </tr>
                    <tr>
                      <td>Missions Served:</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table> */}
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Race and Class Information">
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
              <Card heading="Race Info">
                <p>race</p>
              </Card>
              <Card heading="Class Info">
                <p>class</p>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Character Information">
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
})

export default connect(mapStateToProps)(InfoPage)
