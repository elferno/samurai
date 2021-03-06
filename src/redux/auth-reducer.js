import {API_auth} from 'api/api'
import {stopSubmit} from 'redux-form'
import {setFriendsBar} from 'redux/friends-reducer'

const SET_AUTH = 'auth:SET-AUTH',
  SET_FETCHING_AUTH = 'auth:SET-FETCHING-AUTH'


// state.auth.
const initialState = {
  fetching: false, // true - идет запрос login/logout

  isAuth: null,  // null  - need ask auth from server
                 // false - not authorized
                 // true  - authorized
  userInfo: {
    userID: null,  // user's uniq ID
    userName: null,// user's shown name
    avatar: null   // uniqID -> user's photo / null -> no photo
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.userInfo.userID || action.userInfo.userID === 0,
        userInfo: {...(action.userInfo || initialState)}
      }
    case SET_FETCHING_AUTH:
      return {
        ...state,
        fetching: action.fetching
      }
    default:
      return state
  }
}


// actions
export const setAuth = (userInfo) => ({type: SET_AUTH, userInfo})
export const setFetchingAuth = (fetching) => ({type: SET_FETCHING_AUTH, fetching})

// thunks
export const setLoginError = (errorCode) => (dispatch) => {

  let error = null

  switch (errorCode) {
    case 1: error = 'wrong login or password'; break
    case 2: error = 'please, specify login and password'; break
    default: break
  }

  dispatch(stopSubmit('login', {_error: error}))
}

export const authAPI = () => async (dispatch) => {
  const data = await API_auth.auth()

  dispatch(setAuth(data.userInfo))
  dispatch(setFriendsBar(data.friendsBar, data.totalFriends))
}

export const loginAPI = (login, pass, stay) => async (dispatch) => {

  dispatch(setFetchingAuth(true))

  const data = await API_auth.login(login, pass, stay)

  dispatch(setFetchingAuth(false))

  if (data.error) {
    setLoginError(data.error)(dispatch)
    return null
  }

  dispatch(setAuth(data.userInfo))
  dispatch(setFriendsBar(data.friendsBar, data.totalFriends))
}

export const logoutAPI = () => async (dispatch) => {
  dispatch(setFetchingAuth(true))

  await API_auth.logout()

  dispatch(setFetchingAuth(false))
  dispatch(setAuth(false))
  dispatch(setFriendsBar())
}

export default authReducer