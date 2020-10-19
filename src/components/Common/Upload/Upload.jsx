import React, {useRef, useState} from 'react'

import {LoadingIcon} from 'components/Common/Loading/Loading'

import css from 'App.module.css'


const Upload = (props) => {

  // var
  const {
    className,
    loadingClassName = null,

    removeText = null,
    affirmRemoveText = null,

    uploadText = null,

    submitFile
  }
    = props

  const ref_input = useRef(null)

  let content = null
  let setClassName = className
  //


  // state
  const [removeMode, setRemoveMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  //


  // functions
  const upload = e => {
    if (e.target.files.length) {
      setIsLoading(true)
      submitFile(e.target.files[0], e => uploaded(e), 'avatar')
    }
  }

  const uploaded = error => {
    setIsLoading(false)
    setError(error)
  }
  //


  // actions
  if (uploadText)
    content =
      <>
        <div onClick={() => ref_input.current.click()}>{uploadText}</div>
        <input onChange={upload} ref={ref_input} type='file'/>
        {removeText &&
        <div onClick={() => setRemoveMode(true)}>{removeText}</div>
        }
      </>

  if (removeMode)
    content =
      <b>
        {affirmRemoveText}
        <div className={css.button}>DELETE</div>
        <div className={css.button} onClick={() => setRemoveMode(false)}>CANCEL</div>
      </b>

  if (isLoading) {
    setClassName = className + ' ' + loadingClassName
    content = <LoadingIcon isWhite={true}/>
  }

  if (error) {
    setClassName = className + ' ' + loadingClassName
    content =
      <b>
        {error}
        <div style={{
          backgroundColor: 'var(--dark-blue)',
          marginTop: 'var(--mm)',
          marginBottom: 0
        }} className={css.button} onClick={() => setError(false)}>OK</div>
      </b>
  }
  //


  // render
  return <div className={setClassName}>{content}</div>
}

export default Upload