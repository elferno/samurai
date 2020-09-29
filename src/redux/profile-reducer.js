import React from 'react'
import { reset } from 'redux-form'
import { API_profile } from 'api/api'


const
  ADD_POST = 'profile:ADD-POST',
  RESET_PAGE = 'profile:RESET-PAGE',
  SET_PROFILE = 'profile:SET-PROFILE',
  SET_CURRENT_ID = 'profile:SET-CURRENT-ID',
  SET_SAVING_PROFILE = 'profile:SET-SAVING-PROFILE'


// state.profile.
const initialState = {
  posts: [
    {id: 0, likes: 0, message: `Hey, sup?`},
    {id: 1, likes: 23, message: `it's my first post`}
  ],

  info: null,             // null -> page is loading, false -> no user, [...] -> user info
  currentID: null,        // хранит ID показываемого профайла,
                          // чтобы менять содержимое страницы, если он вдруг изменится
                          // типа URL то при этом меняется, но вот <Route просто
                          // переиспользует созданный ранее инстанс класса ProfileContainer
  saving: false
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts].concat({
          id: state.posts.length,
          likes: 0,
          message: action.text
            .split('\n')
            .map((text, i) => <p key={i}>{text}</p>)
        })
      }

    case SET_PROFILE:
      return {
        ...state,
        info: action.info
      }

    case SET_CURRENT_ID:
      return {
        ...state,
        currentID: action.id
      }

    case RESET_PAGE:
      return {
        ...initialState
      }

    case SET_SAVING_PROFILE:
      return {
        ...state,
        saving: action.saving
      }

    default:
      return state
  }
}

// actions
export const addPostAC = (text) => ({type: ADD_POST, text})
export const resetPage = () => ({type: RESET_PAGE})
export const setProfile = (info) => ({type: SET_PROFILE, info})
export const setCurrentId = (id) => ({type: SET_CURRENT_ID, id})
export const setSavingProfile = (saving) => ({type: SET_SAVING_PROFILE, saving})


// thunks
export const addPost = (formData, formName) => (dispatch) => {
  dispatch(reset(formName))
  dispatch(addPostAC(formData.text))
}

export const setProfileAPI = (id) => (dispatch) => {

  dispatch(setCurrentId(id))

  API_profile.setProfile(id)
    .then(data => {
      if (data)
        dispatch(setProfile(data.info))
    })


}

export const saveProfileAPI = (data, callback) => (dispatch) => {

  dispatch(setSavingProfile(true))

  API_profile.saveProfile('patch', data)
    .then(data => {
      if (data) {
        dispatch(setProfile(data.info))
        callback(data.info.userInfo)
      }
      setTimeout(() => dispatch(setSavingProfile(false)), 100)
    })
}

export const cancelProfileAPI = () => () => {
  API_profile.cancelSetProfile()
  API_profile.cancelSaveProfile()
}


export default profileReducer
