import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import {
  default as Card,
  InteriorCardContainerFlex as InteriorCard,
  Subheading,
  CardContainerContentContainer as InteriorCardContent,
} from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class AbilitiesPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Abilities" />
        <SheetsPageContainer>
          <Column width={100}>
            <Section heading="Abilities Loadout (Your Current Equipped Abilities)" flex>
              <Column width={25}>
                <Card heading="Base Class Ability" subheading="Starting Class Ability">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
              <Column width={25}>
                <Card heading="Class Ability 1" subheading="Augmentation Type">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
              <Column width={25}>
                <Card heading="Class Ability 2" subheading="Augmentation Type">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
              <Column width={25}>
                <Card heading="Class Ability 3" subheading="Augmentation Type">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
              <Column width={25}>
                <Card heading="Class Ability 4" subheading="Augmentation Type">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
              <Column width={25}>
                <Card heading="Class Ability 5" subheading="Augmentation Type">
                  <p>
                    <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Tempora libero consequuntur, rem explicabo animi eaque cum labore mollitia
                    accusantium. Ut pariatur dolorum temporibus necessitatibus quis aliquid
                    laboriosam dolorem harum fuga!
                  </p>
                </Card>
              </Column>
              <Column width={25}>
                <Card heading="Weapon Ability 1" subheading="Weapon Ability">
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

          <Column width={100}>
            <Section heading="Your Class Abilities Library">
              <Card heading="Ability Name" flex>
                <InteriorCard>
                  <Column width={25}>
                    <Subheading>Standard</Subheading>
                    <InteriorCardContent>
                      <p>
                        <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Tempora libero consequuntur, rem explicabo animi eaque cum
                        labore mollitia accusantium. Ut pariatur dolorum temporibus necessitatibus
                        quis aliquid laboriosam dolorem harum fuga!
                      </p>
                    </InteriorCardContent>
                  </Column>
                  <Column width={25}>
                    <Subheading>Base Augmentation</Subheading>
                    <InteriorCardContent>
                      <p>
                        <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Tempora libero consequuntur, rem explicabo animi eaque cum
                        labore mollitia accusantium. Ut pariatur dolorum temporibus necessitatibus
                        quis aliquid laboriosam dolorem harum fuga!
                      </p>
                    </InteriorCardContent>
                  </Column>
                  <Column width={25}>
                    <Subheading>Augmentation #1</Subheading>
                    <InteriorCardContent>
                      <p>
                        <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Tempora libero consequuntur, rem explicabo animi eaque cum
                        labore mollitia accusantium. Ut pariatur dolorum temporibus necessitatibus
                        quis aliquid laboriosam dolorem harum fuga!
                      </p>
                    </InteriorCardContent>
                  </Column>
                  <Column width={25}>
                    <Subheading>Augmentation #2</Subheading>
                    <InteriorCardContent>
                      <p>
                        <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Tempora libero consequuntur, rem explicabo animi eaque cum
                        labore mollitia accusantium. Ut pariatur dolorum temporibus necessitatibus
                        quis aliquid laboriosam dolorem harum fuga!
                      </p>
                    </InteriorCardContent>
                  </Column>
                </InteriorCard>
              </Card>
              <Card heading="Ability Name" flex>
                <InteriorCard>
                  <Column width={25}>
                    <Subheading>Standard</Subheading>
                    <InteriorCardContent>
                      <p>
                        <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Tempora libero consequuntur, rem explicabo animi eaque cum
                        labore mollitia accusantium. Ut pariatur dolorum temporibus necessitatibus
                        quis aliquid laboriosam dolorem harum fuga!
                      </p>
                    </InteriorCardContent>
                  </Column>
                  <Column width={25}>
                    <Subheading>Base Augmentation</Subheading>
                    <InteriorCardContent>
                      <p>
                        <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Tempora libero consequuntur, rem explicabo animi eaque cum
                        labore mollitia accusantium. Ut pariatur dolorum temporibus necessitatibus
                        quis aliquid laboriosam dolorem harum fuga!
                      </p>
                    </InteriorCardContent>
                  </Column>
                  <Column width={25}>
                    <Subheading>Augmentation #1</Subheading>
                    <InteriorCardContent>
                      <p>
                        <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Tempora libero consequuntur, rem explicabo animi eaque cum
                        labore mollitia accusantium. Ut pariatur dolorum temporibus necessitatibus
                        quis aliquid laboriosam dolorem harum fuga!
                      </p>
                    </InteriorCardContent>
                  </Column>
                  <Column width={25}>
                    <Subheading>Augmentation #2</Subheading>
                    <InteriorCardContent>
                      <p>
                        <strong>Details: </strong>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Tempora libero consequuntur, rem explicabo animi eaque cum
                        labore mollitia accusantium. Ut pariatur dolorum temporibus necessitatibus
                        quis aliquid laboriosam dolorem harum fuga!
                      </p>
                    </InteriorCardContent>
                  </Column>
                </InteriorCard>
              </Card>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default AbilitiesPage
