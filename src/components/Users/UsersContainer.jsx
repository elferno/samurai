import React from 'react'
import {connect} from 'react-redux'

import Users from './Users'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import { setFriendToAPI } from 'redux/friends-reducer'
import { setFollowToAPI } from 'redux/follow-reducer'
import { resetPage, getUsersAPI, updateUsersAPI } from 'redux/users-reducer'

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
    if (prevProps.auth.isAuth !== this.props.auth.isAuth) {
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

const UsersContainer = connect((state) => ({
  totalUsers: state.users.totalUsers,
  isLoading: state.users.isLoading,
  users: state.users.users,
  limit: state.users.limit,
  page: state.users.page,

  friendsList: state.friends.friendsList,
  friendIsFetching: state.friends.friendIsFetching,

  followList: state.follow.followList,
  followIsFetching: state.follow.followIsFetching
}), {
  resetPage,
  getUsersAPI,
  updateUsersAPI,
  setFollowToAPI,
  setFriendToAPI
})
  (UsersAPI)

export default UsersContainer