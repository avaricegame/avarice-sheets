import React from "react"

function PopupForm(props) {
  return (
    <>
      <div className="popupform__background">
        <div className="popupform__popup">
          <form className="popupform__form" onSubmit={props.formOnSubmit}>
            <h3 className="popupform__heading">{props.formName}</h3>
            {/* WHEN YOU USE POPUP FORM, SURROUND ALL PIECES OF YOUR FORM IN A FIELD SET AND DO NOT INCLUDE A SUBMIT BUTTON */}
            {/* THE SUBMITHANDLER AND FORM CLOSE NEED TO STAY AS WRITTEN */}
            {/*  <PopupForm formName="NAME_OF_FORM" formOnSubmit={(e) => submitHandler(e)} formClose={close}></PopupForm> */}
            {props.children}
            <div className="popupform__button-panel">
              <button onClick={props.formClose} className="popupform__close-button">
                Cancel
              </button>
              <input type="submit" className="popupform__submit-button" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupForm
