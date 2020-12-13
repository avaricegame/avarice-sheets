import React from "react"

function Popup(props) {
  return (
    <>
      <div className="popupform__background">
        <div className="popupform__popup popupform__popup--whitebg">
          <h3 className="popupform__heading">{props.popupName}</h3>
          {/* WHEN YOU USE POPUP FORM, SURROUND ALL PIECES OF YOUR FORM IN A FIELD SET AND DO NOT INCLUDE A SUBMIT BUTTON */}
          {/* THE SUBMITHANDLER AND FORM CLOSE NEED TO STAY AS WRITTEN */}
          {/*  <Popup popupName="NAME_OF_POPUP" popupClose={close}></Popup> */}
          {props.children}
          <div className="popupform__button-panel">
            <button onClick={props.popupClose} className="popupform__close-button popupform__close-button--fullwidth">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popup
