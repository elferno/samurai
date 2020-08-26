const SET_FOLLOW = 'follow:SET-FOLLOW',
  SET_FOLLOW_LIST = 'follow:SET-FOLLOW-LIST',
  TOGGLE_FOLLOW_FETCHING = 'follow:TOGGLE-FRIEND-FETCHING'


// state.follow.
const initialState = {
  followList: [],

  followIsFetching: [],
  totalFollow: 0
}

const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOLLOW:
      return {
        ...state,
        ...action.follow
      }
    case SET_FOLLOW_LIST:
      return {
        ...state,
        followList: action.followList,
        totalFollow: action.totalFollow
      }
    case TOGGLE_FOLLOW_FETCHING:
      const uid = action.followId

      return {
        ...state,
        followIsFetching: state.followIsFetching.includes(uid)
          ? state.followIsFetching.filter(id => id !== uid)
          : [...state.followIsFetching, uid]
      }
    default:
      return state
  }
}

export const setFollow = (follow) => {
  return {
    type: SET_FOLLOW,
    follow
  }
}

export const setFollowList = (followList = [], totalFollow = 0) => ({
  type: SET_FOLLOW_LIST,
  totalFollow,
  followList
})

export const toggleFollowFetching = (followId) => {
  return {
    type: TOGGLE_FOLLOW_FETCHING,
    followId
  }
}


export default followReducer