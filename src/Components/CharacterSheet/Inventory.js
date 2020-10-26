import React, { useState, useContext } from "react"
import Axios from "axios"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"
import { useEffect } from "react"

function Inventory(props) {
  const charSheetState = useContext(StateContext)
  const charSheetDispatch = useContext(DispatchContext)

  const flashMessageDispatch = useContext(DispatchContext)

  const openPayMoney = () => {
    props.payMoneyHandler(true)
  }
  const openRecieveMoney = () => {
    props.recieveMoneyHandler(true)
  }
  const openNewWeapon = () => {
    props.newWeaponHandler(true)
  }
  const openNewWearable = () => {
    props.newWearableHandler(true)
  }
  const openNewItem = () => {
    props.newItemHandler(true)
  }
  const openEditSuronis = () => {
    props.editSuronisHandler(true)
  }
  const deleteWeapon = (e, id) => {
    console.log(e)
    if (window.confirm("Are you sure you want to delete this weapon? This action cannot be undone.")) {
      Axios.post("/character/deleteweapon", {
        CSID: props.CSID,
        id: id,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "deleteWeapon",
            value: id,
          })
          flashMessageDispatch({
            type: "addNewFlashMessage",
            value: `You have deleted ${currentWeapon.name}`,
          })
          setCurrentWeapon("a")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const deleteWearable = (e, id) => {
    if (window.confirm("Are you sure you want to delete this wearable? This action cannot be undone.")) {
      Axios.post("/character/deletewearable", {
        CSID: props.CSID,
        id: id,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "deleteWearable",
            value: id,
          })
          setCurrentWearable("a")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const deleteItem = (e, id) => {
    if (window.confirm("Are you sure you want to delete this item? This action cannot be undone.")) {
      Axios.post("/character/deleteitem", {
        CSID: props.CSID,
        id: id,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "deleteItem",
            value: id,
          })
          setCurrentItem("a")
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  const equipWeapon = (e, id, equipped) => {
    if (equipped) {
      Axios.post("/character/equipweapon", {
        CSID: props.CSID,
        id: id,
        equipped: false,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "unequipWeapon",
            value: id,
          })
          setCurrentWeapon("a")
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      if (currentWeapon.holstersReq + props.holstersUsed > props.holstersAvailable) {
        alert(`You do not have enough holsters available to equip ${currentWeapon.name}. If you would like to equip ${currentWeapon.name}, please unequip a different weapon to free up holsters.`)
      } else {
        Axios.post("/character/equipweapon", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWeapon",
              value: id,
            })
            setCurrentWeapon("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
  const equipWearable = (e, id, equipped) => {
    if (equipped) {
      if (props.slotsAvailable - currentWearable.slots >= props.slotsUsed && props.holstersAvailable - currentWearable.holsters >= props.holstersUsed) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: false,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "unequipWearable",
              value: id,
            })
            setCurrentWearable("a")
            //setWearableSelect("")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        alert(`You cannot unequip ${currentWearable.name}, because it would remove holsters or slots that you are currently using. If you want to unequip ${currentWearable.name}, unequip enough weapons or items to do so.`)
      }
    } else {
      if (currentWearable.bodyArea === "base" && base) {
        if (window.confirm(`You already have ${base.name} equpped to your base. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "base" && !base) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "head" && head) {
        if (window.confirm(`You already have ${base.name} equpped to your head. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "head" && !head) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "face" && face) {
        if (window.confirm(`You already have ${base.name} equpped to your face. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "face" && !face) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "neck" && neck) {
        if (window.confirm(`You already have ${base.name} equpped to your neck. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "neck" && !neck) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "torso" && torso) {
        if (window.confirm(`You already have ${base.name} equpped to your torso. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "torso" && !torso) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "back" && back) {
        if (window.confirm(`You already have ${base.name} equpped to your back. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "back" && !back) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "arms" && arms) {
        if (window.confirm(`You already have ${base.name} equpped to your arms. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "arms" && !arms) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "wrists" && wrists) {
        if (window.confirm(`You already have ${base.name} equpped to your wrists. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "wrists" && !wrists) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "hands" && hands) {
        if (window.confirm(`You already have ${base.name} equpped to your hands. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "hands" && !hands) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "waist" && waist) {
        if (window.confirm(`You already have ${base.name} equpped to your waist. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "waist" && !waist) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "legs" && legs) {
        if (window.confirm(`You already have ${base.name} equpped to your legs. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "legs" && !legs) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "ankles" && ankles) {
        if (window.confirm(`You already have ${base.name} equpped to your ankles. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "ankles" && !ankles) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      } else if (currentWearable.bodyArea === "feet" && feet) {
        if (window.confirm(`You already have ${base.name} equpped to your feet. Would you like to replace it with ${currentWearable.name}? Press 'Okay' to replace it, and 'Cancel' to quit.`)) {
          Axios.post("/character/equipwearable", {
            CSID: props.CSID,
            id: base.id,
            equipped: false,
          })
            .then(function (response) {
              Axios.post("/character/equipwearable", {
                CSID: props.CSID,
                id: id,
                equipped: true,
              })
              console.log(response)
              charSheetDispatch({
                type: "unequipWearable",
                value: base.id,
              })
              charSheetDispatch({
                type: "equipWearable",
                value: id,
              })
              setCurrentWearable("a")
              //setWearableSelect("")
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      } else if (currentWearable.bodyArea === "feet" && !feet) {
        Axios.post("/character/equipwearable", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipWearable",
              value: id,
            })
            setCurrentWearable("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
  const equipItem = (e, id, equipped) => {
    if (equipped) {
      Axios.post("/character/equipitem", {
        CSID: props.CSID,
        id: id,
        equipped: false,
      })
        .then(function (response) {
          console.log(response)
          charSheetDispatch({
            type: "unequipItem",
            value: id,
          })
          setCurrentItem("a")
          //setWearableSelect("")
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      if (currentItem.slotsReq + props.slotsUsed > props.slotsAvailable) {
        alert(`You do not have enough slots available to equip ${currentItem.name}. If you would like to equip ${currentItem.name}, please unequip a different item to free up slots.`)
      } else {
        Axios.post("/character/equipitem", {
          CSID: props.CSID,
          id: id,
          equipped: true,
        })
          .then(function (response) {
            console.log(response)
            charSheetDispatch({
              type: "equipItem",
              value: id,
            })
            setCurrentItem("a")
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }

  const [currentWeapon, setCurrentWeapon] = useState("a")
  const [currentWearable, setCurrentWearable] = useState("a")
  const [currentItem, setCurrentItem] = useState("a")

  const setWeaponHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentWeapon(charSheetState.charSheet.weapons[e.target.value])
    } else {
      setCurrentWeapon("a")
    }
  }
  const setWearableHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentWearable(charSheetState.charSheet.wearables[e.target.value])
    } else {
      setCurrentWearable("a")
    }
  }
  const setItemHandler = (e) => {
    if (e.target.value !== "a") {
      setCurrentItem(charSheetState.charSheet.items[e.target.value])
    } else {
      setCurrentItem("a")
    }
  }
  const displayWeapon = () => {
    if (currentWeapon !== "a") {
      return (
        <div className="current-weapon item-container">
          <h3 className="item-container__heading">{currentWeapon.name}</h3>
          <h4 className="item-container__subheading">{currentWeapon.rangedMelee}</h4>
          <h4 style={{ cursor: "pointer" }} className="item-container__terheading">
            {currentWeapon.equipped ? "Equipped" : "Not Equipped"}
          </h4>
          <p>
            <strong>Description: </strong>
            {currentWeapon.description}
          </p>
          <p>
            <strong>Effects: </strong>
            {currentWeapon.effects}
          </p>
          <p>
            <strong>Requirements: </strong>
            {currentWeapon.requirements}
          </p>
          <p>
            <strong>Holsters Required: </strong>
            {currentWeapon.holstersReq}
          </p>
          <p>
            <strong>More Information:</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Damage:</td>
                <td>{currentWeapon.damage}</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>{currentWeapon.type}</td>
              </tr>
              <tr>
                <td>Proficiency:</td>
                <td>{currentWeapon.proficiency}</td>
              </tr>
              <tr>
                <td>Unique:</td>
                <td>{currentWeapon.unique === true ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Critical:</td>
                <td>{currentWeapon.critical}</td>
              </tr>
              <tr>
                <td>Range:</td>
                <td>{currentWeapon.range}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{currentWeapon.size}</td>
              </tr>
              <tr>
                <td>Value:</td>
                <td>{currentWeapon.value} gold</td>
              </tr>
              <tr>
                <td>Uses:</td>
                <td>{currentWeapon.uses}</td>
              </tr>
            </tbody>
          </table>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span
              onClick={(e, id) => {
                equipWeapon(e, currentWeapon.id, currentWeapon.equipped)
              }}
              className="hg__fake-link"
            >
              {currentWeapon.equipped ? "UNEQUIP THIS WEAPON" : "EQUIP THIS WEAPON"}
            </span>
          </p>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span onClick={openEditSuronis} className="hg__fake-link">
              EDIT
            </span>
            <span>|</span>
            <span
              onClick={(e, id) => {
                deleteWeapon(e, currentWeapon.id)
              }}
              className="hg__fake-link"
            >
              DELETE
            </span>
          </p>
        </div>
      )
    }
  }
  const displayWearable = () => {
    if (currentWearable !== "a") {
      return (
        <div className="current-wearable item-container">
          <h3 className="item-container__heading">{currentWearable.name}</h3>
          <h4 className="item-container__subheading">Body Area: {currentWearable.bodyArea}</h4>
          <h4 style={{ cursor: "pointer" }} className="item-container__terheading">
            {currentWearable.equipped ? "Equipped" : "Not Equipped"}
          </h4>
          <p>
            <strong>Description: </strong>
            {currentWearable.description}
          </p>
          <p>
            <strong>Effects: </strong>
            {currentWearable.effects}
          </p>
          <p>
            <strong>Requirements: </strong> {currentWearable.requirements}
          </p>
          <p>
            <strong>Holsters Given: </strong>
            {currentWearable.holsters}
          </p>
          <p>
            <strong>Slots Given: </strong>
            {currentWearable.slots}
          </p>
          <p>
            <strong>Armour Modifier: </strong>
            {currentWearable.modifiers.armour}
          </p>
          <p>
            <strong>Base Stat Modifiers:</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>PHY:</td>
                <td>{currentWearable.modifiers.PHY}</td>
              </tr>
              <tr>
                <td>REF:</td>
                <td>{currentWearable.modifiers.REF}</td>
              </tr>
              <tr>
                <td>INT:</td>
                <td>{currentWearable.modifiers.INT}</td>
              </tr>
              <tr>
                <td>CHA:</td>
                <td>{currentWearable.modifiers.CHA}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Skill Modifiers:</strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Skill 1:</td>
                <td>{currentWearable.modifiers.skill1}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>More Information: </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Type:</td>
                <td>{currentWearable.type}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{currentWearable.size}</td>
              </tr>
              <tr>
                <td>Value:</td>
                <td>{currentWearable.value}</td>
              </tr>
              <tr>
                <td>Uses:</td>
                <td>{currentWearable.uses}</td>
              </tr>
            </tbody>
          </table>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span
              onClick={(e, id) => {
                equipWearable(e, currentWearable.id, currentWearable.equipped)
              }}
              className="hg__fake-link"
            >
              {currentWearable.equipped ? "UNEQUIP THIS WEARABLE" : "EQUIP THIS WEARABLE"}
            </span>
          </p>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span onClick={openEditSuronis} className="hg__fake-link">
              EDIT
            </span>
            <span>|</span>
            <span
              onClick={(e, id) => {
                deleteWearable(e, currentWearable.id)
              }}
              className="hg__fake-link"
            >
              DELETE
            </span>
          </p>
        </div>
      )
    }
  }
  const displayItem = () => {
    if (currentItem !== "a") {
      return (
        <div className="item-container current-item">
          <h3 className="item-container__heading">{currentItem.name}</h3>
          <h4 className="item-container__subheading">{currentItem.name}</h4>
          <h4 style={{ cursor: "pointer" }} className="item-container__terheading">
            {currentItem.equipped ? "Equipped" : "Not Equipped"}
          </h4>
          <p>
            <strong>Description: </strong>
            {currentItem.description}
          </p>
          <p>
            <strong>Effects: </strong>
            {currentItem.effects}
          </p>
          <p>
            <strong>Requirements: </strong>
            {currentItem.requirements}
          </p>
          <p>
            <strong>Slots Used: </strong>
            {currentItem.slotsReq}
          </p>
          <p>
            <strong>More Information: </strong>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Value: </td>
                <td>{currentItem.value}</td>
              </tr>
              <tr>
                <td>Uses: </td>
                <td>{currentItem.uses}</td>
              </tr>
            </tbody>
          </table>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span
              onClick={(e, id) => {
                equipItem(e, currentItem.id, currentItem.equipped)
              }}
              className="hg__fake-link"
            >
              {currentItem.equipped ? "UNEQUIP THIS ITEM" : "EQUIP THIS ITEM"}
            </span>
          </p>
          <hr className="hg__hr" style={{ margin: "1rem 0", borderTop: "darkgray" }} />
          <p style={{ textAlign: "center", margin: "0", color: "darkgray" }}>
            <span onClick={openEditSuronis} className="hg__fake-link">
              EDIT
            </span>
            <span>|</span>
            <span
              onClick={(e, id) => {
                deleteItem(e, currentItem.id)
              }}
              className="hg__fake-link"
            >
              DELETE
            </span>
          </p>
        </div>
      )
    }
  }

  const [base, setBase] = useState("a")
  const [head, setHead] = useState("a")
  const [face, setFace] = useState("a")
  const [neck, setNeck] = useState("a")
  const [torso, setTorso] = useState("a")
  const [back, setBack] = useState("a")
  const [arms, setArms] = useState("a")
  const [wrists, setWrists] = useState("a")
  const [hands, setHands] = useState("a")
  const [waist, setWaist] = useState("a")
  const [legs, setLegs] = useState("a")
  const [ankles, setAnkles] = useState("a")
  const [feet, setFeet] = useState("a")

  useEffect(() => {
    let b = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "base"
    })
    setBase(b[0])
    let h = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "head"
    })
    setHead(h[0])
    let f = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "face"
    })
    setFace(f[0])
    let n = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "neck"
    })
    setNeck(n[0])
    let t = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "torso"
    })
    setTorso(t[0])
    let b2 = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "back"
    })
    setBack(b2[0])
    let a = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "arms"
    })
    setArms(a[0])
    let w = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "wrists"
    })
    setWrists(w[0])
    let h2 = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "hands"
    })
    setHands(h2[0])
    let w2 = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "waist"
    })
    setWaist(w2[0])
    let l = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "legs"
    })
    setLegs(l[0])
    let a2 = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "ankles"
    })
    setAnkles(a2[0])
    let f2 = props.equippedWearables.filter((wearable) => {
      return wearable.bodyArea === "feet"
    })
    setFeet(f2[0])
  }, [props.equippedWearables])
  return (
    <>
      <div className="secondary-header">
        <h1 className="secondary-header__heading">Inventory</h1>
      </div>
      <div className="page-container">
        <div className="cw__25">
          <h2 className="heading">Equipped</h2>

          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Weapons</h3>
              <h4 className="item-container__subheading">
                Holsters Used: {props.holstersUsed} / {props.holstersAvailable}
              </h4>
              <table>
                <thead>
                  <tr>
                    <th>Holsters Needed</th>
                    <th>Weapon Name</th>
                  </tr>
                </thead>
                <tbody>
                  {props.equippedWeapons.map((weapon) => {
                    return (
                      <tr key={weapon.id}>
                        <td>{weapon.holstersReq}</td>
                        <td>{weapon.name}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="item-container">
              <h3 className="item-container__heading">Items</h3>
              <h4 className="item-container__terheading">
                Item Slots Used: {props.slotsUsed} / {props.slotsAvailable}
              </h4>
              <table>
                <thead>
                  <tr>
                    <th>Slots Needed</th>
                    <th>Item Name</th>
                  </tr>
                </thead>
                <tbody>
                  {props.equippedItems.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.slotsReq}</td>
                        <td>{item.name}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="item-container">
              <h3 className="item-container__heading">Wearables</h3>
              <h4 className="item-container__subheading">Holster Count: {props.holstersAvailable}</h4>
              <h4 className="item-container__terheading">Item Slot Count: {props.slotsAvailable}</h4>
              <table>
                <thead>
                  <tr>
                    <th>Body Area</th>
                    <th>Wearable Equipped</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Base</td>
                    <td>{base ? base.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Head</td>
                    <td>{head ? head.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Face</td>
                    <td>{face ? face.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Neck</td>
                    <td>{neck ? neck.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Torso</td>
                    <td>{torso ? torso.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Back</td>
                    <td>{back ? back.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Arms</td>
                    <td>{arms ? arms.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Wrists</td>
                    <td>{wrists ? wrists.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Hands</td>
                    <td>{hands ? hands.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Waist</td>
                    <td>{waist ? waist.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Legs</td>
                    <td>{legs ? legs.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Ankles</td>
                    <td>{ankles ? ankles.name : ""}</td>
                  </tr>
                  <tr>
                    <td>Feet</td>
                    <td>{feet ? feet.name : ""}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Money</h2>
          <div className="cw__container">
            <button className="button" onClick={openPayMoney}>
              Pay Money
            </button>
            <button className="button" onClick={openRecieveMoney}>
              Recieve Money
            </button>
            <div className="item-container">
              <h3 className="item-container__heading">Uni-Credits / Gold</h3>
              <h4 className="item-container__subheading">Current Savings</h4>
              <p className="item-container__money-amount">{charSheetState.charSheet.gold} Gold</p>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">S.U.R.O.N.I.S.</h2>
          <div className="cw__container">
            <div className="item-container">
              <h3 className="item-container__heading">Weapons</h3>
              <h4 className="item-container__subheading">Weapon Count: {charSheetState.charSheet.weapons.length}</h4>
              <p className="item-container__select-label">Select a weapon to view the details</p>
              <select onChange={(e) => setWeaponHandler(e)} className="item-container__select">
                <option value="a"></option>
                {charSheetState.charSheet.weapons.map((weapon, index) => {
                  return (
                    <option value={index} key={weapon.id}>
                      {weapon.name}
                    </option>
                  )
                })}
              </select>
              {displayWeapon()}
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Items</h3>
              <h4 className="item-container__subheading">Item Count: {charSheetState.charSheet.items.length}</h4>
              <p className="item-container__select-label">Select an item to view the details</p>
              <select onChange={(e) => setItemHandler(e)} className="item-container__select">
                <option value="a"></option>
                {charSheetState.charSheet.items.map((item, index) => {
                  return (
                    <option value={index} key={item.id}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
              {displayItem()}
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Wearables</h3>
              <h4 className="item-container__subheading">Wearables Count: {charSheetState.charSheet.wearables.length}</h4>
              <p className="item-container__select-label">Select a wearable to view the details</p>
              <select onChange={(e) => setWearableHandler(e)} className="item-container__select">
                <option value="a"></option>
                {charSheetState.charSheet.wearables.map((wearable, index) => {
                  return (
                    <option value={index} key={wearable.id}>
                      {wearable.name}
                    </option>
                  )
                })}
              </select>
              {displayWearable()}
            </div>
            <div className="item-container">
              <h3 className="item-container__heading">Things</h3>
              <h4 className="item-container__subheading">Things Count: 0</h4>
              <p className="item-container__select-label">Select a thing to view the details</p>
              <select className="item-container__select">
                <option value="a"></option>
              </select>
            </div>
          </div>
        </div>

        <div className="cw__25">
          <h2 className="heading">Add New</h2>
          <div className="cw__container">
            <button className="button" onClick={openNewWeapon}>
              Add New Weapon
            </button>
            <button className="button" onClick={openNewItem}>
              Add New Item
            </button>
            <button className="button" onClick={openNewWearable}>
              Add New Wearable
            </button>
            <button className="button" onClick={openEditSuronis}>
              Add New Thing
            </button>
            {/* <button className="button">Sell an Inventory Item</button> */}
            {/* <button onClick={openEditSuronis}>Edit Suronis Contents</button> */}
          </div>
        </div>
        {/* /////// CLOSE PAGE CONTAINER /////// */}
      </div>
    </>
  )
}

export default Inventory
