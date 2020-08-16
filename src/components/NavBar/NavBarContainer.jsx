import { connect } from 'react-redux'

import NavBar from './NavBar'

const NavBarContainer = connect((state) => ({
  auth: state.auth
}))
  (NavBar)

export default NavBarContainer