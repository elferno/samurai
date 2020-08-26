import { connect } from 'react-redux'

import FriendsBar from './FriendsBar'

const mapStateToProps = (state) => ({
  friends: state.friends.friendsBar,
  totalFriends: state.friends.totalFriends,
  totalFollow: state.follow.totalFollow
})

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar)

export default FriendsBarContainer