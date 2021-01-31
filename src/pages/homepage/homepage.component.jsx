import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import MainHeader from "../../components/headers/main-header.component"
import MainPageContainer from "../../components/main-page-container/main-page-container.component"
import { default as Column } from "../../components/main-page-container-column/main-page-container-column.component"
import Footer from "../../components/footer/footer.component"

import CharacterSheetCardsContainer from "../../components/character-sheet-cards/character-sheet-cards.container"
import CampaignSheetCardsContainer from "../../components/campaign-sheet-cards/campaign-sheet-cards.container"

import CustomButton from "../../components/custom-button/custom-button.component"

import { fetchCharSheetListStartAsync } from "../../redux/character-sheet/character-sheet.actions"
import { fetchCampSheetListStartAsync } from "../../redux/campaign-sheet/campaign-sheet.actions"
import { selectCurrentUser } from "../../redux/user/user.selectors"

import "./homepage.styles.scss"

class HomePage extends React.Component {
  componentDidMount() {
    const {
      fetchCharSheetListStartAsync,
      fetchCampSheetListStartAsync,
      currentUser: { _id, username, firstName },
    } = this.props
    document.title = `${firstName ? firstName : username} | Homepage | Avarice Sheets`
    fetchCharSheetListStartAsync(_id)
    fetchCampSheetListStartAsync(_id)
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
            <CampaignSheetCardsContainer />
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
  fetchCharSheetListStartAsync: (currentUsersID) =>
    dispatch(fetchCharSheetListStartAsync(currentUsersID)),
  fetchCampSheetListStartAsync: (currentUsersID) =>
    dispatch(fetchCampSheetListStartAsync(currentUsersID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
