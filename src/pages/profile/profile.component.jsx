import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import MainHeader from "../../components/headers/main-header.component"
import MainPageContainer from "../../components/main-page-container/main-page-container.component"
import { default as Column } from "../../components/main-page-container-column/main-page-container-column.component"
import Footer from "../../components/footer/footer.component"

import CardContainer from "../../components/card-container/card-container.component"
import CustomButton from "../../components/custom-button/custom-button.component"

import { selectCurrentUser } from "../../redux/user/user.selectors"
import { signOut } from "../../redux/user/user.actions"

import "./profile.styles.scss"

class ProfilePage extends React.Component {
  componentDidMount() {
    const {
      user: { firstName, username },
    } = this.props
    document.title = `${firstName ? firstName : username} | Profile | Avarice Sheets`
  }

  render() {
    const { user, signOut } = this.props
    return (
      <>
        <MainHeader />
        <MainPageContainer>
          <Column heading="My Profile">
            <hr className="profile-page-hr" />
            <Link to="/">&larr; BACK TO HOME</Link>
            <hr className="profile-page-hr" />
            <h2 className="profile-page-greeting">
              Hello there, {user.firstName || user.username}
            </h2>

            <hr className="profile-page-hr" />
            <CardContainer heading="Your Profile Details">
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>
                      {user.firstName && user.lastName
                        ? `${user.firstName + " " + user.lastName}`
                        : ""}
                    </td>
                  </tr>
                  <tr>
                    <td>Username:</td>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>Plan:</td>
                    <td>Free</td>
                  </tr>
                </tbody>
              </table>
            </CardContainer>
            <hr className="profile-page-hr" />
            <a href="https://www.avaricegame.com/dashboard" target="_blank">
              EDIT ACCOUNT SETTINGS ON AVARICEGAME.COM &rarr;
            </a>
            <hr className="profile-page-hr" />
            <Link to="/">
              <CustomButton signOut onClick={signOut}>
                Sign Out
              </CustomButton>
            </Link>
          </Column>
        </MainPageContainer>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
