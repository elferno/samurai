import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import friendsReducer from './friends-reducer'
import followReducer from './follow-reducer'

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
  follow: followReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store