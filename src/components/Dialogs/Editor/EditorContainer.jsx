import {connect} from 'react-redux'

import Editor from './Editor'
import { addMessage } from 'redux/dialogs-reducer'

const EditorContainer = connect(null, {
  onSubmit: formData => addMessage(formData, 'sendMessage')
})
  (Editor)

export default EditorContainer