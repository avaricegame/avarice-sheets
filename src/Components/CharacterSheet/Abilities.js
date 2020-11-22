import React, { useContext } from "react"
import Axios from "axios"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function Abilities(props) {
  const charSheetState = useContext(StateContext)
  const charSheetDispatch = useContext(DispatchContext)
  const openNewAbility = () => {
    props.newAbilityHandler(true)
  }
  const openEditAbility = () => {
    props.editAbilityHandler(true)
  }
  const deleteAbility = (e, id) => {
    if (window.confirm("Are you sure you want to delete this ability? This action cannot be undone.")) {
      Axios.post("/character/deleteability", {
        CSID: props.CSID,
        id: id,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "deleteAbility",
            value: id,
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  const reversedLevelUpsArray = charSheetState.charSheet.levelUps.map((level) => level).reverse()
  const reversedCustomAbilitiesArray = charSheetState.charSheet.customAbilities.map((ability) => ability).reverse()
  const reversedAbilityArray = props.abilityArray.map((ability) => ability).reverse()

  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Abilities</h1>
      </div>
      <div className="page-container">
        <div className="cw__75">
          <h2 className="heading">Abilities Tree</h2>
          <div className="cw__container">
            <p>
              <strong>How does the Abilities Tree work?</strong> <br />
              Each time you level up, you will be asked to choose one ability between three separate options. The choices will include new abilities as well as ability power-ups. Each ability can be leveled up to Power V.
            </p>
          </div>

          <h4 className="item-container__terheading">Options Upon Next Level Up</h4>
          <div className="cw__container cw__container--tree">
            {charSheetState.charSheet.levelUps[charSheetState.charSheet.levelUps.length - 1].abilityTree.columns.map((column, index) => {
              if (column.points <= 2) {
                let corrColumn = `column${index + 1}`
                let pointsOne = column.one
                return (
                  <div key={index} className="cw__33" style={{ display: "flex", alignItems: "flex-start" }}>
                    <div className="item-container">
                      <h3 className="item-container__heading">{charSheetState.charSheet.abilityTree[corrColumn][pointsOne].name}</h3>
                      <h4 className="item-container__terheading">Power {charSheetState.charSheet.abilityTree[corrColumn][pointsOne].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {charSheetState.charSheet.abilityTree[corrColumn][pointsOne].details}
                      </p>
                    </div>
                  </div>
                )
              }
              if (column.points >= 3 && column.points <= 5) {
                let corrColumn = `column${index + 1}`
                let pointsOne = column.one
                let pointsTwo = column.two + 5

                return (
                  <div key={index} className="cw__33" style={{ display: "flex", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
                      <div className="item-container">
                        <h3 className="item-container__heading">{charSheetState.charSheet.abilityTree[corrColumn][pointsTwo].name}</h3>
                        <h4 className="item-container__terheading">Power {charSheetState.charSheet.abilityTree[corrColumn][pointsTwo].power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {charSheetState.charSheet.abilityTree[corrColumn][pointsTwo].details}
                        </p>
                      </div>
                      <div className="item-container">
                        <h3 className="item-container__heading">{charSheetState.charSheet.abilityTree[corrColumn][pointsOne].name}</h3>
                        <h4 className="item-container__terheading">Power {charSheetState.charSheet.abilityTree[corrColumn][pointsOne].power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {charSheetState.charSheet.abilityTree[corrColumn][pointsOne].details}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              }
              if (column.points >= 6 && column.points <= 8) {
                let corrColumn = `column${index + 1}`
                let pointsOne = column.one
                let pointsTwo = column.two + 5
                let pointsThree = column.three + 10
                return (
                  <div key={index} className="cw__33" style={{ display: "flex", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
                      <div className="item-container">
                        <h3 className="item-container__heading">{charSheetState.charSheet.abilityTree[corrColumn][pointsThree].name}</h3>
                        <h4 className="item-container__terheading">Power {charSheetState.charSheet.abilityTree[corrColumn][pointsThree].power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {charSheetState.charSheet.abilityTree[corrColumn][pointsThree].details}
                        </p>
                      </div>
                      <div className="item-container">
                        <h3 className="item-container__heading">{charSheetState.charSheet.abilityTree[corrColumn][pointsTwo].name}</h3>
                        <h4 className="item-container__terheading">Power {charSheetState.charSheet.abilityTree[corrColumn][pointsTwo].power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {charSheetState.charSheet.abilityTree[corrColumn][pointsTwo].details}
                        </p>
                      </div>
                      <div className="item-container">
                        <h3 className="item-container__heading">{charSheetState.charSheet.abilityTree[corrColumn][pointsOne].name}</h3>
                        <h4 className="item-container__terheading">Power {charSheetState.charSheet.abilityTree[corrColumn][pointsOne].power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {charSheetState.charSheet.abilityTree[corrColumn][pointsOne].details}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              }
              if (column.points >= 9) {
                let corrColumn = `column${index + 1}`
                let pointsOne = column.one
                let pointsTwo = column.two + 5
                let pointsThree = column.three + 10
                let pointsFour = column.four + 15
                return (
                  <div key={index} className="cw__33" style={{ display: "flex", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
                      <div className="item-container">
                        <h3 className="item-container__heading">{charSheetState.charSheet.abilityTree[corrColumn][pointsFour].name}</h3>
                        <h4 className="item-container__terheading">Power {charSheetState.charSheet.abilityTree[corrColumn][pointsFour].power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {charSheetState.charSheet.abilityTree[corrColumn][pointsFour].details}
                        </p>
                      </div>
                      <div className="item-container">
                        <h3 className="item-container__heading">{charSheetState.charSheet.abilityTree[corrColumn][pointsThree].name}</h3>
                        <h4 className="item-container__terheading">Power {charSheetState.charSheet.abilityTree[corrColumn][pointsThree].power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {charSheetState.charSheet.abilityTree[corrColumn][pointsThree].details}
                        </p>
                      </div>
                      <div className="item-container">
                        <h3 className="item-container__heading">{charSheetState.charSheet.abilityTree[corrColumn][pointsTwo].name}</h3>
                        <h4 className="item-container__terheading">Power {charSheetState.charSheet.abilityTree[corrColumn][pointsTwo].power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {charSheetState.charSheet.abilityTree[corrColumn][pointsTwo].details}
                        </p>
                      </div>
                      <div className="item-container">
                        <h3 className="item-container__heading">{charSheetState.charSheet.abilityTree[corrColumn][pointsOne].name}</h3>
                        <h4 className="item-container__terheading">Power {charSheetState.charSheet.abilityTree[corrColumn][pointsOne].power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {charSheetState.charSheet.abilityTree[corrColumn][pointsOne].details}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              }
              return ""
            })}
          </div>

          {/* loop through the level ups array to find all the abilities that have already been chosen */}
          {reversedLevelUpsArray.map((level) => {
            return (
              <div key={level.level}>
                <h4 className="item-container__subheading">Level {level.level}</h4>
                <div className="cw__container cw__container--tree">
                  {level.abilityTree.columns.forEach((column) => {
                    if (column.ability) {
                      return (
                        <div className="cw__33" key={column.column}>
                          <div className="item-container">
                            <h3 className="item-container__heading">{column.ability.name}</h3>
                            <h4 className="item-container__subheading">{level.level === 0 ? "Race Ability" : `Power ${column.ability.power}`}</h4>
                            <p>
                              <strong>Details: </strong>
                              {column.ability.description}
                            </p>
                          </div>
                        </div>
                      )
                    } else {
                      return ""
                    }
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className="cw__25">
          <h2 className="heading">Your Abilities</h2>
          <div className="cw__container">
            <button className="button" onClick={openNewAbility}>
              Create New Character Ability
            </button>
            {/* display all custom abilities */}
            {reversedCustomAbilitiesArray.map((ability) => {
              return (
                <div key={ability.id} className="item-container">
                  <h3 className="item-container__heading">{ability.name}</h3>
                  <h4 className="item-container__subheading">{ability.power} Ability</h4>
                  <p>
                    <strong>Details: </strong>
                    {ability.description}
                  </p>
                  <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
                  <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
                    <span onClick={openEditAbility} className="hg__fake-link">
                      EDIT
                    </span>
                    <span>|</span>
                    <span
                      onClick={(e, id) => {
                        deleteAbility(e, ability.id)
                      }}
                      className="hg__fake-link"
                    >
                      DELETE
                    </span>
                  </p>
                </div>
              )
            })}
            {/* display all abilites by most recent power (filtered in CharacterSheet.js) */}
            {reversedAbilityArray.map((ability, index) => {
              return (
                <div key={index} className="item-container">
                  <h3 className="item-container__heading">{ability.name}</h3>
                  <h4 className="item-container__subheading">Power {ability.power}</h4>
                  <p>
                    <strong>Details: </strong>
                    {ability.details}
                  </p>
                </div>
              )
            })}
            {/* display the starting race abilities */}
            {charSheetState.charSheet.levelUps[0].abilityTree.columns.map((column, index) => {
              if (column.ability !== 0) {
                return (
                  <div key={index} className="item-container">
                    <h3 className="item-container__heading">{column.ability.name}</h3>
                    <h4 className="item-container__subheading">Race Ability</h4>
                    <p>
                      <strong>Details: </strong>
                      {column.ability.description ? column.ability.description : column.ability.details}
                    </p>
                  </div>
                )
              }
              return ""
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Abilities
