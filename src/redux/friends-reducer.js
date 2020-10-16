import {API_friends} from 'api/api'

const SET_FRIENDS_BAR = 'friends:SET-FRIENDS-BAR',
  SET_FRIENDS_LIST = 'friends:SET-FRIENDS-LIST',
  SET_FRIENDS = 'friends:SET_FRIENDS',
  TOGGLE_FRIEND_FETCHING = 'friends:TOGGLE-FRIEND-FETCHING'


// state.friends.
const initialState = {
  friendsBar: [],
  friendsList: [],

  friendIsFetching: [],
  totalFriends: null
}

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS_BAR:
      return {
        ...state,
        friendsBar: action.friendsBar,
        totalFriends: action.totalFriends
      }

    case SET_FRIENDS_LIST:
      return {
        ...state,
        friendsList: action.friendsList,
        totalFriends: action.totalFriends
      }

    case SET_FRIENDS:
      return {
        ...state,
        ...action.friends
      }

    case TOGGLE_FRIEND_FETCHING:
      const uid = action.id

      return {
        ...state,
        friendIsFetching: state.friendIsFetching.includes(uid)
          ? state.friendIsFetching.filter(id => id !== uid)
          : [...state.friendIsFetching, uid]
      }

    default:
      return state
  }
}


// actions
export const setFriendsBar = (friendsBar = [], totalFriends = 0) => ({
  type: SET_FRIENDS_BAR,
  totalFriends,
  friendsBar
})
export const setFriendsList = (friendsList = [], totalFriends = 0) => ({
  type: SET_FRIENDS_LIST,
  totalFriends,
  friendsList
})
export const setFriends = (friends) => ({type: SET_FRIENDS, friends})
export const toggleFriendFetching = (id) => ({type: TOGGLE_FRIEND_FETCHING, id})

// thunks
export const setFriendToAPI = (id, makeFriend) => async (dispatch) => {

  const body = JSON.stringify({friendId: id})
  const method = makeFriend ? 'PATCH' : 'DELETE'

  dispatch(toggleFriendFetching(id))

  const data = await API_friends.setFriendTo(method, body)
  dispatch(toggleFriendFetching(id))
  dispatch(setFriends(data))
}


export default friendsReducer