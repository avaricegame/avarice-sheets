import React from "react"

import "./display-stats-tables.styles.scss"

const DisplayEnergyPoints = ({ stats }) => (
  <>
    <table className="stats-table">
      <thead>
        <tr>
          <th>Stat</th>
          <th></th>
          <th>Current</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        {stats.map(({ name, energyPoints, proficiencyPoints }) => (
          <tr key={name}>
            <td className="td--fixedwidth">{name}</td>
            <td></td>
            <td>
              <div className="point yellow">
                <span>{energyPoints}</span>
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

export default DisplayEnergyPoints
