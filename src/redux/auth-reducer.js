const SET_AUTH = 'auth:SET-AUTH',
      SET_FETCHING_AUTH = 'auth:SET-FETCHING-AUTH'


// state.auth.
const initialState = {
  userID: null,   // null    - ask auth server
                  // false   - not authorized
                  // '78912' - user's ID
  userName: null, // user shown name
  havePH: null,   // true - user has photo
  fetching: false // true - идет запрос авторизации/разлогинивания
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_AUTH:
      return {
        ...state,
        ...(action.userData || {...initialState, userID: false})
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

export const setAuth = (userData) => ({
  type: SET_AUTH,
  userData
})

export const setFetchingAuth = (fetching) => ({
  type: SET_FETCHING_AUTH,
  fetching
})

export default authReducer