import axios from 'axios'

export const API_auth = () => {
  return axios.get(
    'https://fishup.fun/api/auth.php',
    { withCredentials: 'include' }
  )
    .then(response => response.data)
}

export const API_login = (login, pass, stay) => {
  return axios.get(
    `https://fishup.fun/api/auth.php?login=${login}&pass=${pass}&stay=${stay}`,
    { withCredentials: 'include' }
  )
    .then(response => response.data)
}

export const API_logout = () => {
  return axios.get(
    'https://fishup.fun/api/auth.php?kill',
    { withCredentials: 'include' }
  )
}


export const API_setProfile = (id) => {
  return axios.get(
      `https://fishup.fun/api/profile.php?id=${id}`,
      { withCredentials: 'include' }
    )
    .then(response => response.data)
}


export const API_getUsers = (page, limit) => {
  return axios.get(
      `https://fishup.fun/api/users.php?page=${page}&limit=${limit}`,
      { withCredentials: 'include' }
    )
    .then(response => response.data)
}


export const API_setFriendTo = (method, data) => {
  return axios(
      `https://fishup.fun/api/friends.php`,
      { method, data, withCredentials: 'include' }
    )
    .then(response => response.data)
}

export const API_setFollowTo = (method, data) => {
  return axios(
      `https://fishup.fun/api/follow.php`,
      { method, data, withCredentials: 'include' }
    )
    .then(response => response.data)
}