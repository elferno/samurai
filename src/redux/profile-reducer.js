const actionTypes = {
  ADD_POST: 'ADD-POST',
  SET_NEW_POST_TEXT: 'SET-NEW-POST-TEXT'
}

const initialState = {
  posts: [
    {id: 0, likes: 0, message: `Hey, sup?`},
    {id: 1, likes: 23, message: `it's my first post`}
  ],

  newPostText: ''
}

const profileReducer = (_state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_POST: {
      const state = {..._state}
      state.posts = [..._state.posts]
      state.posts.push({
        id: state.posts.length,
        likes: 0,
        message: state.newPostText
      })
      state.newPostText = ''
      return state
    }

    case actionTypes.SET_NEW_POST_TEXT: {
      const state = {..._state}
      state.newPostText = action.text
      return state
    }

    default:
      return _state
  }
}

export const setNewPostTextCreator = (text) => ({
  type: actionTypes.SET_NEW_POST_TEXT,
  text
})

export const addPostCreator = () => ({
  type: actionTypes.ADD_POST
})

export default profileReducer
