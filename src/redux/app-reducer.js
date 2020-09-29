import { authAPI } from './auth-reducer'

const INIT_APP = 'app:INIT-APP'


// state.app.
const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}


// actions
export const initApp = () => ({type: INIT_APP})

// thunks
export const initAppAPI = () => (dispatch) => {

  const step_0 = dispatch(authAPI())

  Promise.all([step_0])
    .then(() => {
      dispatch(initApp())
    })
}

export default appReducer