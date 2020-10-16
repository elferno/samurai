import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import friendsReducer from './friends-reducer'
import followReducer from './follow-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'

import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  friends: friendsReducer,
  profile: profileReducer,
  dialogs: dialogsReducer,
  follow: followReducer,
  users: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
));

//const store = createStore(reducers, applyMiddleware(thunk))

export default store