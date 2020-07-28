import React from 'react'

const actionTypes = {
  ADD_MESSAGE: 'ADD-MESSAGE',
  SET_NEW_MESSAGE_TEXT: 'SET-NEW-MESSAGE-TEXT'
}

const initialState = {
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

const dialogsReducer = (_state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_MESSAGE: {
      const state = {..._state}
      state.posts = [..._state.messages]

      state.messages.push({
        id: state.messages.length,
        text: state.newMessageText
          .split('\n')
          .map((text, i) => <p key={i}>{text}</p>)
      })
      state.newMessageText = ''
      return state
    }

    case actionTypes.SET_NEW_MESSAGE_TEXT: {
      const state = {..._state}
      state.newMessageText = action.text
      return state
    }

    default:
      return _state
  }
}

export const setNewMessageTextCreator = (text) => ({
  type: actionTypes.SET_NEW_MESSAGE_TEXT,
  text
})

export const addMessageCreator = () => ({
  type: actionTypes.ADD_MESSAGE
})

export default dialogsReducer