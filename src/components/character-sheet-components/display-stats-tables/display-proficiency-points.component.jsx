import React from "react"

import "./display-stats-tables.styles.scss"

const DisplayProficiencyPoints = ({ transformedCalculatedStatValues }) => {
  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th className="th--first left">Stat</th>
          <th>Exaustion</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
        </tr>
      </thead>
      <tbody>
        {transformedCalculatedStatValues.map(({ name, newProficiencyPoints, energyPoints }) => {
          return (
            <tr key={name}>
              <td className="left">{name}</td>
              {energyPoints < 0 ? (
                <td>
                  <div className={`point red`}>
                    <span>{energyPoints}</span>
                  </div>
                </td>
              ) : (
                <td>
                  <div className={`point gray`}>
                    <span></span>
                  </div>
                </td>
              )}
              {newProficiencyPoints.map((letter, index) => (
                <td key={index}>
                  <div className={`point ${letter === "X" ? "gray" : "yellow-and-text"}`}>
                    <span>{letter === "X" ? "A" : letter ? letter : ""}</span>
                  </div>
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DisplayProficiencyPoints
