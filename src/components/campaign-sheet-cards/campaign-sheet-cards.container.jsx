import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCampSheetListLoaded } from "../../redux/campaign-sheet/campaign-sheet.selectors"
import WithLoader from "../with-loader/with-loader.component"
import CampaignSheetCards from "./campaign-sheet-cards.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCampSheetListLoaded(state),
})

const CampaignSheetCardsContainer = connect(mapStateToProps)(WithLoader(CampaignSheetCards))

export default CampaignSheetCardsContainer
