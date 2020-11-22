import React, { useContext } from "react"
import Axios from "axios"

import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function EditDelete(props) {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  async function deleteHandler(id) {
    if (props.type === "charsheet") {
      if (window.confirm("Are you sure you want to delete this character sheet? This action cannot be undone.")) {
        const response = await Axios.delete(`/character/${id}`, {
          headers: {
            Authorization: "Bearer " + appState.user.token,
          },
        })
        if (response) {
          window.location.reload()
          appDispatch({ type: "flashMessage", value: "Character Sheet successfully deleted." })
        }
      }
    }
  }

  return (
    <div className="edit-delete">
      <p className="edit-delete__p edit-delete__p--right">
        <span className="edit-delete__link">EDIT</span>
        <span>|</span>
        <span className="edit-delete__link" onClick={() => deleteHandler(props.id)}>
          DELETE
        </span>
      </p>
    </div>
  )
}

export default EditDelete
