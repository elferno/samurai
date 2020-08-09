const
  ADD_POST = 'profile:ADD-POST',
  RESET_PAGE = 'profile:RESET-PAGE',
  SET_PROFILE = 'profile:SET-PROFILE',
  SET_NEW_POST_TEXT = 'profile:SET-NEW-POST-TEXT'


// state.profile.
const initialState = {
  posts: [
    {id: 0, likes: 0, message: `Hey, sup?`},
    {id: 1, likes: 23, message: `it's my first post`}
  ],

  info: null,   // null -> page is loading, false -> no user, [...] -> user info

  newPostText: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts].concat({
          id: state.posts.length,
          likes: 0,
          message: state.newPostText
        }),
        newPostText: ''
      }

    case SET_PROFILE:
      return {
        ...state,
        info: action.info
      }

    case RESET_PAGE:
      return {
        ...initialState
      }

    case SET_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      }

    default:
      return state
  }
}

export const setNewPostText = (text) => ({
  type: SET_NEW_POST_TEXT,
  text
})

export const addPost = () => ({
  type: ADD_POST
})

export const resetPage = () => ({
  type: RESET_PAGE
})

export const setProfile = (info) => ({
  type: SET_PROFILE,
  info
})


export default profileReducer
