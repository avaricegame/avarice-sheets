export const findOnlyActiveInteractables = (interactables) => {
  return interactables.filter((interactable) => interactable.active)
}

export const findOnlyInactiveInteractables = (interactables) => {
  return interactables.filter((interactable) => !interactable.active)
}

export const findOnlyEnemyNPCS = (npcs) => {
  return npcs.filter((npc) => npc.enemy)
}

export const findOnlyFriendNPCS = (npcs) => {
  return npcs.filter((npc) => !npc.enemy)
}
