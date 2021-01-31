export const findOnlyActiveNPCS = (npcs) => {
  return npcs.filter((npc) => npc.active)
}

export const findOnlyEnemyNPCS = (npcs) => {
  return npcs.filter((npc) => npc.enemy)
}

export const findOnlyFriendNPCS = (npcs) => {
  return npcs.filter((npc) => !npc.enemy)
}
