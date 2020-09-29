import React from 'react'
import {connect} from 'react-redux'

import Users from './Users'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import { setFriendToAPI } from 'redux/friends-reducer'
import { setFollowToAPI } from 'redux/follow-reducer'
import { resetPage, setPageToNext, getUsersAPI, updateUsersAPI, cancelUsersAPI }
  from 'redux/users-reducer'

class UsersAPI extends React.Component {
  setUsers() {
    this.props.getUsersAPI(this.props.page, this.props.limit)
  }

  updateUsers() {
    this.props.updateUsersAPI(this.props.page, this.props.limit)
  }

  componentDidMount() {
    this.setUsers()
  }

  componentWillUnmount() {
    this.props.cancelUsersAPI()
    this.props.resetPage()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // switch "page" (click "upload more") -> upload users
    if (
      this.props.users !== null &&        // not initial page load
      prevProps.page !== this.props.page  // page has changed
    )
      this.updateUsers()

    // login / logout
    if (prevProps.isAuth !== this.props.isAuth) {
      this.props.resetPage()
      this.setUsers()
    }
  }

  render() {
    return (
      <PreloadContent
        isLoading={this.props.users === null}
        noContent={this.props.users === false}
        noContentFiller={'no users found'}
      >
        <Users
          setFriendTo={this.props.setFriendToAPI}
          setFollowTo={this.props.setFollowToAPI}
          {...this.props}
        />
      </PreloadContent>
    )
  }
}

const mapStateToProps = (state) => ({
  totalUsers: state.users.totalUsers,
  isLoading: state.users.isLoading,
  users: state.users.users,
  limit: state.users.limit,
  page: state.users.page,

  friendsList: state.friends.friendsList,
  friendIsFetching: state.friends.friendIsFetching,

  followList: state.follow.followList,
  followIsFetching: state.follow.followIsFetching
})

const mapDispatchToProps = {
  resetPage,
  setPageToNext,
  getUsersAPI,
  updateUsersAPI,
  setFollowToAPI,
  setFriendToAPI,
  cancelUsersAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI)