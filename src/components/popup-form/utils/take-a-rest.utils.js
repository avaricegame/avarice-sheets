export const returnOnlyEquippedAbilityTypesAsObject = (abilities) => {
  const equippedAbilities = abilities.map((ability) => {
    return { ...ability, equippedAbility: ability.types.find((abil) => abil.equipped) }
  })

  return {
    ability1: equippedAbilities.find((ability) => ability.id === "1"),
    ability2: equippedAbilities.find((ability) => ability.id === "2"),
    ability3: equippedAbilities.find((ability) => ability.id === "3"),
    ability4: equippedAbilities.find((ability) => ability.id === "4"),
    ability5: equippedAbilities.find((ability) => ability.id === "5"),
  }
}
