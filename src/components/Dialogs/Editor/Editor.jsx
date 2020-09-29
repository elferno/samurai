import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { notNull, maxLength } from 'utils/validators'
import { TextArea } from 'components/Common/FormFields'

import g_css from 'App.module.css'
import l_css from './Editor.module.css'

const css = {...g_css, ...l_css}

const validate = [
  notNull('ENTER YOUR MESSAGE'),
  maxLength(300)
]

const Editor = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={`${css.block} ${css.editor}`}>

      <div className={css.add_text}>
        <Field
          name='text'
          component={TextArea}
          validate={validate}
        />
      </div>

      <button className={`${css.button} ${css.add_button}`}>
        SEND<span> MESSAGE</span>
      </button>
    </form>
  )
}

export default reduxForm({form: 'sendMessage'})(Editor)