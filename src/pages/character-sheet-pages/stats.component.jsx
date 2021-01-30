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
  selectLevel,
  selectStats,
  selectWearables,
  selectClassInfo,
} from "../../redux/character-sheet/character-sheet.selectors"

// util functions
import { calculateActualStatValuesAndTransform } from "./utils/stats.utils"
import { findEquippedInventoryItems } from "./utils/inventory.utils"

// display components
import DisplaySuccessPoints from "../../components/character-sheet-components/display-stats-tables/display-success-points.component"
import DisplayProficiencyPoints from "../../components/character-sheet-components/display-stats-tables/display-proficiency-points.component"

class StatsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      transformedCalculatedStatValues: [],
    }
  }

  componentDidMount() {
    const { stats, wearables, classInfo } = this.props

    this.setState({
      transformedCalculatedStatValues: calculateActualStatValuesAndTransform(
        stats,
        findEquippedInventoryItems(wearables),
        classInfo.stats
      ),
    })
  }

  componentWillUnmount() {
    this.setState({
      transformedCalculatedStatValues: [],
    })
  }

  render() {
    const { level } = this.props
    const { transformedCalculatedStatValues } = this.state

    return (
      <>
        <SheetsHeading heading="Stats" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Levels and Experience">
              <Card heading="Level" subheading={`You are at level ${level}`}>
                <Button>Level Up</Button>
                <Button>Remove Level</Button>
                <p>
                  When you level up you get to choose a new ability to upgrade or learn from your
                  ability tree.
                </p>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Success Points">
              <Card
                heading="Success Points Table"
                subheading="Earned by Succeeding on a Stat Check"
              >
                <DisplaySuccessPoints
                  transformedCalculatedStatValues={transformedCalculatedStatValues}
                />
              </Card>
            </Section>
          </Column>

          <Column width={50}>
            <Section heading="Skills">
              <Card
                heading="Proficiency Points Table"
                subheading="Upgraded by Earning Success Points"
              >
                <DisplayProficiencyPoints
                  transformedCalculatedStatValues={transformedCalculatedStatValues}
                />
              </Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  level: selectLevel,
  stats: selectStats,
  wearables: selectWearables,
  classInfo: selectClassInfo,
})

export default connect(mapStateToProps)(StatsPage)
