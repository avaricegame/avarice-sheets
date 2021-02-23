import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CardContainer from "../card-container/card-container.component"
import DisplayCampaignInfo from "../shared-sheets-components/display-campaign-info/display-campaign-info.component"

import { selectUsersCampSheets } from "../../redux/user/user.selectors"

// display components
import EditAndDeleteActions from "../shared-sheets-components/card-actions/edit-and-delete-actions.component"

const CampaignSheetCards = ({ campSheets }) => (
  <>
    {campSheets.map((campSheet) => {
      const { campaignName, _id, players, missions } = campSheet
      return (
        <Link className="sheets-card-link" to={`/campaign/${_id}`} key={_id}>
          <CardContainer blue heading={campaignName} subheading={`ID#${_id}`}>
            <DisplayCampaignInfo players={players} missions={missions} />
            <EditAndDeleteActions onlyDelete />
          </CardContainer>
        </Link>
      )
    })}
  </>
)

const mapStateToProps = createStructuredSelector({
  campSheets: selectUsersCampSheets,
})

export default connect(mapStateToProps)(CampaignSheetCards)
