import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCurrentUserLoaded } from "../../redux/user/user.selectors"
import WithLoader from "../../components/with-loader/with-loader.component"
import ProfilePage from "./profile.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCurrentUserLoaded(state),
})

const ProfilePageContainer = connect(mapStateToProps)(WithLoader(ProfilePage))

export default ProfilePageContainer
