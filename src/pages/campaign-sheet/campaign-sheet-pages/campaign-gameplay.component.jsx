import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class CampaignGameplay extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Gameplay" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Actions">
              <Button>Start Combat</Button>
              <Button>Perform a Check</Button>
              <Button>Dispense Damage</Button>
              <Button>Give or Take Money</Button>
              <Button>Buy or Sell Items</Button>
              <Button>Give or Take Items</Button>
              <Button>Rest Party</Button>
              <Button>Level Up Party</Button>
            </Section>
          </Column>

          <Column width={50}>
            <Section heading="Current Mission">
              <Card heading="Date: Mission Name">mission notes and plans</Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Mission Interactables">
              <Button>Create Interactable</Button>
              <Card heading="Interactable Name" subheading="NPC" blue>
                npc info diplomacy:
                <select>
                  <option>Friend</option>
                  <option>Enemy</option>
                  <option>Neutral</option>
                </select>
                status:
                <select>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Dead</option>
                </select>
              </Card>
              <Card heading="Interactable Name" subheading="NPC" blue>
                npc info
              </Card>
              <Card heading="Interactable Name" subheading="Environment" blue>
                environment info
              </Card>
              <Card heading="Interactable Name" subheading="Inventory" blue>
                inventory item info
              </Card>
              <Card heading="Inactive">
                <p>
                  <strong>Name of it: </strong> Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit... <span>see more</span>
                </p>
                <p>
                  <strong>Name of it: </strong> Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum neque
                  architecto praesentium veniam? Officia quaerat aperiam neque et. Rem eum id quam.
                  Provident nam voluptatem repellat exercitationem optio quidem.
                  <br />
                  <span>ACTIVATE</span>
                </p>
                <p>
                  <strong>Name of it: </strong> Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit... <span>see more</span>
                </p>
                <p>
                  <strong>Name of it: </strong> Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit... <span>see more</span>
                </p>
                <p>
                  <strong>Name of it: </strong> Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit... <span>see more</span>
                </p>
              </Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default CampaignGameplay
