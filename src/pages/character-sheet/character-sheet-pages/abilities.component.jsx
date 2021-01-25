import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class AbilitiesPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Abilities" />
        <SheetsPageContainer>
          <Column width={75}>
            <Section heading="Abilities Tree">
              <p>
                <strong>How does the Abilities Tree work?</strong> <br />
                Each time you level up, you will be asked to choose one ability between three
                separate options. The choices will include new abilities as well as ability
                power-ups. Each ability can be leveled up to Power V.
              </p>
            </Section>

            <Section heading="Options on Next Level Up" flex>
              <Column width={33}>
                <Card heading="Ability Name" subheading="Power V">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
              <Column width={33}>
                <Card heading="Ability Name" subheading="Power V">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
                <Card heading="Ability Name" subheading="Power V">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
              <Column width={33}>
                <Card heading="Ability Name" subheading="Power V">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
            </Section>

            <Section heading="Level 2" flex>
              <Column width={33}>
                <Card heading="Ability Name" subheading="Power V">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
              <Column width={33}></Column>
              <Column width={33}></Column>
            </Section>

            <Section heading="Level 1" flex>
              <Column width={33}></Column>
              <Column width={33}></Column>
              <Column width={33}>
                <Card heading="Ability Name" subheading="Power V">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
            </Section>

            <Section heading="Starting Abilities" flex>
              <Column width={50}>
                <Card heading="Ability Name" subheading="Power V">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
              <Column width={50}>
                <Card heading="Ability Name" subheading="Power V">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Your Abilities">
              <Button>Create New Character Ability</Button>
              <Card heading="Ability Name" subheading="Level V">
                <p>
                  <strong>Details: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quo corporis modi enim incidunt ea voluptate, a repellat ipsam dicta eligendi at?
                  Optio sapiente molestiae, illo neque facere nisi explicabo fugit?
                </p>
              </Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default AbilitiesPage
