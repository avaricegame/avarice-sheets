import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class DatabasePage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Database" />
        <SheetsPageContainer>
          <Column width={33}>
            <Section heading="Inventory Item">
              <Button>Generate New Inventory Item</Button>
              <Card heading="Inventory Item Name">inventory item details</Card>
            </Section>
          </Column>

          <Column width={33}>
            <Section heading="NPCS">
              <Button>Generate New NPC</Button>
              <Card heading="NPC Name">npc info</Card>
            </Section>
          </Column>

          <Column width={33}>
            <Section heading="Environment">
              <Button>Generate New Environment</Button>
              <Card heading="Environment Name">environment thing</Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default DatabasePage
