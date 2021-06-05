import React from "react"
import { connect } from "react-redux"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { signUpStart } from "../../redux/user/user.actions"
import { addFlashMessage } from "../../redux/app/app.actions"

import "./sign-up.styles.scss"

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    // [TO DO] client side data validation

    const { username, email, password, confirmPassword } = this.state
    const { signUpStart, addFlashMessage } = this.props

    if (password === confirmPassword) {
      signUpStart(username, email, password)
      // until I make a better solution...
      window.alert("One minute while we start up the servers.")
    } else {
      // temp alert
      addFlashMessage("Passwords must match.", "alert")
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { username, email, password, confirmPassword } = this.state

    return (
      <div className="sign-up">
        <h2 className="sign-up__title">
          Create an <br /> Avarice account
        </h2>

        <form className="sign-up__form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            label="Username"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit" formButton>
            Create my account
          </CustomButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (username, email, password) => dispatch(signUpStart({ username, email, password })),
  addFlashMessage: (message, type) => dispatch(addFlashMessage(message, type)),
})

export default connect(null, mapDispatchToProps)(SignUp)
