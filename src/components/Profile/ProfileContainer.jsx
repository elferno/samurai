import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

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

  setProfileAPI,
  saveProfileAPI,
  cancelAPI
} from
    'redux/profile-reducer'

class ProfileAPI extends React.Component {
  get url_id() { return this.props.match.params.id || 'own' }

  setProfile() {
    this.props.setProfileAPI(this.url_id)
  }

  componentDidMount() {
    this.setProfile()
  }

  componentWillUnmount() {
    this.props.cancelAPI()
    this.props.match.params.id = null
    this.props.resetPage()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let reset = false

    // URL changed
    if (
      this.props.state.currentID !== null &&      // not initial page load
      this.props.state.currentID !== this.url_id  // URL changed
    )
      reset = true

    // login / logout
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

    const ownProfile = this.url_id === 'own'

    if (!auth.isAuth && ownProfile)  // .../profile -> logged out
      return <Redirect to='/'/>

    return (
      <PreloadContent
        isLoading={state.info === null || this.props.auth.fetching}
        noContent={state.info === false}
        noContentFiller={<Error404/>}
      >
        <Profile
          state={state}
          addPost={addPost}
          isAuth={auth.isAuth}
          ownProfile={ownProfile}
          saveProfile={this.props.saveProfileAPI}
          setNewPostText={setNewPostText}
        />
      </PreloadContent>
    )
  }
}

const mapStateToProps = (state) => ({
  state: state.profile
})

const mapDispatchToProps = {
  addPost,
  resetPage,
  setNewPostText,

  setProfileAPI,
  saveProfileAPI,
  cancelAPI
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)
  (ProfileAPI)