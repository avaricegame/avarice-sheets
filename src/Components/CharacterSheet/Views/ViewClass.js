import React from "react"

function ViewClass(props) {
  return (
    <div className="item-container">
      <h3 className="item-container__heading">Class Details and Information</h3>
      <h4 className="item-container__subheading">Class Name: {props.data.name}</h4>
      <h4 className="item-container__terheading">Common Name: {props.data.commonName}</h4>
      <p>
        <em>"{props.data.quote}"</em>
      </p>
      <p>{props.data.description}</p>
      <p>Specializations:</p>
      {/* <table>
                <tbody>
                  <tr>
                    <td>Strength Physique:</td>
                    <td>{props.data.specializations.phyStrength}</td>
                  </tr>
                  <tr>
                    <td>Constitution Physique:</td>
                    <td>{props.data.specializations.phyHealth}</td>
                  </tr>
                  <tr>
                    <td>Academic Intelligence:</td>
                    <td>{props.data.specializations.intIntelligence}</td>
                  </tr>
                  <tr>
                    <td>Technical Intelligence:</td>
                    <td>{props.data.specializations.intTechnology}</td>
                  </tr>
                  <tr>
                    <td>Reflex Dexterity:</td>
                    <td>{props.data.specializations.refDexterity}</td>
                  </tr>
                  <tr>
                    <td>Speed Dexterity:</td>
                    <td>{props.data.specializations.refReaction}</td>
                  </tr>
                  <tr>
                    <td>Speech Charisma:</td>
                    <td>{props.data.specializations.chaCharisma}</td>
                  </tr>
                  <tr>
                    <td>Performance Charisma:</td>
                    <td>{props.data.specializations.chaPerform}</td>
                  </tr>
                  <tr>
                    <td>Ranged Combat:</td>
                    <td>{props.data.specializations.comRanged}</td>
                  </tr>
                  <tr>
                    <td>Melee Combat:</td>
                    <td>{props.data.specializations.comMelee}</td>
                  </tr>
                </tbody>
              </table> */}
    </div>
  )
}

export default ViewClass
