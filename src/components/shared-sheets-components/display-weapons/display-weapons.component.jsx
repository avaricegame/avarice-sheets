import React from "react"

import WeaponCard from "../weapon-card/weapon-card.component"

const DisplayWeapons = ({ weapons, blue, quatheading, edit, equip, activate, moveEdit }) => (
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
        />
      )
    })}
  </>
)

export default DisplayWeapons
