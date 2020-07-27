import React from 'react'
import FriendsBar from './FriendsBar'

const FriendsBarContainer = ({ store }) => {

  const friends = store.getState().friends.list
  const maxFriendsShow = 9

  return <FriendsBar
           friends={friends}
           maxFriendsShow={maxFriendsShow}
         />
}

export default FriendsBarContainer