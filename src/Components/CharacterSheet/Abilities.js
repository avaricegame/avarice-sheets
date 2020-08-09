import React from "react"
import Axios from "axios"

function Abilities(props) {
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
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  const reversedLevelUpsArray = props.charSheet.levelUps.map((level) => level).reverse()
  const reversedCustomAbilitiesArray = props.charSheet.customAbilities.map((ability) => ability).reverse()
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
            {props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree.map((column, index) => {
              if (column.points <= 2) {
                let corrColumn = `column${index + 1}`
                let pointsOne = column.one
                return (
                  <div key={index} className="cw__33">
                    <div className="item-container">
                      <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsOne].name}</h3>
                      <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsOne].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {props.abilityTree[corrColumn][pointsOne].details}
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
                  <div key={index} className="cw__33">
                    <div className="item-container">
                      <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsTwo].name}</h3>
                      <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsTwo].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {props.abilityTree[corrColumn][pointsTwo].details}
                      </p>
                    </div>
                    <div className="item-container">
                      <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsOne].name}</h3>
                      <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsOne].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {props.abilityTree[corrColumn][pointsOne].details}
                      </p>
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
                  <div key={index} className="cw__33">
                    <div className="item-container">
                      <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsThree].name}</h3>
                      <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsThree].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {props.abilityTree[corrColumn][pointsThree].details}
                      </p>
                    </div>
                    <div className="item-container">
                      <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsTwo].name}</h3>
                      <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsTwo].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {props.abilityTree[corrColumn][pointsTwo].details}
                      </p>
                    </div>
                    <div className="item-container">
                      <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsOne].name}</h3>
                      <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsOne].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {props.abilityTree[corrColumn][pointsOne].details}
                      </p>
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
                  <div key={index} className="cw__33">
                    <div className="item-container">
                      <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsFour].name}</h3>
                      <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsFour].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {props.abilityTree[corrColumn][pointsFour].details}
                      </p>
                    </div>
                    <div className="item-container">
                      <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsThree].name}</h3>
                      <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsThree].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {props.abilityTree[corrColumn][pointsThree].details}
                      </p>
                    </div>
                    <div className="item-container">
                      <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsTwo].name}</h3>
                      <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsTwo].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {props.abilityTree[corrColumn][pointsTwo].details}
                      </p>
                    </div>
                    <div className="item-container">
                      <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsOne].name}</h3>
                      <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsOne].power}</h4>
                      <p>
                        <strong>Details: </strong>
                        {props.abilityTree[corrColumn][pointsOne].details}
                      </p>
                    </div>
                  </div>
                )
              }
              return ""
            })}
          </div>

          {reversedLevelUpsArray.map((level, index) => {
            if (level.level === 0) {
              return (
                <div key={level.level}>
                  <h4 className="item-container__subheading">Level {level.level}</h4>
                  <div className="cw__container cw__container--tree">
                    <div className="cw__33">
                      <div className="item-container">
                        <h3 className="item-container__heading">Starting {level.abilityTree[0].ability.name}</h3>
                        <h4 className="item-container__subheading">Power {level.abilityTree[0].ability.power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {level.abilityTree[0].ability.description}
                        </p>
                      </div>
                    </div>
                    <div className="cw__33">
                      <div className="item-container">
                        <h3 className="item-container__heading">Starting {level.abilityTree[2].ability.name}</h3>
                        <h4 className="item-container__subheading">Power {level.abilityTree[2].ability.power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {level.abilityTree[2].ability.description}
                        </p>
                      </div>
                    </div>
                    <div className="cw__33"></div>
                  </div>
                </div>
              )
            }

            if (level.abilityTree[0].ability !== 0) {
              return (
                <div key={level.level}>
                  <h4 className="item-container__subheading">Level {level.level}</h4>
                  <div className="cw__container cw__container--tree">
                    <div className="cw__33">
                      <div className="item-container">
                        <h3 className="item-container__heading">{level.abilityTree[0].ability.name}</h3>
                        <h4 className="item-container__subheading">Power {level.abilityTree[0].ability.power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {level.abilityTree[0].ability.description}
                        </p>
                      </div>
                    </div>
                    <div className="cw__33"></div>
                    <div className="cw__33"></div>
                  </div>
                </div>
              )
            }

            if (level.abilityTree[1].ability !== 0) {
              return (
                <div key={level.level}>
                  <h4 className="item-container__subheading">Level {level.level}</h4>
                  <div className="cw__container cw__container--tree">
                    <div className="cw__33"></div>
                    <div className="cw__33">
                      <div className="item-container">
                        <h3 className="item-container__heading">{level.abilityTree[1].ability.name}</h3>
                        <h4 className="item-container__subheading">Power {level.abilityTree[1].ability.power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {level.abilityTree[1].ability.description}
                        </p>
                      </div>
                    </div>
                    <div className="cw__33"></div>
                  </div>
                </div>
              )
            }

            if (level.abilityTree[2].ability !== 0) {
              return (
                <div key={level.level}>
                  <h4 className="item-container__subheading">Level {level.level}</h4>
                  <div className="cw__container cw__container--tree">
                    <div className="cw__33"></div>
                    <div className="cw__33"></div>
                    <div className="cw__33">
                      <div className="item-container">
                        <h3 className="item-container__heading">{level.abilityTree[2].ability.name}</h3>
                        <h4 className="item-container__subheading">Power {level.abilityTree[2].ability.power}</h4>
                        <p>
                          <strong>Details: </strong>
                          {level.abilityTree[2].ability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return index
          })}
        </div>

        <div className="cw__25">
          <h2 className="heading">Your Abilities</h2>
          <div className="cw__container">
            <button onClick={openNewAbility}>Create New Character Ability</button>
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
            {props.abilityArray.map((ability, index) => {
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Abilities
