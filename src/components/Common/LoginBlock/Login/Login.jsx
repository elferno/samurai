import React from 'react'

import g_css from 'App.module.css'
import l_css from './Login.module.css'
const css = {...g_css, ...l_css}

const Login = ({ login, pass, stay, makeLogin, text, checkbox }) => {
  return (
    <>
      <div className={css.input_text}>
        <input
          type='text'
          value={login}
          className={login ? css.filled : null}
          onChange={(e) => text('login', e)}
        />
        <label>login</label>
      </div>

      <div className={css.input_text}>
        <input
          type='password'
          value={pass}
          className={pass ? css.filled : null}
          onChange={(e) => text('pass', e)}
          onKeyPress={(e) => {if (e.key === 'Enter') makeLogin()}}
        />
        <label>password</label>
      </div>

      <div className={css.settings}>
        <div className={css.input_checkbox}>
          <input
            id='stayIn'
            type='checkbox'
            value={stay}
            onChange={checkbox}
          />
          <label htmlFor="stayIn">stay in</label>
        </div>
        <div
          className={`${css.button} ${css.login_button}`}
          onClick={makeLogin}
        >
          LOGIN
        </div>
      </div>
    </>
  )
}

export default Login