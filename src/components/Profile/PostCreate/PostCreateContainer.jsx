import { connect } from 'react-redux'

import PostCreate from './PostCreate'

import {
  setNewPostTextCreator,
  addPostCreator
} from
    'redux/profile-reducer'


const mapStateToProps = (state) => ({
  newPostText: state.profile.newPostText
})

const mapDispatchToProps = (dispatch) => ({
  onAddPost: () => dispatch(addPostCreator()),
  onSetNewPostText: (text) => dispatch(setNewPostTextCreator(text))
})

const PostCreateContainer = connect(mapStateToProps, mapDispatchToProps)(PostCreate)

export default PostCreateContainer