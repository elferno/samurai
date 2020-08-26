import React from 'react'
import {connect} from 'react-redux'

import Users from './Users'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import {
  setUsers,
  resetPage,
  updateUsers,
  setPageToNext,
  toggleIsLoading
} from
    'redux/users-reducer'

import {
  setFriends,
  setFriendsList,
  toggleFriendFetching
} from
    'redux/friends-reducer'

import {
  setFollow,
  setFollowList,
  toggleFollowFetching
} from
    'redux/follow-reducer'

import {
  API_getUsers,
  API_setFriendTo,
  API_setFollowTo
} from
    'api/api'


class UsersAPI extends React.Component {
  constructor(props) {
    super(props)
    this.alive = true

    this.setFriendTo = this.setFriendTo.bind(this)
    this.setFollowTo = this.setFollowTo.bind(this)
  }

  setUsers() {
    API_getUsers(this.props.page, this.props.limit)
      .then(data => {
        if (this.alive) {
          this.props.setUsers(data.users, data.totalUsers)
          this.props.setFriendsList(data.friendsList, data.totalFriends)
          this.props.setFollowList(data.followList, data.totalFollow)
        }
      })
  }

  updateUsers() {
    this.props.toggleIsLoading()

    API_getUsers(this.props.page, this.props.limit)
      .then(data => {
        if (this.alive) {
          this.props.updateUsers(data.users)
          this.props.toggleIsLoading()
        }
      })
  }

  componentDidMount() {
    this.setUsers()
  }

  componentWillUnmount() {
    this.alive = false
    this.props.resetPage()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // switch "page" (click "upload more") -> upload users
    if (
      this.props.users !== null &&
      prevProps.page !== this.props.page
    )
      this.updateUsers()
    //

    // login/logout - re-render page
    if (prevProps.auth.isAuth !== this.props.auth.isAuth)
      this.props.resetPage()

    if (this.props.users === null)
      this.setUsers()
    //
  }


  setFriendTo(friendId, doFriend) {

    const body = JSON.stringify({friendId})
    this.props.toggleFriendFetching(friendId)

    if (doFriend) {
      API_setFriendTo('PATCH', body)
       .then(data => {
         this.props.toggleFriendFetching(friendId)
         this.props.setFriends(data)
       })
    } else {
      API_setFriendTo('DELETE', body)
       .then(data => {
         this.props.toggleFriendFetching(friendId)
         this.props.setFriends(data)
       })
    }
  }

  setFollowTo(followId, doFollow) {

    const body = JSON.stringify({followId})
    this.props.toggleFollowFetching(followId)

    if (doFollow) {
      API_setFollowTo('PATCH', body)
      .then(data => {
        this.props.toggleFollowFetching(followId)
        this.props.setFollow(data)
      })
    } else {
      API_setFollowTo('DELETE', body)
      .then(data => {
        this.props.toggleFollowFetching(followId)
        this.props.setFollow(data)
      })
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
          setFriendTo={this.setFriendTo}
          setFollowTo={this.setFollowTo}
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
  setUsers,
  resetPage,
  updateUsers,
  setPageToNext,
  toggleIsLoading,

  setFollow,
  setFollowList,
  toggleFollowFetching,


  setFriends,
  setFriendsList,
  toggleFriendFetching
})
(UsersAPI)

export default UsersContainer