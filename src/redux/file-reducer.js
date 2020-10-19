import {API_files} from 'api/api'
import {setNewPhotos} from './profile-reducer'

// thunks
export const submitFileAPI = (file, callback, type) => async (dispatch) => {
  const response = await API_files.uploadFile(file, type)

  console.log(response)

  if (type === 'avatar') dispatch(setNewPhotos(response))

  callback()
}

export const cancelFileAPI = () => () => {
  API_files.cancelUploadFile()
}