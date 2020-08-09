import { connect } from 'react-redux'

import Editor from './Editor'
import {
  setNewMessageText,
  addMessage
}
from
  'redux/dialogs-reducer'

const mapStateToProps = (state) => ({
  newMessageText: state.dialogs.newMessageText
})

const EditorContainer = connect(mapStateToProps, {
  setNewMessageText,
  addMessage
})(Editor)

export default EditorContainer