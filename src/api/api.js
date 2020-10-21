import axios from 'axios'

// core
const xml = axios.create({
  baseURL: 'https://fishup.fun/api/',
  withCredentials: 'include',
  responseType: 'json'
})

const cancelled = (th) => {
  return !axios.isCancel(th)
}

const createToken = (callback) => {
  return new axios.CancelToken(f => callback(f))
}

const request = (url, method, data, cancelToken, headers = null) => {
  return xml(url, {method, data, cancelToken, headers})
    .then(response => response.data)
    .catch(th => cancelled(th))
}
//


// instances
export const API_auth = {
  auth() {
    return request('auth.php', 'GET')
  },

  login(login, pass, stay) {
    const url = `auth.php?login=${login}&pass=${pass}&stay=${stay}`
    return request(url, 'GET')
  },

  logout() {
    return request('auth.php', 'DELETE')
  }
}

export const API_profile = {
  setProfile(id) {
    const url = `profile.php?id=${id}`
    const cancelToken = createToken(f => this.cancelSetProfile = f)

    return request(url, 'GET', null, cancelToken)
  },
  cancelSetProfile(){},

  saveProfile(data) {
    const url = 'profile.php'
    const cancelToken = createToken(f => this.cancelSaveProfile = f)

    return request(url, 'PATCH', data, cancelToken)
  },
  cancelSaveProfile(){}
}


export const API_users = {
  getUsers(page, limit) {
    const url = `users.php?page=${page}&limit=${limit}`
    const cancelToken = createToken(f => this.cancelGetUsers = f)

    return request(url, 'GET', null, cancelToken)
  },
  cancelGetUsers(){}
}


export const API_friends = {
  setFriendTo(makeFriend, data) {
    const method = makeFriend ? 'PATCH' : 'DELETE'
    return request('friends.php', method, data, null)
  }
}


export const API_follow = {
  setFollowTo(makeFollow, data) {
    const method = makeFollow ? 'PATCH' : 'DELETE'
    return request('follow.php', method, data, null)
  }
}

export const API_files = {
  uploadFile(file, type) {
    // var
    const url = 'file.php'

    const data = new FormData()
    data.append('file', file)
    data.append('type', type)

    const cancelToken = createToken(f => this.cancelUploadFile = f)

    const headers = {'Content-Type': 'multipart/form-data'}
    //

    // request
    return request(url, 'POST', data, cancelToken, headers)
  },
  cancelUploadFile(){},

  deleteFile(file_ID, type) {

  }
}
//