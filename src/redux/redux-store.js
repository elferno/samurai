import { createStore, combineReducers } from 'redux'

import friendsReducer from './friends-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'

const reducers = combineReducers({
  friends: friendsReducer,
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  auth: authReducer,
})

const store = createStore(reducers)

window.store = store

export default store