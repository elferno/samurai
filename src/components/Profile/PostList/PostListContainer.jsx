import { connect } from 'react-redux'

import PostList from './PostList'


const mapStateToProps = (state) => ({
  posts: state.profile.posts
})

const PostListContainer = connect(mapStateToProps)(PostList)

export default PostListContainer