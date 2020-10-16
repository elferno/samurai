import {authAPI} from './auth-reducer'

const INIT_APP = 'app:INIT-APP'


// state.app.
const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  if (action.type === INIT_APP)
    return {...state, initialized: true}

  return state
}


// actions
export const initApp = () => ({type: INIT_APP})

// thunks
export const initAppAPI = () => async (dispatch) => {

  await dispatch(authAPI())

  dispatch(initApp())
}

export default appReducer