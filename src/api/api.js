import axios from 'axios'

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

export const API_auth = {
  auth() {
    return xml.get('auth.php')
      .then(response => response.data)
  },

  login(login, pass, stay) {
    return xml.get(`auth.php?login=${login}&pass=${pass}&stay=${stay}`)
      .then(response => response.data)
  },

  logout() {
    return xml.get('auth.php?kill')
  }
}

export const API_profile = {
  setProfile(id) {

    const cancelToken = createToken(f => this.cancelSetProfile = f)

    return xml.get(`profile.php?id=${id}`, {cancelToken})
      .then(response => response.data)
      .catch(th => cancelled(th))
  }, cancelSetProfile(){},

  saveProfile(method, data) {

    const cancelToken = createToken(f => this.cancelSaveProfile = f)

    return xml('profile.php', {method, data, cancelToken})
      .then(response => response.data)
      .catch(th => cancelled(th))
  }, cancelSaveProfile(){}
}


export const API_users = {
  getUsers(page, limit) {

    const url = `users.php?page=${page}&limit=${limit}`
    const cancelToken = createToken(f => this.cancelGetUsers = f)

    return xml.get(url, { cancelToken })
      .then(response => response.data)
      .catch(th => cancelled(th))
  }, cancelGetUsers() {}
}


export const API_friends = {
  setFriendTo(method, data) {
    return xml('friends.php', {method, data})
      .then(response => response.data)
  }
}


export const API_follow = {
  setFollowTo(method, data) {
    return xml('follow.php', {method, data})
      .then(response => response.data)
  }
}