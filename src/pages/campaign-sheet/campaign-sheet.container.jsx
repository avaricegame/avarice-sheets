import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCurrentCampSheetLoaded } from "../../redux/campaign-sheet/campaign-sheet.selectors"
import WithLoader from "../../components/with-loader/with-loader.component"
import CampaignSheetPage from "./campaign-sheet.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCurrentCampSheetLoaded(state),
})

const CampaignSheetPageContainer = connect(mapStateToProps)(WithLoader(CampaignSheetPage))

export default CampaignSheetPageContainer
