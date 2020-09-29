import React from 'react'
import css from 'App.module.css'

export const TextArea = ({input, meta, ...props}) => {

  const hasError = meta.touched && meta.error

  return (
    <>
      <textarea
        className={hasError ? css.field_error : null}
        {...input}
        {...props}
      />
      { hasError && <div className={css.field_error_box}>{meta.error}</div> }
    </>
  )
}

export const InputText = ({label, extraClass = null, input, meta, ...props}) => {

  const hasError = meta.touched && meta.error

  return (
    <div className={css.input_text + (extraClass ? ' ' + extraClass : '')}>
      <input
        className={hasError ? css.field_error : null}
        {...input}
        {...props}
      />
      { hasError && <div className={css.field_error_box}>{meta.error}</div> }
      <label>{label}</label>
    </div>
  )
}

export const InputCheck = ({label, input, ...props}) => {
  return (
    <div className={css.input_checkbox}>
      <input
        {...input}
        {...props}
      />
      <label htmlFor={props.id}>{label}</label>
    </div>
  )
}