import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import MainHeader from "../../components/headers/main-header.component"
import MainPageContainer from "../../components/main-page-container/main-page-container.component"
import { default as Column } from "../../components/main-page-container-column/main-page-container-column.component"
import Footer from "../../components/footer/footer.component"

import CharacterSheetCards from "../../components/character-sheet-cards/character-sheet-cards.component"
import CampaignSheetCards from "../../components/campaign-sheet-cards/campaign-sheet-cards.component"

import CustomButton from "../../components/custom-button/custom-button.component"

import { selectCurrentUser } from "../../redux/user/user.selectors"

import { togglePopupForm } from "../../redux/app/app.actions"
import PopupFormTypes from "../../components/popup-form/popup-form.types"

import "./homepage.styles.scss"

class HomePage extends React.Component {
  componentDidMount() {
    const {
      currentUser: { username, firstName },
    } = this.props
    document.title = `${firstName ? firstName : username} | Homepage | Avarice Sheets`
  }

  render() {
    const { togglePopupForm } = this.props
    return (
      <>
        <MainHeader />
        <MainPageContainer>
          <Column heading="Character Sheets">
            <CustomButton onClick={() => togglePopupForm(PopupFormTypes.NEW_CHARACTER_SHEET)}>
              Create a New Character Sheet
            </CustomButton>
            <CharacterSheetCards />
          </Column>
          <Column heading="Campaign Sheets">
            <CustomButton onClick={() => togglePopupForm(PopupFormTypes.NEW_CAMPAIGN_SHEET)}>
              Create a New Campaign Sheet
            </CustomButton>
            <CampaignSheetCards />
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
  togglePopupForm: (popupFormType) => dispatch(togglePopupForm(popupFormType)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
