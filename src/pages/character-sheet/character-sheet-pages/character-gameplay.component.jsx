import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class CharacterGameplayPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Gameplay" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Hit Points">
              <Card heading="Hit Points" subheading="Max HP: 34" terheading="Current HP: 20">
                <Button>Take Damage</Button>
                <Button>Heal HP</Button>
              </Card>
            </Section>
            <Section heading="Money">
              <Card heading="Life Credits" terheading="Current Savings: 123 LC">
                <Button>Pay Money</Button>
                <Button>Recieve Money</Button>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Actions">
              <Button>Attack</Button>
              <Button>Roll Dice</Button>
              <Button>Make a Skill Check</Button>
              <Button>Use an Item</Button>
              <Button>Use an Ability</Button>
              <Button>Use a Thing</Button>
              <Button>Take a Rest</Button>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Notifcations">
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
            <Section heading="Energy Points">
              <div className="item-container item-container--overflowx">
                <h3 className="item-container__heading">Energy Points Table</h3>
                <h4 className="item-container__subheading item-container__terheading--adjusted">
                  Used When You Make a Skill Check
                </h4>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Physique
                </h4>
                <table className="energy-points-table">
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Strength</td>
                      <td>
                        <span className="energy-point"></span>
                        <span className="energy-point used"></span>
                        <span className="energy-point used"></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Constitution</td>
                      <td>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Intelligence
                </h4>
                <table className="energy-points-table">
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Academic</td>
                      <td>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Technical</td>
                      <td>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Dexterity
                </h4>
                <table className="energy-points-table">
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Reflex</td>
                      <td>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Speed</td>
                      <td>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Charisma
                </h4>
                <table className="energy-points-table">
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Speech</td>
                      <td>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Performance</td>
                      <td>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Combat
                </h4>
                <table className="energy-points-table">
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Ranged</td>
                      <td>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Melee</td>
                      <td>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                        <span className="energy-point"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default CharacterGameplayPage
