import React from "react"

import "./display-stats-tables.styles.scss"

const DisplayEnergyPoints = ({ stats }) => (
  <>
    <table className="stats-table">
      <thead>
        <tr>
          <th className="left">Stat</th>
          <th>Current</th>
          <th></th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        {stats.map(({ name, energyPoints, proficiencyPoints }) => (
          <tr key={name}>
            <td className="td--fixedwidth left">{name}</td>

            <td>
              <div className="point green">
                <span>{energyPoints}</span>
              </div>
            </td>
            <td></td>
            <td>
              <div className="point gray">
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
