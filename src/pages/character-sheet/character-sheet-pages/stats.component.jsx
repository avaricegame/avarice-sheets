import React from "react"

import SheetsHeading from "../../../components/sheets-heading/sheets-heading.component"
import SheetsPageContainer from "../../../components/sheets-page-container/sheets-page-container.component"
import {
  default as Column,
  SheetsPageContainerColumnSection as Section,
} from "../../../components/sheets-page-container-column/sheets-page-container-column.component"

import { default as Card } from "../../../components/card-container/card-container.component"
import { default as Button } from "../../../components/custom-button/custom-button.component"

class StatsPage extends React.Component {
  render() {
    return (
      <>
        <SheetsHeading heading="Stats" />
        <SheetsPageContainer>
          <Column width={25}>
            <Section heading="Levels and Experience">
              <Card heading="Level" subheading="You are at level 4">
                <Button>Level Up</Button>
                <Button>Remove Level</Button>
                <p>
                  When you level up you get to choose a new ability to upgrade or learn from your
                  ability tree.
                </p>
              </Card>
            </Section>
          </Column>

          <Column width={25}>
            <Section heading="Skill Tokens">
              <div className="item-container item-container--overflowx">
                <h3 className="item-container__heading">Skill Tokens Table</h3>
                <h4 className="item-container__subheading item-container__terheading--adjusted">
                  Earned by Succeeding on a Skill Check
                </h4>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Physique
                </h4>
                <table className="skill-tokens-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Strength</td>
                      <td>
                        <div className="skill-token filled"></div>
                      </td>
                      <td>
                        <div className="skill-token filled"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Constitution</td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Intelligence
                </h4>
                <table className="skill-tokens-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Academic</td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Technical</td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Dexterity
                </h4>
                <table className="skill-tokens-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Reflex</td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Speed</td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Charisma
                </h4>
                <table className="skill-tokens-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Speech</td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Performance</td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Combat
                </h4>
                <table className="skill-tokens-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Ranged</td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Melee</td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                      <td>
                        <div className="skill-token"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>
          </Column>

          <Column width={50}>
            <Section heading="Skills">
              <div className="item-container item-container--overflowx">
                <h3 className="item-container__heading">Skills Table</h3>
                <h4 className="item-container__subheading item-container__terheading--adjusted">
                  Upgraded by Earning Three Skill Tokens of One Kind
                </h4>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Physique
                </h4>

                <table className="skills-table">
                  <thead>
                    <th className="th--first">Skill</th>
                    <th>Terrible</th>
                    <th>Bad</th>
                    <th>Normal</th>
                    <th>Good</th>
                    <th>Great</th>
                    <th>Fantastic</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Strength</td>
                      <td>
                        <span className="filled"></span>
                        <div className="filled"></div>
                      </td>
                      <td>
                        <span className="filled"></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div className="skills-table__last"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Constitution</td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div className="skills-table__last"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Intelligence
                </h4>
                <table className="skills-table">
                  <thead>
                    <th className="th--first">Skill</th>
                    <th>Terrible</th>
                    <th>Bad</th>
                    <th>Normal</th>
                    <th>Good</th>
                    <th>Great</th>
                    <th>Fantastic</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Academic</td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div className="skills-table__last"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Technical</td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div className="skills-table__last"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Dexterity
                </h4>
                <table className="skills-table">
                  <thead>
                    <th className="th--first">Skill</th>
                    <th>Terrible</th>
                    <th>Bad</th>
                    <th>Normal</th>
                    <th>Good</th>
                    <th>Great</th>
                    <th>Fantastic</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Reflex</td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div className="skills-table__last"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Speed</td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div className="skills-table__last"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Charisma
                </h4>
                <table className="skills-table">
                  <thead>
                    <th className="th--first">Skill</th>
                    <th>Terrible</th>
                    <th>Bad</th>
                    <th>Normal</th>
                    <th>Good</th>
                    <th>Great</th>
                    <th>Fantastic</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Speech</td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div className="skills-table__last"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Performance</td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div className="skills-table__last"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="item-container__line"></div>
                <h4 className="item-container__subheading item-container__subheading--darker">
                  Combat
                </h4>
                <table className="skills-table">
                  <thead>
                    <th className="th--first">Skill</th>
                    <th>Terrible</th>
                    <th>Bad</th>
                    <th>Normal</th>
                    <th>Good</th>
                    <th>Great</th>
                    <th>Fantastic</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td--fixedwidth">Ranged</td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div className="skills-table__last"></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="td--fixedwidth">Melee</td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div></div>
                      </td>
                      <td>
                        <span></span>
                        <div className="skills-table__last"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>
          </Column>
        </SheetsPageContainer>
      </>
    )
  }
}

export default StatsPage
