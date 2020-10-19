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

  let uploadFile = null
  let removeFile = null
  let affirmRemove = null
  let loading = null
  let setClassName = className
  //


  // state
  const [removeMode, setRemoveMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  //


  // functions
  const upload = e => {
    if (e.target.files.length) {
      setIsLoading(true)
      submitFile(e.target.files[0], () => setIsLoading(false), 'avatar')
    }
  }
  //


  // actions
  if (uploadText)
    uploadFile =
      <>
        <div onClick={() => ref_input.current.click()}>{uploadText}</div>
        <input onChange={upload} ref={ref_input} type='file'/>
      </>

  if (removeText)
    removeFile = <div onClick={() => setRemoveMode(true)}>{removeText}</div>

  if (removeMode) {
    uploadFile = null
    removeFile = null
    affirmRemove =
      <b>
        {affirmRemoveText}
        <div className={css.button}>DELETE</div>
        <div className={css.button} onClick={() => setRemoveMode(false)}>CANCEL</div>
      </b>
  }

  if (isLoading) {
    uploadFile = null
    removeFile = null
    affirmRemove = null

    setClassName = className + ' ' + loadingClassName

    loading = <LoadingIcon isWhite={true}/>
  }
  //


  // render
  return (
    <div className={setClassName}>
      {uploadFile}
      {removeFile}
      {affirmRemove}
      {loading}
    </div>
  )
}

export default Upload