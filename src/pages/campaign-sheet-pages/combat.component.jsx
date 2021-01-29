import React from "react"

import SheetsHeading from "../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../components/card-container/card-container.component"
import { default as Button } from "../../components/custom-button/custom-button.component"

class InteractablesPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Combat" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Players">
              <Card
                blue
                heading="Player Name"
                subheading="Hit Points: 23"
                terheading="Armour Value: 7"
                quatheading="Dodge Value: 4"
              >
                <table>
                  <thead>
                    <tr>
                      <th>Weapon</th>
                      <th>Range</th>
                      <th>Proficiency Value</th>
                      <th>Damage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>2</td>
                      <td>7</td>
                      <td>D6</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>8</td>
                      <td>7</td>
                      <td>D6</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Enemies">
              <Card
                blue
                heading="Enemy Name"
                subheading="Hit Points: 23"
                terheading="Armour Value: 7"
                quatheading="Dodge Value: 4"
              >
                <table>
                  <thead>
                    <tr>
                      <th>Weapon</th>
                      <th>Range</th>
                      <th>Proficiency Value</th>
                      <th>Damage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>2</td>
                      <td>7</td>
                      <td>D6</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>8</td>
                      <td>7</td>
                      <td>D6</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Friends">
              <Card
                blue
                heading="Friend Name"
                subheading="Hit Points: 23"
                terheading="Armour Value: 7"
                quatheading="Dodge Value: 4"
              >
                <table>
                  <thead>
                    <tr>
                      <th>Weapon</th>
                      <th>Range</th>
                      <th>Proficiency Value</th>
                      <th>Damage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>2</td>
                      <td>7</td>
                      <td>D6</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>8</td>
                      <td>7</td>
                      <td>D6</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Actions">
              <Button>Attack</Button>
              <Button>Make a Check</Button>
              <Button>Take Damage</Button>
              <Button>Heal</Button>
              <Button>Roll Dice</Button>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default InteractablesPage
