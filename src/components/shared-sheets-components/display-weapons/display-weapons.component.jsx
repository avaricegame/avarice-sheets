import React from "react"

import WeaponCard from "../weapon-card/weapon-card.component"

const DisplayWeapons = ({
  weapons,
  blue,
  quatheading,
  edit,
  equip,
  activate,
  moveEdit,
  whatToEdit,
}) => (
  <>
    {weapons.map((weapon, index) => {
      return (
        <WeaponCard
          weapon={weapon}
          blue={blue}
          quatheading={quatheading}
          key={index}
          edit={edit}
          equip={equip}
          activate={activate}
          moveEdit={moveEdit}
          whatToEdit={whatToEdit}
        />
      )
    })}
  </>
)

export default DisplayWeapons
