import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import Profile from './Profile'
import Error404 from 'components/Common/Error404/Error404'
import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import {
  addPost,
  resetPage,
  setProfile,
  setNewPostText
} from
    'redux/profile-reducer'

class ProfileAPI extends React.Component {
  componentDidMount() {
    axios
      .get(`https://powernet.su/api/profile.php?id=9640`)
      .then(response => {
        this.props.setProfile(response.data.info)
      })
  }

  componentWillUnmount() {
    this.props.resetPage()
  }

  render() {

    const {
      state,
      addPost,
      setNewPostText
    } = this.props

    return (
      <PreloadContent
        isLoading={state.info === null}
        noContent={state.info === false}
        noContentFiller={<Error404/>}
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
  setNewPostText
})
(ProfileAPI)

export default ProfileContainer