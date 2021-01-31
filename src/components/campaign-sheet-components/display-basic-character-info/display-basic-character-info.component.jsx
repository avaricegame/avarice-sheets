import React from "react"

const DisplayBasicCharacterInfo = (props) => {
  const {
    characterName,
    raceName,
    className,
    currentHP,
    maxHP,
    armourValue,
    dodgeValue,
    lifeCredits,
  } = props
  return (
    <>
      {characterName ? (
        <p>
          <strong>{characterName}</strong>
        </p>
      ) : null}
      <ul>
        <li>
          <em>Race:</em> {raceName}
        </li>
        {className ? (
          <li>
            <em>Class:</em> {className}
          </li>
        ) : null}
        <li>
          <em>Hit Points:</em> {currentHP} / {maxHP}
        </li>
        <li>
          <em>Armour Value:</em> {armourValue}
        </li>
        <li>
          <em>Dodge Value:</em> {dodgeValue}
        </li>
        <li>
          <em>Life Credits:</em> {lifeCredits}
        </li>
      </ul>
    </>
  )
}

export default DisplayBasicCharacterInfo
