export const findEquippedInventoryItems = (array) => {
  return array.filter((inventoryItem) => inventoryItem.equipped)
}

export const calculateArmourValueFromEquippedWearables = (equippedWearables) => {
  return equippedWearables
    .map((wearable) => wearable.armourValue)
    .reduce((total, wearableArmourValue) => total + wearableArmourValue)
}

export const restructureEquippedWearables = (equippedWearables) => {
  let newEquippedWearables = {
    head: {
      name: "-",
      armourValue: "-",
      bodyArea: "Head",
      augments: "",
    },
    face: {
      name: "-",
      armourValue: "-",
      bodyArea: "Face",
      augments: "",
    },
    torso: {
      name: "-",
      armourValue: "-",
      bodyArea: "Torso",
      augments: "",
    },
    arms: {
      name: "-",
      armourValue: "-",
      bodyArea: "Arms",
      augments: "",
    },
    hands: {
      name: "-",
      armourValue: "-",
      bodyArea: "Hands",
      augments: "",
    },
    legs: {
      name: "-",
      armourValue: "-",
      bodyArea: "Legs",
      augments: "",
    },
    feet: {
      name: "-",
      armourValue: "-",
      bodyArea: "Feet",
      augments: "",
    },
  }

  equippedWearables.map((wearable) => {
    switch (wearable.bodyArea.toUpperCase()) {
      case "HEAD":
        newEquippedWearables.head = wearable
        determineWhetherWearableAugments(newEquippedWearables.head)
        break
      case "FACE":
        newEquippedWearables.face = wearable
        determineWhetherWearableAugments(newEquippedWearables.face)
        break
      case "TORSO":
        newEquippedWearables.torso = wearable
        determineWhetherWearableAugments(newEquippedWearables.torso)
        break
      case "ARMS":
        newEquippedWearables.arms = wearable
        determineWhetherWearableAugments(newEquippedWearables.arms)
        break
      case "HANDS":
        newEquippedWearables.hands = wearable
        determineWhetherWearableAugments(newEquippedWearables.hands)
        break
      case "LEGS":
        newEquippedWearables.legs = wearable
        determineWhetherWearableAugments(newEquippedWearables.legs)
        break
      case "FEET":
        newEquippedWearables.feet = wearable
        determineWhetherWearableAugments(newEquippedWearables.feet)
        break
      default:
        break
    }
    return null
  })

  const { head, face, torso, arms, hands, legs, feet } = newEquippedWearables

  return [head, face, torso, arms, hands, legs, feet]
}

const determineWhetherWearableAugments = (wearable) => {
  const { statModifiers } = wearable

  statModifiers.forEach((stat) => {
    if (stat.value === 0) {
      wearable.augments = false
    } else {
      wearable.augments = true
    }
  })
}
