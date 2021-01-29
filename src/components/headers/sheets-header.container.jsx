import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCurrentCharSheetLoaded } from "../../redux/character-sheet/character-sheet.selectors"
import WithLoader from "../with-loader/with-loader.component"
import SheetsHeader from "./sheets-header.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCurrentCharSheetLoaded(state),
})

const SheetsHeaderContainer = connect(mapStateToProps)(WithLoader(SheetsHeader))

export default SheetsHeaderContainer
