import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class CampaignPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Campaign" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Details">
              <Button>Edit Campaign Details</Button>
              <Card blue heading="Campaign Details" terheading="For Campaign Name">
                <p>
                  <strong>Background: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <td>Campaign Name:</td>
                      <td>Fluttering Butterflies</td>
                    </tr>
                    <tr>
                      <td>Campaign ID:</td>
                      <td>#123ABC</td>
                    </tr>
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
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Campaign Logs">
              <Button>Add a New Captain's Log</Button>
              <Card blue heading="Captain's Logs" subheading="For Campaign Name">
                <p>
                  <strong>Log II: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum ratione illum recusandae, omnis enim, quae porro doloribus fugiat reiciendis
                  totam et iusto, mollitia exercitationem animi aspernatur. Id facere alias
                  voluptatibus.
                </p>
                <p>
                  <strong>Log I: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum ratione illum recusandae, omnis enim, quae porro doloribus fugiat reiciendis
                  totam et iusto, mollitia exercitationem animi aspernatur. Id facere alias
                  voluptatibus.
                </p>
              </Card>
              <p>
                Note: All characters who have joined your campaign will see your Captain's Logs.
              </p>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Future Missions">
              <Card blue heading="Mission IV" subheading="planned">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus numquam
                  doloremque nam quo illo tenetur corporis quia repellendus sapiente dolores dolorem
                  vel debitis laboriosam consequatur architecto perferendis odio, ex
                  alias.Asperiores quidem iure perspiciatis inventore, vitae suscipit pariatur
                  praesentium molestias soluta neque architecto, quas voluptatum laborum sint nulla
                  cumque provident, quisquam corrupti voluptates ut voluptate laboriosam aperiam?
                  Iste, fugiat quam!
                </p>
              </Card>
            </Section>
            <Section heading="Completed Missions">
              <Card blue heading="Mission II" subheading="Mar 3, 2021">
                expand information
              </Card>
              <Card blue heading="Mission I" subheading="Feb 11, 2021">
                expand information
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Personal Logs">
              <Button>Add a New Personal Log</Button>
              <Card blue heading="Personal Mission Logs" subheading="For Campaign Name">
                <p>
                  <strong>Log II: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum ratione illum recusandae, omnis enim, quae porro doloribus fugiat reiciendis
                  totam et iusto, mollitia exercitationem animi aspernatur. Id facere alias
                  voluptatibus.
                </p>
                <p>
                  <strong>Log I: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum ratione illum recusandae, omnis enim, quae porro doloribus fugiat reiciendis
                  totam et iusto, mollitia exercitationem animi aspernatur. Id facere alias
                  voluptatibus.
                </p>
              </Card>
              <p>Note: ONLY YOU can see these logs.</p>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default CampaignPage
