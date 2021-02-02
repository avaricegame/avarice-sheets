import React from "react"

import { default as Card } from "../../card-container/card-container.component"

// display components
import EditAndDeleteActions from "../../shared-sheets-components/card-actions/edit-and-delete-actions.component"
import ActivateDeactivateActions from "../card-actions/activate-deactivate-actions.component"

import PopupFormTypes from "../../popup-form/popup-form.types"

class EnvironmentCard extends React.Component {
  render() {
    const {
      environment: { name, hp, description, effects, active, id },
      activate,
      moveEdit,
      whatToEdit,
    } = this.props

    return (
      <Card blue heading={name} subheading={`Hit Points: ${hp}`}>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
        <p>
          <strong>Effects: </strong>
          {effects.name ? "yes" : "n/a"}
        </p>
        <div className="actions-div">
          {activate ? (
            <ActivateDeactivateActions type="ENVIRONMENT" id={id} active={active} />
          ) : null}
          {moveEdit ? (
            <EditAndDeleteActions
              moveEdit={moveEdit}
              whatToEdit={whatToEdit}
              objToEdit={this.props.environment}
              popupFormType={PopupFormTypes.ADD_A_NEW_ENVIRONMENT}
            />
          ) : null}
        </div>
      </Card>
    )
  }
}

export default EnvironmentCard
