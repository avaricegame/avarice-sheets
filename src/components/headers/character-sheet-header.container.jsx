import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCurrentCharSheetLoaded } from "../../redux/character-sheet/character-sheet.selectors"
import WithLoader from "../with-loader/with-loader.component"
import CharacterSheetHeader from "./character-sheet-header.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCurrentCharSheetLoaded(state),
})

const CharacterSheetHeaderContainer = connect(mapStateToProps)(WithLoader(CharacterSheetHeader))

export default CharacterSheetHeaderContainer
