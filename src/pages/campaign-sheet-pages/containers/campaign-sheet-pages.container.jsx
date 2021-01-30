import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCurrentCampSheetLoaded } from "../../../redux/campaign-sheet/campaign-sheet.selectors"
import WithLoader from "../../../components/with-loader/with-loader.component"

import CampaignGameplayPage from "../campaign-gameplay.component"
import CombatPage from "../combat.component"
import PlayersPage from "../players.component"
import CampaignPage from "../campaign.component"
import PlanningPage from "../planning.component"
import CampaignNotesPage from "../campaign-notes.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCurrentCampSheetLoaded(state),
})

export const CampaignGameplayPageContainer = connect(mapStateToProps)(
  WithLoader(CampaignGameplayPage)
)
export const CombatPageContainer = connect(mapStateToProps)(WithLoader(CombatPage))
export const PlayersPageContainer = connect(mapStateToProps)(WithLoader(PlayersPage))
export const CampaignPageContainer = connect(mapStateToProps)(WithLoader(CampaignPage))
export const PlanningPageContainer = connect(mapStateToProps)(WithLoader(PlanningPage))
export const CampaignNotesPageContainer = connect(mapStateToProps)(WithLoader(CampaignNotesPage))
