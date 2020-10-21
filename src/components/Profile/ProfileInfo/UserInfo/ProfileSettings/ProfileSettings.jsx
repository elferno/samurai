import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { createPortal } from 'react-dom'

import { notNull, maxLength } from 'utils/validators'
import { InputText } from 'components/Common/FormFields'

import PreloadContent from 'components/Common/PreloadContent/PreloadContent'

import g_css from 'App.module.css'
import l_css from './ProfileSettings.module.css'

const css = {...g_css, ...l_css}

const validate = {
  name: [notNull('ENTER YOUR NAME'), maxLength(20)],
  status: [maxLength(50)],
  country: [maxLength(30)],
  city: [maxLength(20)],
  education: [maxLength(20)],
  website: [maxLength(50)],
  dob: [maxLength(10)]
}

/**
 * @param props.saveProfile {function}
 * @param props.toggleSS {function}
*/

class ProfileSettings extends React.Component {

  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    this.portal = document.getElementById('settings-portal')
    this.portal.appendChild(this.el)
  }

  componentWillUnmount() {
    this.portal.removeChild(this.el)
  }

  close() {
    this.props.reset()
    this.props.toggleSS()
  }

  render() {
    const { editMode, ownProfile, isSavingProfile, handleSubmit, onSubmit } = this.props

    const inputs = Object.keys(this.props.initialValues)
      .map((name, order) => <InsertInput name={name} key={order}/>)

    let className = css.profile_settings
    if (editMode) className += ' ' + css.edit_mode
    if (isSavingProfile) className += ' ' + css.cc

    return createPortal(
      <form
        onSubmit={handleSubmit(formData => onSubmit(formData, this.close.bind(this)))}
        className={className}
      >
        <PreloadContent
          isLoading={isSavingProfile}
          noContent={!ownProfile}
          noContentFiller={null}
          clearContent={true}
        >

          <div className={css.buttons}>
            <button type='button' onClick={() => this.close()} className={css.button}>
              CLOSE</button>
            <button type='submit' className={css.button}>
              SAVE</button>
          </div>

          { inputs }

        </PreloadContent>
      </form>,
      this.el
    )
  }
}

const InsertInput = ({ name }) => {
  return <Field
            name={name}
            type='text'
            label={name === 'dob' ? 'date of birth' : name}
            extraClass={css.settings_input}
            component={InputText}
            validate={validate[name]}
          />
}

export default reduxForm({form: 'profileSettings', enableReinitialize: true})(ProfileSettings)