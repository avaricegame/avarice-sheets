import React from "react"

import { default as Column } from "../../sheets-page-container-column/sheets-page-container-column.component"

import {
  default as Card,
  InteriorCardContainerFlex as InteriorCard,
  Subheading,
  CardContainerContentContainer as InteriorCardContent,
} from "../../card-container/card-container.component"

const DisplayAbilityInColumn = ({ ability: { name, types } }) => (
  <Card heading={name} flex>
    <InteriorCard>
      {types.map((abilityType, index) => {
        const { type, associatedStat, description, difficulty, equipped, unlocked } = abilityType
        return (
          <Column width={25} key={index}>
            <Subheading>{type}</Subheading>
            <InteriorCardContent equipped={equipped} unlocked={unlocked}>
              <ul>
                <li>Difficulty: {difficulty}</li>
                <li>Associated Stat: {associatedStat}</li>
              </ul>
              <p>
                <strong>Description: </strong>
                {description}
              </p>
              <p>
                <strong>Effects: n/a</strong>
              </p>
            </InteriorCardContent>
          </Column>
        )
      })}
    </InteriorCard>
  </Card>
)

export default DisplayAbilityInColumn
