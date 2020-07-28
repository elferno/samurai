import { connect } from 'react-redux'

import FriendsBar from './FriendsBar'


const mapStateToProps = (state) => ({
  friends: state.friends.list,
  maxFriendsShow: 9
})

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar)

export default FriendsBarContainer