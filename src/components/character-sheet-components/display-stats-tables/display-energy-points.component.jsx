import React from "react"

import "./display-stats-tables.styles.scss"

export const Point = ({ children, blue, green, yellow, purple }) => (
  <div
    className={`point ${
      blue ? "blue" : green ? "green" : yellow ? "yellow" : purple ? "purple" : "blue"
    }`}
  >
    <span>{children}</span>
  </div>
)

const DisplayEnergyPoints = ({ transformedCalculatedStatValues }) => (
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
        {transformedCalculatedStatValues.map(({ name, energyPoints, proficiencyPoints }) => (
          <tr key={name}>
            <td className="left">{name}</td>

            <td>
              <div
                className={`point ${
                  energyPoints >= proficiencyPoints ? "green" : energyPoints <= 0 ? "red" : "yellow"
                }`}
              >
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
