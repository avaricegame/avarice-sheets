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
            <Section heading="Your Notes">
              <Button>Create a New Note</Button>
              <hr />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              <hr />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              <hr />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              <hr />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </Section>
          </Column>

          <Column width={75}>
            <Section heading="Note Content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam quis
                voluptas. Sunt quo quam rerum, laudantium, asperiores temporibus optio eum ea fugiat
                nam consequatur, sit nemo quisquam aspernatur illo?Et recusandae quam incidunt natus
                placeat omnis porro, nihil perferendis, fugiat asperiores corrupti voluptatum eaque
                aliquid dicta debitis officiis accusantium quae quod expedita quis vel itaque.
                Sapiente repellat at minus.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam quis
                voluptas. Sunt quo quam rerum, laudantium, asperiores temporibus optio eum ea fugiat
                nam consequatur, sit nemo quisquam aspernatur illo?Et recusandae quam incidunt natus
                placeat omnis porro, nihil perferendis, fugiat asperiores corrupti voluptatum eaque
                aliquid dicta debitis officiis accusantium quae quod expedita quis vel itaque.
                Sapiente repellat at minus.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam quis
                voluptas. Sunt quo quam rerum, laudantium, asperiores temporibus optio eum ea fugiat
                nam consequatur, sit nemo quisquam aspernatur illo?Et recusandae quam incidunt natus
                placeat omnis porro, nihil perferendis, fugiat asperiores corrupti voluptatum eaque
                aliquid dicta debitis officiis accusantium quae quod expedita quis vel itaque.
                Sapiente repellat at minus.
              </p>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default InfoPage
