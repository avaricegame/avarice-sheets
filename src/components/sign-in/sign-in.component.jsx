import React from "react"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import "./sign-in.styles.scss"

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="sign-in">
        <h2 className="sign-in__title">Sign in</h2>
        <form className="sign-in__form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="text"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <CustomButton type="submit" formButton>
            Go to my homepage
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
