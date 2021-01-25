import React from "react"
import { Link } from "react-router-dom"

import MainHeader from "../../components/header/main-header.component"
import MainPageContainer from "../../components/main-page-container/main-page-container.component"
import { default as Column } from "../../components/main-page-container-column/main-page-container-column.component"
import Footer from "../../components/footer/footer.component"

import CharacterSheetCard from "../../components/character-sheet-card/character-sheet-card.component"
import CampaignSheetCard from "../../components/campaign-sheet-card/campaign-sheet-card.component"

import CustomButton from "../../components/custom-button/custom-button.component"

import "./homepage.styles.scss"

class HomePage extends React.Component {
  render() {
    return (
      <>
        <MainHeader />
        <MainPageContainer>
          <Column heading="Character Sheets">
            <CustomButton>Create a New Character Sheet</CustomButton>
            <Link className="sheets-card-link" to="/character">
              <CharacterSheetCard />
            </Link>
            <Link className="sheets-card-link" to="/character">
              <CharacterSheetCard />
            </Link>
            <Link className="sheets-card-link" to="/character">
              <CharacterSheetCard />
            </Link>
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

export default HomePage
