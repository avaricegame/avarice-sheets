import React from "react"

import "./display-stats-tables.styles.scss"

const DisplayProficiencyPoints = ({ calculatedStatValues }) => {
  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th className="th--first">Stat</th>
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
        {calculatedStatValues.map(({ name, newProficiencyPoints }) => {
          return (
            <tr key={name}>
              <td className="td--fixedwidth">{name}</td>
              {newProficiencyPoints.map((bool, index) => (
                <td key={index}>
                  <div className={`point ${bool ? "grey" : "yellow"}`}>
                    <span>{bool ? "A" : ""}</span>
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
