import React from "react"

import "./display-stats-tables.styles.scss"

const DisplaySuccessPoints = ({ transformedCalculatedStatValues }) => (
  <>
    <table className="stats-table">
      <thead>
        <tr>
          <th className="left">Stat</th>

          <th>Actual Points</th>
          <th></th>
          <th>Needed Points</th>
        </tr>
      </thead>
      <tbody>
        {transformedCalculatedStatValues.map(({ name, successPoints, newProficiencyPoints }) => {
          const neededPoints = newProficiencyPoints - successPoints
          return (
            <tr key={name}>
              <td className="left">{name}</td>

              <td>
                <div className="point green">
                  <span>{successPoints}</span>
                </div>
              </td>
              <td></td>
              <td>
                <div className={`point ${neededPoints < 0 ? "green" : "red"}`}>
                  <span>{newProficiencyPoints}</span>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </>
)

export default DisplaySuccessPoints
