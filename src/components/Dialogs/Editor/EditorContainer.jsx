import { connect } from 'react-redux'

import Editor from './Editor'
import {
  setNewMessageTextAC,
  addMessageAC
}
from
  'redux/dialogs-reducer'

const mapStateToProps = (state) => ({
  newMessageText: state.dialogs.newMessageText
})

const mapDispatchToProps = (dispatch) => ({
  onAddMessage: () => dispatch(addMessageAC()),
  onSetNewMessageText: (text) => dispatch(setNewMessageTextAC(text))
})

const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor)

export default EditorContainer