import { connect } from 'react-redux'

import Messages from './Messages'

const messagesBlockStyle = () => {
  const screenH = window.innerHeight
    || document.element.clientHeight
    || document.body.clientHeight;
  return { 'minHeight' : screenH - (50 + 132 + 16 * 3) }
}

const mapStateToProps = (state) => ({
  messagesBlockStyle: messagesBlockStyle(),
  messages: state.dialogs.messages
})

const MessagesContainer = connect(mapStateToProps)(Messages)

export default MessagesContainer