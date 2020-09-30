import React from 'react'
import {connect} from 'react-redux'

import Users from './Users'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import { setFriendToAPI } from 'redux/friends-reducer'
import { setFollowToAPI } from 'redux/follow-reducer'
import { resetPage, setPageToNext, getUsersAPI, updateUsersAPI, cancelUsersAPI }
  from 'redux/users-reducer'

import * as US_SL from 'selectors/users-selectors'
import * as FR_SL from 'selectors/friends-selector'
import * as FW_SL from 'selectors/follow-selector'

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
  totalUsers: US_SL.getTotalUsers(state),
  isLoading: US_SL.getIsLoading(state),
  users: US_SL.getUsers(state),
  limit: US_SL.getUsersLimit(state),
  page: US_SL.getUsersPage(state),

  friendsList: FR_SL.getFriendsList(state),
  friendIsFetching: FR_SL.getFriendIsFetching(state),

  followList: FW_SL.getFollowList(state),
  followIsFetching: FW_SL.getFollowIsFetching(state)
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