import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

import Profile from './Profile'
import Error404 from 'components/Common/Error404/Error404'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

/**
 @param {{requested_id:number}} data
*/

import {
  addPost,
  resetPage,
  setProfile,
  setCurrentId,
  setNewPostText
} from
    'redux/profile-reducer'

class ProfileAPI extends React.Component {
  get url_id() {
    return this.props.match.params.id || 'own'
  }

  get isOwnPage() {
    return this.url_id === 'own'
  }
  setProfile() {
    this.props.setCurrentId(this.url_id)
    axios
      .get(
        `https://fishup.fun/api/profile.php?id=${this.url_id}`,
        {withCredentials: 'include'}
      )
      .then(response => {
        if (response.data.requested_id === this.url_id)
          this.props.setProfile(response.data.info)
      })
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

    // when URL change : profile/0 -> profile/1
    if (
      this.props.state.currentID !== null &&
      this.props.state.currentID !== this.url_id
    )
      reset = true

    // when login/logout (only for own page)
    if (
      this.isOwnPage &&
      prevProps.auth.userID !== this.props.auth.userID
    )
      reset = true

    if (reset) {
      this.props.resetPage()
      this.setProfile()
    }
  }

  render() {
    const {
      state,
      addPost,
      setNewPostText
    } = this.props

    const ownPage_authFetching = (this.props.auth.fetching && this.isOwnPage)
    const ownPage_noAuth = (!this.props.auth.userID && this.isOwnPage)

    return (
      <PreloadContent
        isLoading={state.info === null  || ownPage_authFetching}
        noContent={state.info === false || ownPage_noAuth}
        noContentFiller={<Error404 />}
      >
        <Profile
          state={state}
          addPost={addPost}
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
  setProfile,
  setCurrentId,
  setNewPostText
})
  (withRouter(ProfileAPI))

export default ProfileContainer