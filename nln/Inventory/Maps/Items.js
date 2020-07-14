import React from "react"
import Toggle from "../../../../nln/Toggle"

class Items extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { characterSheet, items, deleteItem } = this.props
    return (
      <React.Fragment>
        {items.map(function (item) {
          let x = [
            <div className="weapon-div">
              <Toggle>
                {({ on, toggle }) => (
                  <div>
                    <h6 onClick={toggle}>{item.itemName}</h6>
                    <h5 onClick={toggle}>Item Type</h5>
                    <p onClick={toggle} className="cursor">
                      <strong>Description:</strong> {item.itemDescription}
                    </p>
                    {on && (
                      <React.Fragment>
                        <h6 onClick={deleteItem.bind(this, item.id)} className="delete-button">
                          Delete
                        </h6>
                      </React.Fragment>
                    )}
                  </div>
                )}
              </Toggle>
            </div>,
          ]
          return x
        })}
      </React.Fragment>
    ) // END RETURN
  } // END RENDER
} // END CLASS

export default Items
