import React from "react"

import CardContainer from "../card-container/card-container.component"

const CampaignSheetCard = () => (
  <CardContainer blue heading="Campaign Name" subheading="ID#12345">
    <table>
      <tbody>
        <tr>
          <td>Players:</td>
          <td>Player 1, Player 2, Player 3</td>
        </tr>
        <tr>
          <td>Characters:</td>
          <td>Character 1, Character 2, Character 3</td>
        </tr>
        <tr>
          <td>Missions Served:</td>
          <td>#</td>
        </tr>
        <tr>
          <td>Current Mission:</td>
          <td>
            <em>"Mission Name"</em>
          </td>
        </tr>
      </tbody>
    </table>
  </CardContainer>
)

export default CampaignSheetCard
