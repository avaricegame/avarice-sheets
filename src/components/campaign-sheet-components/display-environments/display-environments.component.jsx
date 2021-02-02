import React from "react"

// display components
import EnvironmentCard from "../environment-card/environment-card.component"

const DisplayEnvironments = ({ environments, activate, moveEdit, whatToEdit }) => (
  <>
    {environments.map((environment, index) => {
      return (
        <EnvironmentCard
          key={index}
          environment={environment}
          activate={activate}
          moveEdit={moveEdit}
          whatToEdit={whatToEdit}
        />
      )
    })}
  </>
)

export default DisplayEnvironments
