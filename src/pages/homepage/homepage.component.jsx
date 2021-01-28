import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import MainHeader from "../../components/header/main-header.component"
import MainPageContainer from "../../components/main-page-container/main-page-container.component"
import { default as Column } from "../../components/main-page-container-column/main-page-container-column.component"
import Footer from "../../components/footer/footer.component"

import CharacterSheetCardsContainer from "../../components/character-sheet-cards/character-sheet-cards.container"
import CampaignSheetCard from "../../components/campaign-sheet-card/campaign-sheet-card.component"

import CustomButton from "../../components/custom-button/custom-button.component"

import { fetchCharSheetListStartAsync } from "../../redux/character-sheet/character-sheet.actions"
import { fetchCampSheetListStart } from "../../redux/campaign-sheet/campaign-sheet.actions"
import { selectCurrentUser } from "../../redux/user/user.selectors"

import "./homepage.styles.scss"

class HomePage extends React.Component {
  componentDidMount() {
    const {
      fetchCharSheetListStartAsync,
      fetchCampSheetListStart,
      currentUser: { id },
    } = this.props

    fetchCharSheetListStartAsync(id)
    fetchCampSheetListStart()
  }

  render() {
    return (
      <>
        <MainHeader />
        <MainPageContainer>
          <Column heading="Character Sheets">
            <CustomButton>Create a New Character Sheet</CustomButton>
            <CharacterSheetCardsContainer />
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
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCharSheetListStartAsync: (userid) => dispatch(fetchCharSheetListStartAsync(userid)),
  fetchCampSheetListStart: (campSheetList) => dispatch(fetchCampSheetListStart(campSheetList)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
