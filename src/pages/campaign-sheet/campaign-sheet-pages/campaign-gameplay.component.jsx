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
              <Button>Action</Button>
              <Button>Action</Button>
              <Button>Action</Button>
              <Button>Action</Button>
              <Button>Action</Button>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Active Mission"></Section>
          </Column>

          <Column width={25}>
            <Section heading="Notifications">
              <p>
                <strong>Player 1: </strong>
                <em className="highlight">Attacked</em> with WEAPON and rolled 17
              </p>
              <p>
                <strong>Player 2: </strong>
                <em className="highlight">Used Ability</em> ABILITY and rolled 17
              </p>
              <p>
                <strong>Player 1: </strong>
                <em className="highlight">Paid Money</em> 30 GOLD to PLAYER 2
              </p>
              <p>
                <strong>Player 1: </strong>
                <em className="highlight">Sold Item</em> WEAPON / WEARABLE / ITEM
              </p>
              <p>
                <strong>Player 1: </strong>
                <em className="highlight">Rolled D20</em> and got 17
              </p>
              <p>
                <strong>Player 1: </strong>
                <em className="highlight">Leveled Up</em> to level 5
              </p>
              <p>
                <strong>Player 1: </strong>
                <em className="highlight">Added Excelence Chip</em>
              </p>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Memos">
              <Button>New Memo</Button>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ipsa nemo
                quisquam minus.
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ipsa nemo
                quisquam minus.
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ipsa nemo
                quisquam minus.
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ipsa nemo
                quisquam minus.
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ipsa nemo
                quisquam minus.
              </p>
              <hr />
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default CampaignGameplay
