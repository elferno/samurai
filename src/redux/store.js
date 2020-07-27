import friendsReducer from './friends-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

const store = {
  _state: {
    friends: {
      list: [
        {
          id: 0,
          name: 'Dimych',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLw-qZbOBQx5D_XOrUcgoBveudF5epe_DqBg&usqp=CAU'
        },
        {
          id: 1,
          name: 'Klaus',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8Dkhe1mZT_0f6Ulh5yshS-NZPMcwKJ8tKsg&usqp=CAU'
        },
        {
          id: 2,
          name: 'Eby',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRniCRvfYCPVI7ovlNCr3IDn1xxVBqeaJoppw&usqp=CAU'
        }
      ],

      possible_list: []
    },
    profile: {
      posts: [
        {id: 0, likes: 0, message: `Hey, sup?`},
        {id: 1, likes: 23, message: `it's my first post`}
      ],

      newPostText: ''
    },
    dialogs: {
      messages: [
        {id: 0, text: 'message #0'},
        {id: 1, text: 'message #1'},
        {id: 2, text: 'message #2'},
      ],

      contacts: [
        {id: 0, name: 'Dimych', active: true},
        {id: 1, name: 'Elijah'},
        {id: 2, name: 'Klaus'},
        {id: 3, name: 'Sam'},
        {id: 4, name: 'Eby'},
        {id: 5, name: 'Erny'}
      ],

      newMessageText: ''
    }
  },
  _callSubscriber: () => {},

  subscribe(observer) { this._callSubscriber = observer },
  getState() { return this._state },

  dispatch(action) {
    this._state = {
      friends: friendsReducer(this.getState().friends, action),
      profile: profileReducer(this.getState().profile, action),
      dialogs: dialogsReducer(this.getState().dialogs, action)
    }

    this._callSubscriber(this.getState())

    return this._state
  }
}

export default store