import React from 'react'

import WebLink from 'components/Common/WebLink/WebLink'
import ProfileSettings from './ProfileSettings/ProfileSettings'

import g_css from 'App.module.css'
import l_css from './UserInfo.module.css'

const css = {...g_css, ...l_css}

class UserInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {editMode: false}
    this.toggleSS = this.toggleSS.bind(this)
  }

  toggleSS() {
    this.setState(state => ({editMode: !state.editMode}))
  }

  render() {

    const em = this.state.editMode
    const { dob, name, status, website, location, education, ownProfile } = this.props

    return (
      <div className={css.info}>
        { ownProfile &&
          <div onClick={this.toggleSS} className={`${css.edit_info} ${css.cc}`}>✎</div>
        }
        { ownProfile &&
          <ProfileSettings toggleSS={this.toggleSS} editMode={em} {...this.props}/>
        }
        <h1 className={css.ff_header}>{name}</h1>
        <div className={css.status}>{status || <i>your status could be here</i>}</div>
        <div className={css.info_content}>
          <p><b>Date of birth</b><i>:</i><u>{dob}</u></p>
          <p><b>Country</b><i>:</i><u>{location.country}</u></p>
          <p><b>City</b><i>:</i><u>{location.city}</u></p>
          <p><b>Education</b><i>:</i><u>{education || 'none'}</u></p>
          <p><b>Web-site</b><i>:</i><u><WebLink website={website} noContent={'none'}/></u></p>
        </div>
      </div>
    )
  }
}

export default UserInfo