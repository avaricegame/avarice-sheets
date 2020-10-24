import React from "react"
//import Axios from "axios"

import PopupForm from "../../PopupForm"

function EditSuronis(props) {
  // const [amount, setAmount] = useState()
  const close = () => {
    props.editSuronisHandler(false)
  }
  // const onChangeHandler = (e) => {
  //   console.log(e.target.value)
  //   setAmount(e.target.value)
  // }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e.target.amount.value)
    // Axios.post("/character/takedamage", {
    //   amount: e.target.amount.value,
    //   CSID: props.CSID,
    // })
    //   .then(function (response) {
    //     props.newNoteHandler(false)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
  return (
    <PopupForm formName="Add a New Thing" formOnSubmit={(e) => submitHandler(e)} formClose={close}>
      <fieldset>
        <label>this form is under construction</label>
      </fieldset>
    </PopupForm>
  )
}

export default EditSuronis
