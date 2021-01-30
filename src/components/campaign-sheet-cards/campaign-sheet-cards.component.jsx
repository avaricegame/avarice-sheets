import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CardContainer from "../card-container/card-container.component"
import DisplayCampaignInfo from "../shared-sheets-components/display-campaign-info/display-campaign-info.component"

import { selectCampSheetList } from "../../redux/campaign-sheet/campaign-sheet.selectors"

const CampaignSheetCards = ({ campSheetList }) => (
  <>
    {campSheetList.map((campSheet) => {
      const { campaignName, _id, playersNames, charactersNames, missions } = campSheet
      return (
        <Link className="sheets-card-link" to={`/campaign/${_id}`} key={_id}>
          <CardContainer blue heading={campaignName} subheading={`ID#${_id}`}>
            <DisplayCampaignInfo
              playersNames={playersNames}
              charactersNames={charactersNames}
              missions={missions}
            />
          </CardContainer>
        </Link>
      )
    })}
  </>
)

const mapStateToProps = createStructuredSelector({
  campSheetList: selectCampSheetList,
})

export default connect(mapStateToProps)(CampaignSheetCards)
