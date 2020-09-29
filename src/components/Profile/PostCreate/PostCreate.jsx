import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { notNull, maxLength } from 'utils/validators'
import { TextArea } from 'components/Common/FormFields'

import g_css from 'App.module.css'
import l_css from './PostCreate.module.css'

const css = {...g_css, ...l_css}

const validate = [
  notNull('ENTER YOUR POST TEXT'),
  maxLength(300)
]

const PostCreate = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={css.block}>
      <div className={css.block_label}>CREATE NEW POST</div>

      <div className={css.post_create}>

        <div className={css.add_text}>
          <Field
            name='text'
            component={TextArea}
            validate={validate}
          />
        </div>

        <button className={`${css.button} ${css.add_button}`}>ADD POST</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'sendPost'})(PostCreate)