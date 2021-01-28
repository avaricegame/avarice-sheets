import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import {
  default as Card,
  InteriorCardContainerFlex as InteriorCard,
  Subheading,
  CardContainerContentContainer as InteriorCardContent,
} from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class PlayersPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Players" />
        <SheetsPageContainer>
          <Column width={100}>
            <Section heading="Players Information">
              <Card heading="Player #1" flex>
                <InteriorCard>
                  <Column width={25}>
                    <Subheading blue>Overview</Subheading>
                    <InteriorCardContent>
                      <ul>
                        <li>Player Name</li>
                        <li>Race: asdf</li>
                        <li>Class: asdf</li>
                        <li>Hit Points: 34</li>
                        <li>Armour Value: 7</li>
                        <li>Dodge Value: 12</li>
                        <li>Life Credits: 100</li>
                      </ul>
                    </InteriorCardContent>
                    <Button>View Character Sheet</Button>
                  </Column>
                  <Column width={25}>
                    <Subheading blue>Abilities</Subheading>
                    <InteriorCardContent>
                      <table>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Stat</th>
                            <th>Difficulty Level</th>
                            <th>From Equipment?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Ability 1</td>
                            <td>Constitution</td>
                            <td>hard</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Ability 1</td>
                            <td>Constitution</td>
                            <td>hard</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Ability 1</td>
                            <td>Constitution</td>
                            <td>hard</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Ability 1</td>
                            <td>Constitution</td>
                            <td>hard</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Ability 1</td>
                            <td>Constitution</td>
                            <td>hard</td>
                            <td>Weapon Name</td>
                          </tr>
                          <tr>
                            <td>Ability 1</td>
                            <td>Constitution</td>
                            <td>hard</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </InteriorCardContent>
                  </Column>

                  <Column width={25}>
                    <Subheading blue>Weapons</Subheading>
                    <InteriorCardContent>
                      <table>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Range</th>
                            <th>Crit Range</th>
                            <th>Proficiency</th>
                            <th>Damage</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Weapon 1</td>
                            <td>3</td>
                            <td>19 - 20</td>
                            <td>Constitution</td>
                            <td>D20</td>
                          </tr>
                          <tr>
                            <td>Weapon 1</td>
                            <td>4</td>
                            <td>19 - 20</td>
                            <td>Constitution</td>
                            <td>D20</td>
                          </tr>
                        </tbody>
                      </table>
                    </InteriorCardContent>
                  </Column>
                  <Column width={25}>
                    <Subheading blue>Items</Subheading>
                    <InteriorCardContent>
                      <table>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Uses</th>
                            <th>description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Item 1</td>
                            <td>3</td>
                            <td>19 - 20</td>
                          </tr>
                          <tr>
                            <td>Item 1</td>
                            <td>4</td>
                            <td>19 - 20</td>
                          </tr>
                          <tr>
                            <td>Item 1</td>
                            <td>3</td>
                            <td>19 - 20</td>
                          </tr>
                        </tbody>
                      </table>
                    </InteriorCardContent>
                  </Column>
                </InteriorCard>
              </Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default PlayersPage
