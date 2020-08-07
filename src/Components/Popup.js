import React, { useEffect } from "react"
import Form from "./Forms/CustomWeaponForm"

function Popup(props) {
  return (
    <div className="popup-bg">
      <div className="popup">
        {/*<h2 className="popup__heading">This is the popup heading</h2>*/}
        <Form />
      </div>
    </div>
  )
}

export default Popup
