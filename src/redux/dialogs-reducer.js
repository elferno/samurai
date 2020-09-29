import React from 'react'
import { reset } from 'redux-form'

const
  ADD_MESSAGE = 'dialogs:ADD-MESSAGE'


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
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages].concat({
          id: state.messages.length,
          text: action.text
            .split('\n')
            .map((text, i) => <p key={i}>{text}</p>)
        })
      }

    default:
      return state
  }
}

const addMessageAC = (text) => ({type: ADD_MESSAGE, text })

export const addMessage = (formData, formName) => (dispatch) => {
  dispatch(reset(formName))
  dispatch(addMessageAC(formData.text))
}

export default dialogsReducer