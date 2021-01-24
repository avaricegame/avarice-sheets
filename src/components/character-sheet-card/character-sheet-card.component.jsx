import React from "react"

import CardContainer from "../card-container/card-container.component"

const CharacterSheetCard = () => (
  <CardContainer heading="Character Name" subheading="ID#12345">
    <table>
      <tbody>
        <tr>
          <td>Level:</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Race:</td>
          <td>Freemaker</td>
        </tr>
        <tr>
          <td>Class:</td>
          <td>Survivalist</td>
        </tr>
        <tr>
          <td>Campaign ID:</td>
          <td>
            <em>123</em>
          </td>
        </tr>
      </tbody>
    </table>
  </CardContainer>
)

export default CharacterSheetCard
