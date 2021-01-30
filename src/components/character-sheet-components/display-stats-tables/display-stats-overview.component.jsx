import React from "react"

import "./display-stats-tables.styles.scss"

const DisplayStatsOverview = ({ stats }) => (
  <>
    <table className="stats-table">
      <thead>
        <tr>
          <th className="left">Stat</th>
          <th></th>
          <th>Proficiency</th>
        </tr>
      </thead>
      <tbody>
        {stats.map(({ name, proficiencyPoints }) => (
          <tr key={name}>
            <td className="left">{name}</td>
            <td></td>
            <td>
              <div className="point yellow">
                <span>{proficiencyPoints}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)

export default DisplayStatsOverview
