import React from 'react'
import {Field, reduxForm} from 'redux-form'

import {notNull} from 'utils/validators'
import {InputText, InputCheck} from 'components/Common/FormFields'

import g_css from '../../../App.module.css'
import l_css from './Login.module.css'

const css = {...g_css, ...l_css}

const validate = {
  login: [notNull('ENTER LOGIN')],
  pass: [notNull('ENTER PASSWORD')]
}

const Login = (props) => {

  if (props.error)
    return (
      <div className={`${css.cc} ${css.cc_column}`}>
        <div>{props.error}</div>
        <div
          className={`${css.button} ${css.accept_error}`}
          onClick={() => props.setLoginError(null)}
        >
          OK
        </div>
      </div>
    )

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name='login'
        type='text'
        label='login'
        component={InputText}
        validate={validate.login}
      />

      <Field
        name='pass'
        type='password'
        label='password'
        component={InputText}
        validate={validate.pass}
      />

      <div className={css.settings}>
        <Field
          id='stay'
          name='stay'
          type='checkbox'
          label='stay in'
          component={InputCheck}
        />

        <button className={`${css.button} ${css.login_button}`}>LOGIN</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'login'})(Login)