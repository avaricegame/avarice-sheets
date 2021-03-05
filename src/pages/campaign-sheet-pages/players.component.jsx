import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import SheetsHeading from "../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../components/sheets-page-container-column/sheets-page-container-column.component"

import {
  selectCampaignName,
  selectPlayersCharacterSheets,
} from "../../redux/campaign-sheet/campaign-sheet.selectors"

// display components
import PlayerCard from "../../components/campaign-sheet-components/player-card/player-card.component"

class PlayersPage extends React.Component {
  componentDidMount() {
    const { campaignName } = this.props
    document.title = `Players | ${campaignName} | Avarice Sheets`
  }

  render() {
    const { playersCharacterSheets } = this.props
    return (
      <>
        <SheetsHeading heading="Players" />
        <SheetsPageContainer>
          <Column width={100}>
            <Section heading="Players Information">
              {playersCharacterSheets.map((playerCharSheet, index) => {
                return <PlayerCard player={playerCharSheet} key={index} />
              })}
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  playersCharacterSheets: selectPlayersCharacterSheets,
  campaignName: selectCampaignName,
})

export default connect(mapStateToProps)(PlayersPage)
