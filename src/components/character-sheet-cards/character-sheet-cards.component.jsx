import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CardContainer from "../card-container/card-container.component"

import { selectCharSheetList } from "../../redux/character-sheet/character-sheet.selectors"

class CharacterSheetCards extends React.Component {
  render() {
    const { charSheetList } = this.props

    return (
      <>
        {charSheetList.map((charSheet) => {
          const { _id, level, raceName, className, campaignID } = charSheet
          return (
            <Link className="sheets-card-link" to={`/character/${_id}`} key={_id}>
              <CardContainer heading="Character Name" subheading={`ID#${_id}`}>
                <table>
                  <tbody>
                    <tr>
                      <td>Level:</td>
                      <td>{level}</td>
                    </tr>
                    <tr>
                      <td>Race:</td>
                      <td>{raceName}</td>
                    </tr>
                    <tr>
                      <td>Class:</td>
                      <td>{className}</td>
                    </tr>
                    <tr>
                      <td>Campaign ID:</td>
                      <td>
                        <em>{campaignID}</em>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContainer>
            </Link>
          )
        })}
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  charSheetList: selectCharSheetList,
})

export default connect(mapStateToProps)(CharacterSheetCards)
