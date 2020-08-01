const actionTypes = {
  TOGGLE_FOLLOW: 'TOGGLE-FOLLOW-USER',
  UPLOAD_USERS: 'UPLOAD-USERS',
  READ_USERS: 'READ-USERS',
  DROP_USERS: 'DROP-USERS'
}

// state.users.
const initialState = {
  users: []
}

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.TOGGLE_FOLLOW:

      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId)
            return {...user, followed: !user.followed}
          return user
        })
      }

    case actionTypes.UPLOAD_USERS:
      console.log('UPLOAD MORE!', state)
      return state

    case actionTypes.READ_USERS:
      return {
        ...state,
        users: [ ...state.users, ...action.users ]
      }

    case actionTypes.DROP_USERS:
        return {
          ...state,
          users: []
        }

    default:
      return state
  }
}

export const toggleFollowAC = (userId) => ({
  type: actionTypes.TOGGLE_FOLLOW,
  userId
})

export const uploadAC = () => ({
  type: actionTypes.UPLOAD_USERS
})

export const readUsersAC = (users) => ({
  type: actionTypes.READ_USERS,
  users
})

export const dropUsersAC = () => ({
  type: actionTypes.DROP_USERS
})

export default userReducer