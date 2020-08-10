import React, { useState } from "react"
import Axios from "axios"

function LevelUp(props) {
  const [currentAbility, setCurrentAbility] = useState("a")
  const close = () => {
    props.levelUpHandler(false)
  }
  const setCurrentAbilityHandler = (name, power, description) => {
    setCurrentAbility({ name: name, power: power, description: description })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    let newBaseStats
    if (e.target.baseStats.value === "PHY") {
      newBaseStats = [props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[0] + 1, props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[1], props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[2], props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[3]]
    } else if (e.target.baseStats.value === "INT") {
      newBaseStats = [props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[0] + 1, props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[1] + 1, props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[2], props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[3]]
    } else if (e.target.baseStats.value === "REF") {
      newBaseStats = [props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[0] + 1, props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[1], props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[2] + 1, props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[3]]
    } else if (e.target.baseStats.value === "CHA") {
      newBaseStats = [props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[0] + 1, props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[1], props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[2], props.charSheet.levelUps[props.charSheet.levelUps.length - 1].baseStats[3] + 1]
    }
    let newSkills
    if (e.target.skills.value === "Skill 1") {
      newSkills = [{ name: "Skill 1", natMod: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].skills[0].natMod + 1 }]
    }
    let newProficiencies
    if (e.target.proficiency.value === "Proficiency 1") {
      newProficiencies = [{ name: "Proficiency 1", value: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].proficiency[0].value + 1 }]
    }
    let newAbilityTree
    let column1Copy = {
      column: 1,
      points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].points,
      one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].one,
      two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].two,
      three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].three,
      four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].four,
      ability: 0,
    }
    let column2Copy = {
      column: 2,
      points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].points,
      one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].one,
      two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].two,
      three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].three,
      four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].four,
      ability: 0,
    }
    let column3Copy = {
      column: 3,
      points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].points,
      one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].one,
      two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].two,
      three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].three,
      four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].four,
      ability: 0,
    }
    if (e.target.ability.value === "011" || e.target.ability.value === "012" || e.target.ability.value === "013" || e.target.ability.value === "014" || e.target.ability.value === "015") {
      newAbilityTree = [
        {
          column: 1,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].one + 1,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].two,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].three,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].four,
          ability: currentAbility,
        },
        column2Copy,
        column3Copy,
      ]
    } else if (e.target.ability.value === "021" || e.target.ability.value === "022" || e.target.ability.value === "023" || e.target.ability.value === "024" || e.target.ability.value === "025") {
      newAbilityTree = [
        {
          column: 1,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].one,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].two + 1,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].three,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].four,
          ability: currentAbility,
        },
        column2Copy,
        column3Copy,
      ]
    } else if (e.target.ability.value === "031" || e.target.ability.value === "032" || e.target.ability.value === "033" || e.target.ability.value === "034" || e.target.ability.value === "035") {
      newAbilityTree = [
        {
          column: 1,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].one,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].two,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].three + 1,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].four,
          ability: currentAbility,
        },
        column2Copy,
        column3Copy,
      ]
    } else if (e.target.ability.value === "041" || e.target.ability.value === "042" || e.target.ability.value === "043" || e.target.ability.value === "044" || e.target.ability.value === "045") {
      newAbilityTree = [
        {
          column: 1,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].one,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].two,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].three,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[0].four + 1,
          ability: currentAbility,
        },
        column2Copy,
        column3Copy,
      ]
    } else if (e.target.ability.value === "111" || e.target.ability.value === "112" || e.target.ability.value === "113" || e.target.ability.value === "114" || e.target.ability.value === "115") {
      newAbilityTree = [
        column1Copy,
        {
          column: 2,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].one + 1,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].two,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].three,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].four,
          ability: currentAbility,
        },
        column3Copy,
      ]
    } else if (e.target.ability.value === "121" || e.target.ability.value === "122" || e.target.ability.value === "123" || e.target.ability.value === "124" || e.target.ability.value === "125") {
      newAbilityTree = [
        column1Copy,
        {
          column: 2,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].one,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].two + 1,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].three,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].four,
          ability: currentAbility,
        },
        column3Copy,
      ]
    } else if (e.target.ability.value === "131" || e.target.ability.value === "132" || e.target.ability.value === "133" || e.target.ability.value === "134" || e.target.ability.value === "135") {
      newAbilityTree = [
        column1Copy,
        {
          column: 2,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].one,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].two,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].three + 1,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].four,
          ability: currentAbility,
        },
        column3Copy,
      ]
    } else if (e.target.ability.value === "141" || e.target.ability.value === "142" || e.target.ability.value === "143" || e.target.ability.value === "144" || e.target.ability.value === "145") {
      newAbilityTree = [
        column1Copy,
        {
          column: 2,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].one,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].two,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].three,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[1].four + 1,
          ability: currentAbility,
        },
        column3Copy,
      ]
    } else if (e.target.ability.value === "211" || e.target.ability.value === "212" || e.target.ability.value === "213" || e.target.ability.value === "214" || e.target.ability.value === "215") {
      newAbilityTree = [
        column1Copy,
        column2Copy,
        {
          column: 3,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].one + 1,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].two,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].three,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].four,
          ability: currentAbility,
        },
      ]
    } else if (e.target.ability.value === "221" || e.target.ability.value === "222" || e.target.ability.value === "223" || e.target.ability.value === "224" || e.target.ability.value === "225") {
      newAbilityTree = [
        column1Copy,
        column2Copy,
        {
          column: 3,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].one,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].two + 1,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].three,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].four,
          ability: currentAbility,
        },
      ]
    } else if (e.target.ability.value === "231" || e.target.ability.value === "232" || e.target.ability.value === "233" || e.target.ability.value === "234" || e.target.ability.value === "235") {
      newAbilityTree = [
        column1Copy,
        column2Copy,
        {
          column: 3,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].one,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].two,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].three + 1,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].four,
          ability: currentAbility,
        },
      ]
    } else if (e.target.ability.value === "241" || e.target.ability.value === "242" || e.target.ability.value === "243" || e.target.ability.value === "244" || e.target.ability.value === "245") {
      newAbilityTree = [
        column1Copy,
        column2Copy,
        {
          column: 3,
          points: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].points + 1,
          one: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].one,
          two: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].two,
          three: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].three,
          four: props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree[2].four + 1,
          ability: currentAbility,
        },
      ]
    }
    if (newBaseStats && newSkills && newProficiencies && newAbilityTree) {
      Axios.post("/character/levelup", {
        CSID: props.CSID,
        level: props.charSheet.level + 1,
        baseStats: newBaseStats,
        skills: newSkills,
        proficiency: newProficiencies,
        abilityTree: newAbilityTree,
      })
        .then(function (response) {
          console.log(response)
          props.levelUpHandler(false)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  return (
    <div className="popup-bg">
      <div className="popup" style={{ width: "70vw", overflowY: "scroll" }}>
        <form onSubmit={(e) => submitHandler(e)}>
          <fieldset>
            <h6 className="edit-h6">Level Up</h6>
            <label htmlFor="baseStats">Choose a Base Stat to Level Up:</label>
            <span style={{ display: "flex", alignItems: "center" }}>
              <input required type="radio" name="baseStats" value="PHY" /> Physique (PHY)
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <input required type="radio" name="baseStats" value="INT" /> Intelligence (INT)
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <input required type="radio" name="baseStats" value="REF" /> Reflex (REF)
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <input required type="radio" name="baseStats" value="CHA" /> Charisma (CHA)
            </span>
            <label htmlFor="skills">Choose a Skill to Level Up:</label>
            <span style={{ display: "flex", alignItems: "center" }}>
              <input required type="radio" name="skills" value="Skill 1" /> Skill 1
            </span>
            <label htmlFor="proficiency">Choose a Proficiency to Level Up:</label>
            <span style={{ display: "flex", alignItems: "center" }}>
              <input required type="radio" name="proficiency" value="Proficiency 1" /> Proficiency 1
            </span>
            <label htmlFor="abilityTree">Choose a New Ability:</label>
            <div className="cw__container cw__container--tree">
              {props.charSheet.levelUps[props.charSheet.levelUps.length - 1].abilityTree.map((column, index) => {
                if (column.points <= 2) {
                  let corrColumn = `column${index + 1}`
                  let pointsOne = column.one
                  return (
                    <div key={index}>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: ".5rem", marginLeft: ".5rem" }}>
                        <input
                          style={{ width: "3rem", cursor: "pointer" }}
                          required
                          type="radio"
                          name="ability"
                          value={`${index}1${props.abilityTree[corrColumn][pointsOne].power}`}
                          onClick={(name, power, description) => {
                            setCurrentAbilityHandler(props.abilityTree[corrColumn][pointsOne].name, props.abilityTree[corrColumn][pointsOne].power, props.abilityTree[corrColumn][pointsOne].description || props.abilityTree[corrColumn][pointsOne].details)
                          }}
                        />
                        <div className="item-container">
                          <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsOne].name}</h3>
                          <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsOne].power}</h4>
                          <p>
                            <strong>Details: </strong>
                            {props.abilityTree[corrColumn][pointsOne].details}
                          </p>
                        </div>
                      </span>
                    </div>
                  )
                }
                if (column.points >= 3 && column.points <= 5) {
                  let corrColumn = `column${index + 1}`
                  let pointsOne = column.one
                  let pointsTwo = column.two + 5

                  return (
                    <div key={index}>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: ".5rem", marginLeft: ".5rem" }}>
                        <input
                          style={{ width: "3rem", cursor: "pointer" }}
                          required
                          type="radio"
                          name="ability"
                          value={`${index}1${props.abilityTree[corrColumn][pointsTwo].power}`}
                          onClick={(name, power, description) => {
                            setCurrentAbilityHandler(props.abilityTree[corrColumn][pointsTwo].name, props.abilityTree[corrColumn][pointsTwo].power, props.abilityTree[corrColumn][pointsTwo].description || props.abilityTree[corrColumn][pointsTwo].details)
                          }}
                        />
                        <div className="item-container">
                          <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsTwo].name}</h3>
                          <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsTwo].power}</h4>
                          <p>
                            <strong>Details: </strong>
                            {props.abilityTree[corrColumn][pointsTwo].details}
                          </p>
                        </div>
                      </span>
                      <hr className="hg__hr" />
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: ".5rem", marginLeft: ".5rem" }}>
                        <input
                          style={{ width: "3rem", cursor: "pointer" }}
                          required
                          type="radio"
                          name="ability"
                          value={`${index}1${props.abilityTree[corrColumn][pointsOne].power}`}
                          onClick={(name, power, description) => {
                            setCurrentAbilityHandler(props.abilityTree[corrColumn][pointsOne].name, props.abilityTree[corrColumn][pointsOne].power, props.abilityTree[corrColumn][pointsOne].description || props.abilityTree[corrColumn][pointsOne].details)
                          }}
                        />
                        <div className="item-container">
                          <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsOne].name}</h3>
                          <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsOne].power}</h4>
                          <p>
                            <strong>Details: </strong>
                            {props.abilityTree[corrColumn][pointsOne].details}
                          </p>
                        </div>
                      </span>
                    </div>
                  )
                }
                if (column.points >= 6 && column.points <= 8) {
                  let corrColumn = `column${index + 1}`
                  let pointsOne = column.one
                  let pointsTwo = column.two + 5
                  let pointsThree = column.three + 10
                  return (
                    <div key={index}>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: ".5rem", marginLeft: ".5rem" }}>
                        <input
                          style={{ width: "3rem", cursor: "pointer" }}
                          required
                          type="radio"
                          name="ability"
                          value={`${index}1${props.abilityTree[corrColumn][pointsThree].power}`}
                          onClick={(name, power, description) => {
                            setCurrentAbilityHandler(props.abilityTree[corrColumn][pointsThree].name, props.abilityTree[corrColumn][pointsThree].power, props.abilityTree[corrColumn][pointsThree].description || props.abilityTree[corrColumn][pointsThree].details)
                          }}
                        />
                        <div className="item-container">
                          <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsThree].name}</h3>
                          <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsThree].power}</h4>
                          <p>
                            <strong>Details: </strong>
                            {props.abilityTree[corrColumn][pointsThree].details}
                          </p>
                        </div>
                      </span>
                      <hr className="hg__hr" />
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: ".5rem", marginLeft: ".5rem" }}>
                        <input
                          style={{ width: "3rem", cursor: "pointer" }}
                          required
                          type="radio"
                          name="ability"
                          value={`${index}1${props.abilityTree[corrColumn][pointsTwo].power}`}
                          onClick={(name, power, description) => {
                            setCurrentAbilityHandler(props.abilityTree[corrColumn][pointsTwo].name, props.abilityTree[corrColumn][pointsTwo].power, props.abilityTree[corrColumn][pointsTwo].description || props.abilityTree[corrColumn][pointsTwo].details)
                          }}
                        />
                        <div className="item-container">
                          <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsTwo].name}</h3>
                          <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsTwo].power}</h4>
                          <p>
                            <strong>Details: </strong>
                            {props.abilityTree[corrColumn][pointsTwo].details}
                          </p>
                        </div>
                      </span>
                      <hr className="hg__hr" />
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: ".5rem", marginLeft: ".5rem" }}>
                        <input
                          style={{ width: "3rem", cursor: "pointer" }}
                          required
                          type="radio"
                          name="ability"
                          value={`${index}1${props.abilityTree[corrColumn][pointsOne].power}`}
                          onClick={(name, power, description) => {
                            setCurrentAbilityHandler(props.abilityTree[corrColumn][pointsOne].name, props.abilityTree[corrColumn][pointsOne].power, props.abilityTree[corrColumn][pointsOne].description || props.abilityTree[corrColumn][pointsOne].details)
                          }}
                        />
                        <div className="item-container">
                          <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsOne].name}</h3>
                          <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsOne].power}</h4>
                          <p>
                            <strong>Details: </strong>
                            {props.abilityTree[corrColumn][pointsOne].details}
                          </p>
                        </div>
                      </span>
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
                    <div key={index}>
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: ".5rem", marginLeft: ".5rem" }}>
                        <input
                          style={{ width: "3rem", cursor: "pointer" }}
                          required
                          type="radio"
                          name="ability"
                          value={`${index}1${props.abilityTree[corrColumn][pointsFour].power}`}
                          onClick={(name, power, description) => {
                            setCurrentAbilityHandler(props.abilityTree[corrColumn][pointsFour].name, props.abilityTree[corrColumn][pointsFour].power, props.abilityTree[corrColumn][pointsFour].description || props.abilityTree[corrColumn][pointsFour].details)
                          }}
                        />
                        <div className="item-container">
                          <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsFour].name}</h3>
                          <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsFour].power}</h4>
                          <p>
                            <strong>Details: </strong>
                            {props.abilityTree[corrColumn][pointsFour].details}
                          </p>
                        </div>
                      </span>
                      <hr className="hg__hr" />
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: ".5rem", marginLeft: ".5rem" }}>
                        <input
                          style={{ width: "3rem", cursor: "pointer" }}
                          required
                          type="radio"
                          name="ability"
                          value={`${index}1${props.abilityTree[corrColumn][pointsThree].power}`}
                          onClick={(name, power, description) => {
                            setCurrentAbilityHandler(props.abilityTree[corrColumn][pointsThree].name, props.abilityTree[corrColumn][pointsThree].power, props.abilityTree[corrColumn][pointsThree].description || props.abilityTree[corrColumn][pointsThree].details)
                          }}
                        />
                        <div className="item-container">
                          <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsThree].name}</h3>
                          <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsThree].power}</h4>
                          <p>
                            <strong>Details: </strong>
                            {props.abilityTree[corrColumn][pointsThree].details}
                          </p>
                        </div>
                      </span>
                      <hr className="hg__hr" />
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: ".5rem", marginLeft: ".5rem" }}>
                        <input
                          style={{ width: "3rem", cursor: "pointer" }}
                          required
                          type="radio"
                          name="ability"
                          value={`${index}1${props.abilityTree[corrColumn][pointsTwo].power}`}
                          onClick={(name, power, description) => {
                            setCurrentAbilityHandler(props.abilityTree[corrColumn][pointsTwo].name, props.abilityTree[corrColumn][pointsTwo].power, props.abilityTree[corrColumn][pointsTwo].description || props.abilityTree[corrColumn][pointsTwo].details)
                          }}
                        />
                        <div className="item-container">
                          <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsTwo].name}</h3>
                          <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsTwo].power}</h4>
                          <p>
                            <strong>Details: </strong>
                            {props.abilityTree[corrColumn][pointsTwo].details}
                          </p>
                        </div>
                      </span>
                      <hr className="hg__hr" />
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: ".5rem", marginLeft: ".5rem" }}>
                        <input
                          style={{ width: "3rem", cursor: "pointer" }}
                          required
                          type="radio"
                          name="ability"
                          value={`${index}1${props.abilityTree[corrColumn][pointsOne].power}`}
                          onClick={(name, power, description) => {
                            setCurrentAbilityHandler(props.abilityTree[corrColumn][pointsOne].name, props.abilityTree[corrColumn][pointsOne].power, props.abilityTree[corrColumn][pointsOne].description || props.abilityTree[corrColumn][pointsOne].details)
                          }}
                        />
                        <div className="item-container">
                          <h3 className="item-container__heading">{props.abilityTree[corrColumn][pointsOne].name}</h3>
                          <h4 className="item-container__terheading">Power {props.abilityTree[corrColumn][pointsOne].power}</h4>
                          <p>
                            <strong>Details: </strong>
                            {props.abilityTree[corrColumn][pointsOne].details}
                          </p>
                        </div>
                      </span>
                    </div>
                  )
                }
                return ""
              })}
            </div>
            <input type="submit" className="submit-button" value="Level Up" />
          </fieldset>
        </form>
        <div onClick={close} className="close-button" style={{ padding: "3rem 1rem" }}>
          Close Form
        </div>
      </div>
    </div>
  )
}

export default LevelUp
