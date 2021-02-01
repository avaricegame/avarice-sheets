import React from "react"

import { default as Column } from "../../sheets-page-container-column/sheets-page-container-column.component"
import {
  default as Card,
  InteriorCardContainerFlex as InteriorCard,
  Subheading,
  CardContainerContentContainer as InteriorCardContent,
} from "../../card-container/card-container.component"

// display components
import AbilityCardInfo from "../ability-card-info/ability-card-info.component"

const DisplayAbilityInColumn = ({ ability: { name, types } }) => (
  <Card heading={name} flex>
    <InteriorCard>
      {types.map((abilityType, index) => {
        const {
          type,
          associatedStat,
          description,
          difficulty,
          equipped,
          unlocked,
          effects,
        } = abilityType
        return (
          <Column width={25} key={index} unlocked={unlocked} ability equipped={equipped}>
            <Subheading>{type}</Subheading>
            <InteriorCardContent>
              <AbilityCardInfo
                description={description}
                difficulty={difficulty}
                effects={effects}
                associatedStat={associatedStat}
              />
            </InteriorCardContent>
          </Column>
        )
      })}
    </InteriorCard>
  </Card>
)

export default DisplayAbilityInColumn
