import { connect } from 'react-redux'

import Editor from './Editor'
import {
  setNewMessageTextCreator,
  addMessageCreator
}
from
  'redux/dialogs-reducer'

const mapStateToProps = (state) => ({
  newMessageText: state.dialogs.newMessageText
})

const mapDispatchToProps = (dispatch) => ({
  onAddMessage: () => dispatch(addMessageCreator()),
  onSetNewMessageText: (text) => dispatch(setNewMessageTextCreator(text))
})

const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor)

export default EditorContainer