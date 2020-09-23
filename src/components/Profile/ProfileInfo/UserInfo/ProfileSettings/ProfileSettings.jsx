import React from 'react'
import {createPortal} from 'react-dom'

import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import g_css from 'App.module.css'
import l_css from './ProfileSettings.module.css'

const css = {...g_css, ...l_css}

/**
 * @param props.saveProfile {function}
 */

class ProfileSettings extends React.Component {

  constructor(props) {
    super(props)

    this.state = ProfileSettings.createState(this.props)
    this.initialState = {...this.state}

    this.el = document.createElement('div')
    this.inputHandler = this.inputHandler.bind(this)
    this.saved = this.saved.bind(this)
  }

  static createState(data) {
    return {
      name: data.name || '',
      status: data.status || '',
      country: data.location.country || '',
      city: data.location.city || '',
      education: data.education || '',
      website: data.website || '',
      dob: data.dob || ''
    }
  }

  componentDidMount() {
    this.portal = document.getElementById('settings-portal')
    this.portal.appendChild(this.el)
  }

  componentWillUnmount() {
    this.portal.removeChild(this.el)
  }

  inputHandler(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  close() {
    this.setState(this.initialState)
    this.props.toggleSS()
  }

  save() {
    this.props.saveProfile(this.state, this.saved)
  }

  saved(response) {
    this.setState(
      ProfileSettings.createState(response),
      () => { this.initialState = {...this.state} }
    )
    this.props.toggleSS()
  }

  render() {
    const {editMode, ownProfile, isSavingProfile} = this.props

    const inputs = Object.keys(this.state)
      .map((name, order) => {
        const value = this.state[name]
        const handler = this.inputHandler
        return <InsertInput key={order} name={name} value={value} handler={handler}/>
      })

    let className = css.profile_settings
    if (editMode) className += ' ' + css.edit_mode
    if (isSavingProfile) className += ' ' + css.cc

    return createPortal(
      <div className={className}>
        <PreloadContent
          isLoading={isSavingProfile}
          noContent={!ownProfile}
          noContentFiller={null}
          clearContent={true}
        >
          <div className={css.buttons}>
            <div onClick={() => this.close()} className={css.button}>close</div>
            <div onClick={() => this.save()} className={css.button}>SAVE</div>
          </div>
          {inputs}
        </PreloadContent>
      </div>,
      this.el
    )
  }
}

const InsertInput = ({name, value, handler}) => {

  let className = `${css.input_text} ${css.settings_input}`
  if (name === 'status')
    className = `${css.input_text} ${css.settings_input_long}`

  return (
    <div className={className}>
      <input
        id={name}
        type='text'
        value={value}
        onChange={handler}
        className={value ? css.filled : null}
      />
      <label>{name === 'dob' ? 'date of birth' : name}</label>
    </div>
  )
}

export default ProfileSettings