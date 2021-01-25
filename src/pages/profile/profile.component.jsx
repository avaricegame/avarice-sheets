import React from "react"
import { Link } from "react-router-dom"

import MainHeader from "../../components/header/main-header.component"
import MainPageContainer from "../../components/main-page-container/main-page-container.component"
import { default as Column } from "../../components/main-page-container-column/main-page-container-column.component"
import Footer from "../../components/footer/footer.component"

import CardContainer from "../../components/card-container/card-container.component"
import CustomButton from "../../components/custom-button/custom-button.component"

import "./profile.styles.scss"

const ProfilePage = () => (
  <>
    <MainHeader />
    <MainPageContainer>
      <Column heading="My Profile">
        <hr className="profile-page-hr" />
        <Link to="/">&larr; BACK TO HOME</Link>
        <hr className="profile-page-hr" />
        <h2 className="profile-page-greeting">Hello there, displayName</h2>

        <hr className="profile-page-hr" />
        <CardContainer heading="Your Profile Details">
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>name</td>
              </tr>
              <tr>
                <td>Username:</td>
                <td>name</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>name</td>
              </tr>
            </tbody>
          </table>
        </CardContainer>
        <hr className="profile-page-hr" />
        <CustomButton>Edit my Account Settings on AvariceGame.com</CustomButton>
        <hr className="profile-page-hr" />
        <Link to="/">
          <CustomButton signOut>Sign Out</CustomButton>
        </Link>
      </Column>
    </MainPageContainer>
    <Footer />
  </>
)

export default ProfilePage
