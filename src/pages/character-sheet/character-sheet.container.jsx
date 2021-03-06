import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectAreAdditionalResourcesLoaded } from "../../redux/app/app.selectors"
import WithLoader from "../../components/with-loader/with-loader.component"
import CharacterSheetPage from "./character-sheet.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectAreAdditionalResourcesLoaded(state),
})

const CharacterSheetPageContainer = connect(mapStateToProps)(WithLoader(CharacterSheetPage))

export default CharacterSheetPageContainer
