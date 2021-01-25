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
            <Section heading="Hit Points">
              <Card heading="Player 1" subheading="Max HP: 34" terheading="Current HP: 20"></Card>
              <Card heading="Player 2" subheading="Max HP: 34" terheading="Current HP: 20"></Card>
              <Card heading="Player 3" subheading="Max HP: 34" terheading="Current HP: 20"></Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Money">
              <Card heading="Player 1" terheading="Current Savings: 123 LC"></Card>
              <Card heading="Player 2" terheading="Current Savings: 123 LC"></Card>
              <Card heading="Player 3" terheading="Current Savings: 123 LC"></Card>
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
