import React from "react"

function TakeDamage(props) {
  const close = () => {
    props.takeDamageHandler(false)
  }
  return (
    <div className="popup-bg" onClick={close}>
      <div className="popup">
        <form>
          <fieldset>
            <h6 className="edit-h6">Add/Subtract Money Form</h6>
            <label>Add or Subtract</label>
            <select name="operator">
              <option></option>
              <option>Add</option>
              <option>Subtract</option>
            </select>
            <label>How Much?</label>
            <input name="amount" type="number" />

            <input type="submit" className="submit-button" value="Submit the change" />
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default TakeDamage
