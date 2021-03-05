import CharSheetActionTypes from "./character-sheet.types"
import CharPageActionTypes from "./pages/pages.types"

import { makeACheck, levelUp, takeARest, loadAbilitiesFromLoadout } from "./utils/gameplay.utils"
import {
  equipWeapon,
  unequipWeapon,
  equipItem,
  unequipItem,
  equipWearable,
  unequipWearable,
  addNewOrEditWeapon,
  addNewOrEditWearable,
  addNewOrEditItem,
} from "./utils/inventory.utils"

const INITIAL_STATE = {
  currentCharSheet: null,
  isCharSheetFetching: false,
  errorMessage: undefined,
  doesCharacterSheetExist: true,
  doesUserHavePermission: true,
}

const charSheetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_START:
      return {
        ...state,
        isCharSheetFetching: true,
      }
    case CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_SUCCESS:
      return {
        ...state,
        isCharSheetFetching: false,
        errorMessage: undefined,
        doesCharacterSheetExist: true,
        doesUserHavePermission: true,
        currentCharSheet: action.payload,
      }
    case CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_FAILURE_NONE_FOUND:
      console.log(action.payload)
      return {
        ...state,
        isCharSheetFetching: false,
        errorMessage: action.payload,
        doesCharacterSheetExist: false,
      }
    case CharSheetActionTypes.FETCH_CURRENT_CHAR_SHEET_FAILURE_NO_PERMISSION:
      return {
        ...state,
        isCharSheetFetching: false,
        errorMessage: action.payload,
        doesUserHavePermission: false,
      }
    case CharPageActionTypes.MAKE_A_CHECK:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          stats: makeACheck(state.currentCharSheet.stats, action.payload),
        },
      }
    case CharPageActionTypes.EQUIP_WEAPON:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          weapons: equipWeapon(state.currentCharSheet.weapons, action.payload),
        },
      }
    case CharPageActionTypes.UNEQUIP_WEAPON:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          weapons: unequipWeapon(state.currentCharSheet.weapons, action.payload),
        },
      }
    case CharPageActionTypes.EQUIP_WEARABLE:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          wearables: equipWearable(state.currentCharSheet.wearables, action.payload),
        },
      }
    case CharPageActionTypes.UNEQUIP_WEARABLE:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          wearables: unequipWearable(state.currentCharSheet.wearables, action.payload),
        },
      }
    case CharPageActionTypes.EQUIP_ITEM:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          items: equipItem(state.currentCharSheet.items, action.payload),
        },
      }
    case CharPageActionTypes.UNEQUIP_ITEM:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          items: unequipItem(state.currentCharSheet.items, action.payload),
        },
      }
    case CharPageActionTypes.PAY_OR_RECIEVE_MONEY:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          lifeCredits: state.currentCharSheet.lifeCredits + action.payload,
        },
      }
    case CharPageActionTypes.TAKE_OR_HEAL_DAMAGE:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          currentHP: state.currentCharSheet.currentHP + action.payload,
        },
      }
    case CharPageActionTypes.ADD_NEW_OR_EDIT_WEAPON:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          weapons: addNewOrEditWeapon(state.currentCharSheet.weapons, action.payload),
        },
      }
    case CharPageActionTypes.ADD_NEW_OR_EDIT_ITEM:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          items: addNewOrEditItem(state.currentCharSheet.items, action.payload),
        },
      }
    case CharPageActionTypes.ADD_NEW_OR_EDIT_WEARABLE:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          wearables: addNewOrEditWearable(state.currentCharSheet.wearables, action.payload),
        },
      }
    case CharPageActionTypes.LEVEL_UP:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          level: state.currentCharSheet.level + 1,
          abilities: {
            ...state.currentCharSheet.abilities,
            abilities: levelUp(state.currentCharSheet.abilities.abilities, action.payload),
          },
        },
      }
    case CharPageActionTypes.TAKE_A_REST:
      return {
        ...state,
        currentCharSheet: {
          ...state.currentCharSheet,
          stats: takeARest(state.currentCharSheet.stats, action.payload.type),
          abilities: {
            ...state.currentCharSheet.abilities,
            abilities: loadAbilitiesFromLoadout(
              state.currentCharSheet.abilities.abilities,
              action.payload.abilities
            ),
          },
        },
      }
    default:
      return state
  }
}

export default charSheetReducer
