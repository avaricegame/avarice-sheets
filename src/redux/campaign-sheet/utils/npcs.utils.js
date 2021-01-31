export const setNPCAsEnemy = (npcs, npcID) => {
  return npcs.map((npc) => {
    return npc.id === npcID ? { ...npc, enemy: true } : npc
  })
}

export const setNPCAsFriend = (npcs, npcID) => {
  return npcs.map((npc) => {
    return npc.id === npcID ? { ...npc, enemy: false } : npc
  })
}

export const toggleActive = (currentCampSheet, interactableIDAndType) => {
  const { id, type } = interactableIDAndType
  console.log(type)
  const {
    inventoryItems: { weapons, wearables, items },
    npcs,
    environment,
  } = currentCampSheet

  console.log(weapons)

  if (type === "weapon") {
    return weapons.map((weapon) => {
      return weapon.id === id ? { ...weapon, active: !weapon.active } : weapon
    })
  } else if (type === "wearable") {
    return wearables.map((wearable) => {
      return wearable.id === id ? { ...wearable, active: !wearable.active } : wearable
    })
  } else if (type === "item") {
    return items.map((item) => {
      return item.id === id ? { ...item, active: !item.active } : item
    })
  } else if (type === "npc") {
    return npcs.map((npc) => {
      return npc.id === id ? { ...npc, active: !npc.active } : npc
    })
  } else if (type === "environment") {
    return environment.map((envir) => {
      return envir.id === id ? { ...envir, active: "hello" } : envir
    })
  }
}
