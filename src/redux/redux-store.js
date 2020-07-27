import { createStore, combineReducers } from 'redux'

import friendsReducer from './friends-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

const reducers = combineReducers({
  friends: friendsReducer,
  profile: profileReducer,
  dialogs: dialogsReducer
})

const store = createStore(reducers)

export default store