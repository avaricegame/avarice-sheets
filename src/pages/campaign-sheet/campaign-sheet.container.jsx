import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectAreAdditionalResourcesLoaded } from "../../redux/app/app.selectors"
import WithLoader from "../../components/with-loader/with-loader.component"
import CampaignSheetPage from "./campaign-sheet.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectAreAdditionalResourcesLoaded(state),
})

const CampaignSheetPageContainer = connect(mapStateToProps)(WithLoader(CampaignSheetPage))

export default CampaignSheetPageContainer
