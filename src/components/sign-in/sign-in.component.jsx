import React from "react"

import "./sign-in.styles.scss"

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
    }
  }

  render() {
    return <div>Sign in component</div>
  }
}

export default SignIn
