import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

//import { selectIsCurrentUserLoaded } from "../../redux/user/user.selectors"
import WithLoader from "../../components/with-loader/with-loader.component"
import CampaignSheetPage from "./campaign-sheet.component"

const mapStateToProps = createStructuredSelector({
  //isLoading: (state) => !selectIsCurrentUserLoaded(state),
})

const CampaignSheetPageContainer = connect(mapStateToProps)(WithLoader(CampaignSheetPage))

export default CampaignSheetPageContainer
