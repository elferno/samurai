import { createStore, combineReducers } from 'redux'

import friendsReducer from './friends-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'

const reducers = combineReducers({
  friends: friendsReducer,
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer
})

const store = createStore(reducers)

export default store