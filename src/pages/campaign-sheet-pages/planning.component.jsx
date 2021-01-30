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
  selectEnvironment,
  selectInventoryItems,
  selectNPCS,
  selectMissions,
  selectCampaignName,
} from "../../redux/campaign-sheet/campaign-sheet.selectors"

class PlanningPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const { campaignName } = this.props
    document.title = `Planning | ${campaignName} | Avarice Sheets`
    this.setState({})
  }

  componentWillUnmount() {
    this.setState({})
  }
  render() {
    return (
      <>
        <SheetsHeading heading="Planning" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Mission Notes">
              <Button>Create a New Mission</Button>
              <Card heading="Selected Mission:">
                <select>
                  <option>Mission #1</option>
                  <option>Mission #2</option>
                  <option>Mission #3</option>
                  <option>Mission #4</option>
                </select>
              </Card>
              <Card blue heading="Mission #1s" subheading="Planned: 10/23/2021">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione enim
                  voluptatum quis officiis minima esse labore itaque iste. Distinctio, repellendus
                  ex fugit saepe iusto magni cupiditate qui nam aperiam.Ratione unde architecto ut
                  veritatis vel. Illo tenetur culpa omnis necessitatibus quia quasi ut reprehenderit
                  ullam dolores maiores. Odit cupiditate veniam vel perspiciatis repudiandae neque
                  facilis. Nulla pariatur temporibus similique!
                </p>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="NPCS">
              <Button>Generate New NPC</Button>
              <Card heading="NPC Name">
                <ul>
                  <li>Race: race</li>
                  <li>Level 4</li>
                  <li>Hit Points: 34</li>
                  <li>Armour Value: 7</li>
                  <li>Dodge Value: 12</li>
                  <li>Life Credits: 100</li>
                  <li>Weapons: weapon 1</li>
                </ul>

                <select>
                  <option>Friendly</option>
                  <option>Enemy</option>
                </select>
                <Button>Copy to a mission</Button>
                <Button>Move to a mission</Button>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Inventory Items">
              <Button>Generate New Inventory Item</Button>
              <Card heading="Enemy Name">
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

const mapStateToProps = createStructuredSelector({
  environment: selectEnvironment,
  inventoryItems: selectInventoryItems,
  npcs: selectNPCS,
  missions: selectMissions,
  campaignName: selectCampaignName,
})

export default connect(mapStateToProps)(PlanningPage)
