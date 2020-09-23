import { API_users } from 'api/api'
import { setFriendsList } from 'redux/friends-reducer'
import { setFollowList } from 'redux/follow-reducer'

/**
 @param {{userId:number}} data
*/

const
  RESET_PAGE = 'users:RESET-PAGE',
  SET_USERS = 'users:SET-USERS',
  UPDATE_USERS = 'users:UPDATE-USERS',
  TOGGLE_IS_LOADING = 'users:SET-IS-LOADING',
  TOGGLE_FOLLOW = 'users:TOGGLE-FOLLOW-USER',
  SET_PAGE_TO_NEXT = 'users:SET-PAGE-TO-NEXT'

// state.users.
const initialState = {
  users: null,       // null -> page is loading, false -> no users, [...] -> users list

  page: 0,           // last uploaded users page
  limit: 4,          // users per 1 upload
  totalUsers: 0,     // total users on server
  isLoading: false   // идет догрузка пользователей
}

function userReducer(state = initialState, action) {

  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.userId
            ? {...user, followed: !user.followed}
            : user
        )
      }

    case SET_PAGE_TO_NEXT:
      return {
        ...state,
        page: state.page + 1
      }

    case RESET_PAGE:
      return {
        ...initialState
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users,
        totalUsers: action.totalUsers
      }

    case UPDATE_USERS:
      return {
        ...state,
        users: [...state.users].concat(action.users)
      }

    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }

    default:
      return state
  }
}

// actions
export const setPageToNext = () => ({type: SET_PAGE_TO_NEXT})
export const resetPage = () => ({type: RESET_PAGE})
export const setUsers = (users, totalUsers) => ({
  type: SET_USERS,
  totalUsers,
  users: Object.values(users)
})
export const updateUsers = (users) => ({type: UPDATE_USERS, users: Object.values(users)})
export const toggleIsLoading = () => ({type: TOGGLE_IS_LOADING})


// thunks
export const getUsersAPI = (page, limit) => (dispatch) => {
  API_users.getUsers(page, limit)
    .then(data => {
      if (data) {
        dispatch(setUsers(data.users, data.totalUsers))
        dispatch(setFriendsList(data.friendsList, data.totalFriends))
        dispatch(setFollowList(data.followList, data.totalFollow))
      }
    })
}

export const updateUsersAPI = (page, limit) => (dispatch) => {
  dispatch(toggleIsLoading())

  API_users.getUsers(page, limit)
    .then(data => {
      if (data) {
        dispatch(updateUsers(data.users))
        dispatch(toggleIsLoading())
      }
    })
}

export const cancelAPI = () => () => {
  API_users.cancelGetUsers()
}

export default userReducer