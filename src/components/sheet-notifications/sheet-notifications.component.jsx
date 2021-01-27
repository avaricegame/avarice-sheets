import React from "react"

const SheetNotifications = () => {
  return (
    <>
      <p>
        <strong>Player 1: </strong>
        <em className="highlight">Attacked</em> with WEAPON and rolled 17
      </p>
      <p>
        <strong>Player 2: </strong>
        <em className="highlight">Used Ability</em> ABILITY and rolled 17
      </p>
      <p>
        <strong>Player 1: </strong>
        <em className="highlight">Paid Money</em> 30 GOLD to PLAYER 2
      </p>
      <p>
        <strong>Player 1: </strong>
        <em className="highlight">Sold Item</em> WEAPON / WEARABLE / ITEM
      </p>
      <p>
        <strong>Player 1: </strong>
        <em className="highlight">Rolled D20</em> and got 17
      </p>
      <p>
        <strong>Player 1: </strong>
        <em className="highlight">Leveled Up</em> to level 5
      </p>
      <p>
        <strong>Player 1: </strong>
        <em className="highlight">Added Excelence Chip</em>
      </p>
    </>
  )
}

export default SheetNotifications
