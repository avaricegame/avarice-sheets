import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import CardContainer from "../card-container/card-container.component"

import { selectUsersCharSheets } from "../../redux/user/user.selectors"

// display components
import EditAndDeleteActions from "../shared-sheets-components/card-actions/edit-and-delete-actions.component"

const CharacterSheetCards = ({ charSheets }) => (
  <>
    {charSheets.map((charSheet) => {
      const { _id, level, raceName, className, campaignName, characterName, campaignCreatorName } =
        charSheet
      return (
        <Link className="sheets-card-link" to={`/character/${_id}`} key={_id}>
          <CardContainer heading={characterName} subheading={`ID#${_id}`}>
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
                  <td>CC:</td>
                  <td>{campaignCreatorName}</td>
                </tr>
                <tr>
                  <td>Campaign:</td>
                  <td>
                    <em>{campaignName}</em>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <EditAndDeleteActions onlyDelete /> */}
          </CardContainer>
        </Link>
      )
    })}
  </>
)

const mapStateToProps = createStructuredSelector({
  charSheets: selectUsersCharSheets,
})

export default connect(mapStateToProps)(CharacterSheetCards)
