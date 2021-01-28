import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCharSheetListLoaded } from "../../redux/character-sheet/character-sheet.selectors"
import WithLoader from "../with-loader/with-loader.component"
import CharacterSheetCards from "./character-sheet-cards.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCharSheetListLoaded(state),
})

const CharacterSheetCardsContainer = connect(mapStateToProps)(WithLoader(CharacterSheetCards))

export default CharacterSheetCardsContainer
