import React from "react"

import "./display-stats-tables.styles.scss"

const DisplaySuccessPoints = ({ stats }) => (
  <>
    <table className="stats-table">
      <thead>
        <tr>
          <th>Stat</th>
          <th></th>
          <th>Actual Points</th>
          <th>Needed Points</th>
        </tr>
      </thead>
      <tbody>
        {stats.map(({ name, successPoints, proficiencyPoints }) => (
          <tr key={name}>
            <td className="td--fixedwidth">{name}</td>
            <td></td>
            <td>
              <div className="point yellow">
                <span>{successPoints}</span>
              </div>
            </td>
            <td>
              <div className="point grey">
                <span>{proficiencyPoints}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)

export default DisplaySuccessPoints
