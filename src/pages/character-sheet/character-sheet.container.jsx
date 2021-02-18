import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

//import { selectIsCurrentUserLoaded } from "../../redux/user/user.selectors"
import WithLoader from "../../components/with-loader/with-loader.component"
import CharacterSheetPage from "./character-sheet.component"

const mapStateToProps = createStructuredSelector({
  //isLoading: (state) => !selectIsCurrentUserLoaded(state),
})

const CharacterSheetPageContainer = connect(mapStateToProps)(WithLoader(CharacterSheetPage))

export default CharacterSheetPageContainer
