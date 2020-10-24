import React from "react"

import Header from "./CharacterSheet/Header"
import Footer from "./Footer"
import FlashMessage from "./FlashMessage"
import Navigation from "./CharacterSheet/Navigation"
//import ConfirmationModal from "../ConfirmationModal"

function CharacterSheetContainer(props) {
  return (
    <>
      <Header charSheet={props.charSheet} />
      <Navigation />
      {props.children}
      <Footer />
      <FlashMessage />
    </>
  )
}

export default CharacterSheetContainer
