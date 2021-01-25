import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class InfoPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Info" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Mission Logs">
              <Button>Add a New Character Log</Button>
              <Card heading="Character's Logs" subheading="For Character Name">
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
              <Card heading="Captain's Logs" subheading="For Campaign Name">
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
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Campaign Information">
              <Card heading="Campaign Details" subheading="For Campaign Name">
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
            <Section heading="Race and Class Information">
              <Card heading="Character Description" subheading="For Character Name">
                <table>
                  <tbody>
                    <tr>
                      <td>Age:</td>
                      <td>1 years old</td>
                    </tr>
                    <tr>
                      <td>Weight:</td>
                      <td>1 lbs.</td>
                    </tr>
                    <tr>
                      <td>Height:</td>
                      <td>1 ft.</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td>word</td>
                    </tr>
                    <tr>
                      <td>Skin Tone:</td>
                      <td>word</td>
                    </tr>
                    <tr>
                      <td>Eye Color:</td>
                      <td>word</td>
                    </tr>
                    <tr>
                      <td>Hair Color:</td>
                      <td>word</td>
                    </tr>
                    <tr>
                      <td>Hair Length:</td>
                      <td>word</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
              <Card heading="Race Info">
                <p>race</p>
              </Card>
              <Card heading="Class Info">
                <p>class</p>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Character Information">
              <Card heading="Character Background" subheading="For Character Name">
                <p>
                  <strong>
                    Who were your parents? How were you raised? Do you have any close family?
                  </strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique eos
                  voluptate, nostrum repellendus unde quam a. Debitis, laboriosam corporis dicta
                  asperiores eligendi aliquam exercitationem maiores itaque optio id error.
                </p>

                <p>
                  <strong>Where/From whom did you learn your skills?</strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique eos
                  voluptate, nostrum repellendus unde quam a. Debitis, laboriosam corporis dicta
                  asperiores eligendi aliquam exercitationem maiores itaque optio id error.
                </p>

                <p>
                  <strong>Name your 3 most important personal beliefs:</strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique eos
                  voluptate, nostrum repellendus unde quam a. Debitis, laboriosam corporis dicta
                  asperiores eligendi aliquam exercitationem maiores itaque optio id error.
                </p>

                <p>
                  <strong>
                    Name 3 or more character flaws that are most likely to trouble you:
                  </strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique eos
                  voluptate, nostrum repellendus unde quam a. Debitis, laboriosam corporis dicta
                  asperiores eligendi aliquam exercitationem maiores itaque optio id error.
                </p>

                <p>
                  <strong>What do you secretly fear even in times of easy-going peace? Why?</strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique eos
                  voluptate, nostrum repellendus unde quam a. Debitis, laboriosam corporis dicta
                  asperiores eligendi aliquam exercitationem maiores itaque optio id error.
                </p>

                <p>
                  <strong>Are you (Character Name) a hero? Why or why not?</strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique eos
                  voluptate, nostrum repellendus unde quam a. Debitis, laboriosam corporis dicta
                  asperiores eligendi aliquam exercitationem maiores itaque optio id error.
                </p>

                <p>
                  <strong>What are your goals (both long and short term)?</strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique eos
                  voluptate, nostrum repellendus unde quam a. Debitis, laboriosam corporis dicta
                  asperiores eligendi aliquam exercitationem maiores itaque optio id error.
                </p>

                <p>
                  <strong>Are you (Character Name) merciful? Why or why not?</strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique eos
                  voluptate, nostrum repellendus unde quam a. Debitis, laboriosam corporis dicta
                  asperiores eligendi aliquam exercitationem maiores itaque optio id error.
                </p>

                <p>
                  <strong>Why are you an adventurer?</strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique eos
                  voluptate, nostrum repellendus unde quam a. Debitis, laboriosam corporis dicta
                  asperiores eligendi aliquam exercitationem maiores itaque optio id error.
                </p>
              </Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default InfoPage
