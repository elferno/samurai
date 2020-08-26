const SET_AUTH = 'auth:SET-AUTH',
      SET_LOGIN_ERROR = 'auth:SET-LOGIN-ERROR',
      SET_FETCHING_AUTH = 'auth:SET-FETCHING-AUTH'


// state.auth.
const initialState = {
  fetching:   false, // true - идет запрос login/logout
  error:      null,  // 1 - user not found
                     // 2 - input login and pass
  isAuth:     null,  // null  - need ask auth from server
                     // false - not authorized
                     // true  - authorized
  userInfo: {
    userID:   null,  // user's uniq ID
    userName: null,  // user's shown name
    havePH:   null   // true -> user has photo
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
    case SET_LOGIN_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export const setAuth = (userInfo) => ({
  type: SET_AUTH,
  userInfo
})

export const setFetchingAuth = (fetching) => ({
  type: SET_FETCHING_AUTH,
  fetching
})

export const setLoginError = (error) => ({
  type: SET_LOGIN_ERROR,
  error
})

export default authReducer