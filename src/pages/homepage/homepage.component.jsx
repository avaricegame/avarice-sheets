import React from "react"
import { Link } from "react-router-dom"

import MainHeader from "../../components/header/main-header.component"
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
        <div className="container">
          <div className="campaign-sheets">
            <h2 className="heading">Character Sheets</h2>
            <div className="sheets-container">
              <CustomButton>Create a New Character Sheet</CustomButton>
              <Link className="sheets-card-link" to="/character">
                <CharacterSheetCard />
              </Link>
              <CharacterSheetCard />
              <CharacterSheetCard />
            </div>
          </div>
          <div className="character-sheets">
            <h2 className="heading">Campaign Sheets</h2>
            <div className="sheets-container">
              <CustomButton>Create a New Campaign Sheet</CustomButton>
              <Link className="sheets-card-link" to="/campaign">
                <CampaignSheetCard />
              </Link>
              <CampaignSheetCard />
              <CampaignSheetCard />
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default HomePage
