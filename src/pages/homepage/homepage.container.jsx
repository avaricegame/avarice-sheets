import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectIsCurrentUserLoaded } from "../../redux/user/user.selectors"
import WithLoader from "../../components/with-loader/with-loader.component"
import HomePage from "./homepage.component"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCurrentUserLoaded(state),
})

const HomePageContainer = connect(mapStateToProps)(WithLoader(HomePage))

export default HomePageContainer
