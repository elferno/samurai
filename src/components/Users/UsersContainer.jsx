import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import Users from './Users'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import {setFriendToAPI} from 'redux/friends-reducer'
import {setFollowToAPI} from 'redux/follow-reducer'
import {resetPage, setPageToNext, getUsersAPI, updateUsersAPI, cancelUsersAPI}
  from 'redux/users-reducer'

import * as US_SL from 'selectors/users-selectors'
import * as FR_SL from 'selectors/friends-selector'
import * as FW_SL from 'selectors/follow-selector'

const UsersAPI = (props) => {

  // var
  const { page, limit } = props
  const { users, totalFriends, totalFollow } = props
  const { getUsersAPI, updateUsersAPI, cancelUsersAPI, resetPage } = props

  // effects
  useEffect(() => {
    if (page === 0) getUsersAPI(page, limit)  // load first page
    else updateUsersAPI(page, limit)          // upload more pages
  }, [page, limit, getUsersAPI, updateUsersAPI])

  useEffect(() => {
    return () => {
      cancelUsersAPI()
      resetPage()
    }
  }, [cancelUsersAPI, resetPage])

  // render
  return (
    <PreloadContent
      isLoading={users === null || totalFriends === null || totalFollow === null}
      noContent={props.users === false}
      noContentFiller={'no users found'}
    >
      <Users
        setFriendTo={props.setFriendToAPI}
        setFollowTo={props.setFollowToAPI}
        {...props}
      />
    </PreloadContent>
  )
}

const mapStateToProps = (state) => ({
  totalUsers: US_SL.getTotalUsers(state),
  isLoading: US_SL.getIsLoading(state),
  users: US_SL.getUsers(state),
  limit: US_SL.getUsersLimit(state),
  page: US_SL.getUsersPage(state),

  friendsList: FR_SL.getFriendsList(state),
  totalFriends: FR_SL.getTotalFriends(state),
  friendIsFetching: FR_SL.getFriendIsFetching(state),

  followList: FW_SL.getFollowList(state),
  totalFollow: FW_SL.getTotalFollow(state),
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