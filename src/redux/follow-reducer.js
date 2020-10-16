import { API_follow } from 'api/api'

const SET_FOLLOW = 'follow:SET-FOLLOW',
  SET_FOLLOW_LIST = 'follow:SET-FOLLOW-LIST',
  TOGGLE_FOLLOW_FETCHING = 'follow:TOGGLE-FRIEND-FETCHING'


// state.follow.
const initialState = {
  followList: [],

  followIsFetching: [],
  totalFollow: null
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
      const uid = action.id

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


// actions
export const setFollow = (follow) => ({type: SET_FOLLOW, follow})
export const setFollowList = (followList = [], totalFollow = 0) => ({
  type: SET_FOLLOW_LIST,
  totalFollow,
  followList
})
export const toggleFollowFetching = (id) => ({type: TOGGLE_FOLLOW_FETCHING, id})


// thunks
export const setFollowToAPI = (id, makeFollow) => async (dispatch) => {

  const body = JSON.stringify({followId: id})
  const method = makeFollow ? 'PATCH' : 'DELETE'

  dispatch(toggleFollowFetching(id))

  const data = await API_follow.setFollowTo(method, body)
  dispatch(toggleFollowFetching(id))
  dispatch(setFollow(data))
}


export default followReducer