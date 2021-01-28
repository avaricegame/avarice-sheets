import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import MainHeader from "../../components/header/main-header.component"
import MainPageContainer from "../../components/main-page-container/main-page-container.component"
import { default as Column } from "../../components/main-page-container-column/main-page-container-column.component"
import Footer from "../../components/footer/footer.component"

import CharacterSheetCard from "../../components/character-sheet-card/character-sheet-card.component"
import CampaignSheetCard from "../../components/campaign-sheet-card/campaign-sheet-card.component"

import CustomButton from "../../components/custom-button/custom-button.component"

import { fetchCharSheetListStart } from "../../redux/character-sheet/character-sheet.actions"
import { fetchCampSheetListStart } from "../../redux/campaign-sheet/campaign-sheet.actions"
import { selectCharSheetList } from "../../redux/character-sheet/character-sheet.selectors"
import { selectCampSheetList } from "../../redux/campaign-sheet/campaign-sheet.selectors"
import { selectCurrentUser } from "../../redux/user/user.selectors"

import "./homepage.styles.scss"

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchCharSheetListStart, fetchCampSheetListStart, currentUser } = this.props

    const CHAR_SHEETS = require("../../redux/json/character-sheets.json")
    const CAMP_SHEETS = require("../../redux/json/campaign-sheets.json")

    const usersCharSheets = CHAR_SHEETS.filter(
      (charSheet) => charSheet.creatorID === currentUser.id
    )
    const usersCampSheets = CAMP_SHEETS.filter(
      (campSheet) => campSheet.creatorID === currentUser.id
    )

    fetchCharSheetListStart(usersCharSheets)
    fetchCampSheetListStart(usersCampSheets)
  }

  render() {
    const { charSheetList } = this.props
    return (
      <>
        <MainHeader />
        <MainPageContainer>
          <Column heading="Character Sheets">
            <CustomButton>Create a New Character Sheet</CustomButton>
            {charSheetList.map((charSheet) => {
              const { _id } = charSheet
              return (
                <Link className="sheets-card-link" to={`/character/${_id}`}>
                  <CharacterSheetCard charSheet={charSheet} />
                </Link>
              )
            })}
          </Column>

          <Column heading="Campaign Sheets">
            <CustomButton>Create a New Campaign Sheet</CustomButton>
            <Link className="sheets-card-link" to="/campaign">
              <CampaignSheetCard />
            </Link>
            <Link className="sheets-card-link" to="/campaign">
              <CampaignSheetCard />
            </Link>
            <Link className="sheets-card-link" to="/campaign">
              <CampaignSheetCard />
            </Link>
          </Column>
        </MainPageContainer>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  charSheetList: selectCharSheetList,
  campSheetList: selectCampSheetList,
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCharSheetListStart: (charSheetList) => dispatch(fetchCharSheetListStart(charSheetList)),
  fetchCampSheetListStart: (campSheetList) => dispatch(fetchCampSheetListStart(campSheetList)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
