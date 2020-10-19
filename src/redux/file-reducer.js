import {API_files} from 'api/api'
import {setNewPhotos} from './profile-reducer'

// thunks
export const submitFileAPI = (file, callback, type) => async (dispatch) => {
  const response = await API_files.uploadFile(file, type)

  if (!response)
    return null

  if (!response.error) {
    if (type === 'avatar') dispatch(setNewPhotos(response.photos))
  }

  callback(response.error)
}

export const cancelFileAPI = () => () => {
  API_files.cancelUploadFile()
}