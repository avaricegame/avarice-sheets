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
  selectCurrentHP,
  selectLifeCredits,
  selectWearables,
  selectLevel,
  selectStats,
} from "../../redux/character-sheet/character-sheet.selectors"

// util functions
import {
  findEquippedInventoryItems,
  calculateArmourValueFromEquippedWearables,
} from "./utils/inventory.utils"
import { calculateMaxHPValue, calculateDodgeValue } from "./utils/gameplay.utils"
import { findStatProficiencyValue } from "./utils/stats.utils"

class CharacterGameplayPage extends React.Component {
  render() {
    const { currentHP, lifeCredits, wearables, level, stats } = this.props
    let equippedWearables = findEquippedInventoryItems(wearables)
    let armourValue = calculateArmourValueFromEquippedWearables(equippedWearables)
    const constitutionProficiencyValue = findStatProficiencyValue(stats, "constitution")
    let maxHP = calculateMaxHPValue(level, constitutionProficiencyValue)
    const reflexProficiencyValue = findStatProficiencyValue(stats, "reflex")
    let dodgeValue = calculateDodgeValue(reflexProficiencyValue, "small")

    return (
      <>
        <SheetsHeading heading="Gameplay" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Hit Points">
              <Card
                heading={`Hit Points Max: ${maxHP}`}
                subheading={`Armour Value: ${armourValue}`}
                subheading2={`Dodge Value: ${dodgeValue}`}
                terheading={`Current Hit Points: ${currentHP}`}
              >
                <Button>Take Damage</Button>
                <Button>Heal HP</Button>
              </Card>
            </Section>
            <Section heading="Money">
              <Card heading="Life Credits" terheading={`Current Savings: ${lifeCredits} LC`}>
                <Button>Pay Money</Button>
                <Button>Recieve Money</Button>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Actions">
              <Button>Attack</Button>
              <Button>Make a Check</Button>
              <Button>Use an Item</Button>
              <Button>Use an Ability</Button>
              <Button>Equip / Unequip</Button>
              <Button>Take a Rest</Button>
              <Button>Roll Dice</Button>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Stats Overview"></Section>
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

const mapStateToProps = createStructuredSelector({
  currentHP: selectCurrentHP,
  lifeCredits: selectLifeCredits,
  wearables: selectWearables,
  level: selectLevel,
  stats: selectStats,
})

export default connect(mapStateToProps)(CharacterGameplayPage)
