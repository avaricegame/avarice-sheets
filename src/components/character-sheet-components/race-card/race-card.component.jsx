import React from "react"

import { default as Card } from "../../card-container/card-container.component"

const RaceCard = ({ raceInfo }) => {
  const { name, quote, size, basicInfo, stats, description } = raceInfo
  return (
    <Card heading="Race Info" subheading={`${name} Race`}>
      <p>
        <strong>"{quote}"</strong>
      </p>
      <table>
        <tbody>
          <tr>
            <td>Size:</td>
            <td>{size}</td>
          </tr>
          {basicInfo.map(({ descriptor, description }) => (
            <tr key={descriptor}>
              <td>{descriptor}:</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Stat Mods:</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(({ modifier, value }) =>
            value ? (
              <tr key={modifier}>
                <td>
                  <span className="uppercase">{modifier}</span>
                </td>
                <td>{value}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </Card>
  )
}

export default RaceCard
