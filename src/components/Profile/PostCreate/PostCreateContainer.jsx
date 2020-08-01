import { connect } from 'react-redux'

import PostCreate from './PostCreate'

import {
  setNewPostTextAC,
  addPostAC
} from
    'redux/profile-reducer'


const mapStateToProps = (state) => ({
  newPostText: state.profile.newPostText
})

const mapDispatchToProps = (dispatch) => ({
  onAddPost: () => dispatch(addPostAC()),
  onSetNewPostText: (text) => dispatch(setNewPostTextAC(text))
})

const PostCreateContainer = connect(mapStateToProps, mapDispatchToProps)(PostCreate)

export default PostCreateContainer