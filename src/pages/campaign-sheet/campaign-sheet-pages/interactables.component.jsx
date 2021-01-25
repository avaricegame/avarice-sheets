import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class InteractablesPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Interactables" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="NPCS">
              <Card heading="NPC Name">npc details</Card>
              <Card heading="NPC Name">npc details</Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Enemies">
              <Card heading="Enemy Name">enemy details</Card>
              <Card heading="Enemy Name">enemy details</Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Environment">
              <Card heading="Environment Name">environment details</Card>
              <Card heading="Environment Name">environment details</Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Roll Dice">
              <Button>D4</Button>
              <Button>D6</Button>
              <Button>D8</Button>
              <Button>D10</Button>
              <Button>D12</Button>
              <Button>D20</Button>
              <Button>D60</Button>
              <Button>D100</Button>
              <Button>Custom</Button>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default InteractablesPage
