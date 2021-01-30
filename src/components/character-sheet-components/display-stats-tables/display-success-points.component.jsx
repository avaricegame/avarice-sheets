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
        {transformedCalculatedStatValues.map(({ name, successPoints, proficiencyPoints }) => {
          const neededPoints = proficiencyPoints - successPoints
          return (
            <tr key={name}>
              <td className="left">{name}</td>

              <td>
                <div
                  className={`point ${
                    successPoints >= proficiencyPoints
                      ? "green"
                      : successPoints == 0
                      ? "red"
                      : "yellow"
                  }`}
                >
                  <span>{successPoints}</span>
                </div>
              </td>
              <td></td>
              <td>
                <div className={`point ${neededPoints < 1 ? "green" : "red"}`}>
                  <span>{neededPoints < 0 ? "0" : neededPoints}</span>
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
