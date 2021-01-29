import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCurrentCharSheetLoaded } from "../../../redux/character-sheet/character-sheet.selectors"
import WithLoader from "../../../components/with-loader/with-loader.component"

import CharacterGameplayPage from "../character-gameplay.component"
import InventoryPage from "../inventory.component"
import StatsPage from "../stats.component"
import AbilitiesPage from "../abilities.component"
import InfoPage from "../info.component"
import CharacterNotesPage from "../character-notes.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCurrentCharSheetLoaded(state),
})

export const CharacterGameplayPageContainer = connect(mapStateToProps)(
  WithLoader(CharacterGameplayPage)
)
export const InventoryPageContainer = connect(mapStateToProps)(WithLoader(InventoryPage))
export const StatsPageContainer = connect(mapStateToProps)(WithLoader(StatsPage))
export const AbilitiesPageContainer = connect(mapStateToProps)(WithLoader(AbilitiesPage))
export const InfoPageContainer = connect(mapStateToProps)(WithLoader(InfoPage))
export const CharacterNotesPageContainer = connect(mapStateToProps)(WithLoader(CharacterNotesPage))
