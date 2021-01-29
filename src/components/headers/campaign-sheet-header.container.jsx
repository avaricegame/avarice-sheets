import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCurrentCampSheetLoaded } from "../../redux/campaign-sheet/campaign-sheet.selectors"
import WithLoader from "../with-loader/with-loader.component"
import CampaignSheetHeader from "./campaign-sheet-header.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCurrentCampSheetLoaded(state),
})

const CampaignSheetHeaderContainer = connect(mapStateToProps)(WithLoader(CampaignSheetHeader))

export default CampaignSheetHeaderContainer
