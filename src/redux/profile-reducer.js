const actionTypes = {
  ADD_POST: 'ADD-POST',
  SET_NEW_POST_TEXT: 'SET-NEW-POST-TEXT'
}

// state.profile.
const initialState = {
  posts: [
    {id: 0, likes: 0, message: `Hey, sup?`},
    {id: 1, likes: 23, message: `it's my first post`}
  ],

  newPostText: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts].concat({
          id: state.posts.length,
          likes: 0,
          message: state.newPostText
        }),
        newPostText: ''
      }

    case actionTypes.SET_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      }

    default:
      return state
  }
}

export const setNewPostTextAC = (text) => ({
  type: actionTypes.SET_NEW_POST_TEXT,
  text
})

export const addPostAC = () => ({
  type: actionTypes.ADD_POST
})

export default profileReducer
