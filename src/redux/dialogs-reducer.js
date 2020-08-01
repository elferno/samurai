import React from 'react'

const actionTypes = {
  ADD_MESSAGE: 'ADD-MESSAGE',
  SET_NEW_MESSAGE_TEXT: 'SET-NEW-MESSAGE-TEXT'
}

// state.dialogs.
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

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages].concat({
          id: state.messages.length,
          text: state.newMessageText
            .split('\n')
            .map((text, i) => <p key={i}>{text}</p>)
        }),
        newMessageText: ''
      }

    case actionTypes.SET_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      }

    default:
      return state
  }
}

export const setNewMessageTextAC = (text) => ({
  type: actionTypes.SET_NEW_MESSAGE_TEXT,
  text
})

export const addMessageAC = () => ({
  type: actionTypes.ADD_MESSAGE
})

export default dialogsReducer