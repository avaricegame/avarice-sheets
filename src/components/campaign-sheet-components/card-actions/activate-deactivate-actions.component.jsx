import React from "react"
import { connect } from "react-redux"

// dispatch actions
import { toggleActive } from "../../../redux/campaign-sheet/pages/pages.actions"

const ActivateDeactivateActions = ({ active, id, toggleActive, type }) => (
  <>
    <p className="actions">
      {active ? (
        <span onClick={() => toggleActive({ id, type })}>DEACTIVATE</span>
      ) : (
        <span onClick={() => toggleActive({ id, type })}>ACTIVATE</span>
      )}
    </p>
  </>
)

const mapDispatchToProps = (dispatch) => ({
  toggleActive: (interactableIDAndType) => dispatch(toggleActive(interactableIDAndType)),
})

export default connect(null, mapDispatchToProps)(ActivateDeactivateActions)
