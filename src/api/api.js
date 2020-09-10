import axios from 'axios'

const xml = axios.create({
  baseURL: 'https://fishup.fun/api/',
  withCredentials: 'include',
  responseType: 'json'
})

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
    return xml.get(`profile.php?id=${id}`)
      .then(response => response.data)
  }
}


export const API_users = {
  getUsers(page, limit) {
    return xml.get(`users.php?page=${page}&limit=${limit}`)
      .then(response => response.data)
  }
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