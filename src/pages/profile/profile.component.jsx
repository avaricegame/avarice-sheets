import React from "react"
import { Link } from "react-router-dom"

import Header from "../../components/header/header.component"
import Footer from "../../components/footer/footer.component"

import CustomButton from "../../components/custom-button/custom-button.component"

import "./profile.styles.scss"

const ProfilePage = () => (
  <>
    <Header />
    <div className="container">
      <div className="campaign-sheets">
        <h2 className="heading">Profile</h2>
        <div className="sheets-container">
          <Link to="/" style={{ textDecoration: "none", marginTop: "1rem" }}>
            &larr; BACK TO HOME
          </Link>
          <hr className="hg__hr" />
          <h2 className="hg__heading hg__heading--center">Hi there, displayName</h2>
          <hr className="hg__hr" />
          <div className="hg__flex-container">
            <div className="hg__content hg__content--50" style={{ height: "20rem" }}>
              <h3 className="item-container__heading">Your Account Details</h3>
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
            </div>
            <div className="hg__content hg__content--50" style={{ height: "20rem" }}></div>
          </div>
          <hr className="hg__hr" />
          <Link to="/">
            <CustomButton>Sign Out</CustomButton>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
)

export default ProfilePage
