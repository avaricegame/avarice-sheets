import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class PlayersPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Players" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Player Overview">
              <Card heading="Player 1"></Card>
              <Card heading="Player 2"></Card>
              <Card heading="Player 3"></Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Highlighted Stats">
              <Card heading="Player 1" subheading="Character Name">
                <p>
                  <strong>Max HP: </strong>34
                </p>
                <p>
                  <strong>Current HP: </strong>20
                </p>
                <p>
                  <strong>Current Savings: </strong>123 LC
                </p>
              </Card>
              <Card heading="Player 2" subheading="Character Name">
                <p>
                  <strong>Max HP: </strong>34
                </p>
                <p>
                  <strong>Current HP: </strong>20
                </p>
                <p>
                  <strong>Current Savings: </strong>123 LC
                </p>
              </Card>
              <Card heading="Player 3" subheading="Character Name">
                <p>
                  <strong>Max HP: </strong>34
                </p>
                <p>
                  <strong>Current HP: </strong>20
                </p>
                <p>
                  <strong>Current Savings: </strong>123 LC
                </p>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Race and Class Info"></Section>
          </Column>

          <Column width={25}>
            <Section heading="View Character Sheets">
              <Button>Player 1</Button>
              <Button>Player 2</Button>
              <Button>Player 3</Button>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default PlayersPage
