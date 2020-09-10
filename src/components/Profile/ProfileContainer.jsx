import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Profile from './Profile'
import Error404 from 'components/Common/Error404/Error404'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

/**
 @param {{requested_id:number}} data
*/

import {
  addPost,
  resetPage,
  setNewPostText,

  setProfileAPI
} from
    'redux/profile-reducer'

class ProfileAPI extends React.Component {
  get url_id() { return this.props.match.params.id || 'own' }
  get isOwnPage() { return this.url_id === 'own' }

  setProfile() {
    this.props.setProfileAPI(this.url_id)
  }

  componentDidMount() {
    this.setProfile()
  }

  componentWillUnmount() {
    this.props.match.params.id = null
    this.props.resetPage()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let reset = false

    // when URL changed
    if (
      this.props.state.currentID !== null &&      // not initial page load
      this.props.state.currentID !== this.url_id  // URL changed
    )
      reset = true

    // when login / logout
    if (prevProps.auth.isAuth !== this.props.auth.isAuth)
      reset = true

    if (reset) {
      this.props.resetPage()
      this.setProfile()
    }
  }

  render() {
    const {
      auth,
      state,
      addPost,
      setNewPostText
    } = this.props

    const ownPage_noAuth = (!auth.isAuth && this.isOwnPage)

    return (
      <PreloadContent
        isLoading={state.info === null  || this.props.auth.fetching}
        noContent={state.info === false || ownPage_noAuth}
        noContentFiller={<Error404 />}
      >
        <Profile
          state={state}
          addPost={addPost}
          isAuth={auth.isAuth}
          setNewPostText={setNewPostText}
        />
      </PreloadContent>
    )
  }
}

const ProfileContainer = connect((state) => ({
  state: state.profile
}), {
  addPost,
  resetPage,
  setNewPostText,

  setProfileAPI
})
  (withRouter(ProfileAPI))

export default ProfileContainer