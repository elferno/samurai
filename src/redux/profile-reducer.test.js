import profileReducer, {addPostAC} from './profile-reducer'

// 1. test data
const state = {
  posts: [
    {id: 0, likes: 0, message: `Hey, sup?`},
    {id: 1, likes: 23, message: `it's my first post`}
  ],
  info: null,
  currentID: null,
  saving: false
}

const messageText = 'new post text'

it(`posts count should be incremented`, () => {
  // 2. action
  const action = addPostAC(messageText)
  const newState = profileReducer(state, action)

  // 3. expectations
  expect(newState.posts.length).toBe(3)
})
