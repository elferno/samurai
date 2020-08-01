import { connect } from 'react-redux'
import Users from './Users'

import {
  toggleFollowAC,
  readUsersAC,
  dropUsersAC,
  uploadAC
} from
    'redux/users-reducer'

const mapStateToProps = (state) => ({
  users: state.users.users
})

const mapDispatchToProps = (dispatch) => ({
  onToggleFollow: (id) => dispatch(toggleFollowAC(id)),
  onReadUsers: (users) => dispatch(readUsersAC(users)),
  onDropUsers: () => dispatch(dropUsersAC()),
  onUpload: () => dispatch(uploadAC())
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer