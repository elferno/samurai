import { connect } from 'react-redux'

import DialogList from './DialogList'


const mapStateToProps = (state) => ({
  contacts: state.dialogs.contacts
})

const DialogListContainer = connect(mapStateToProps)(DialogList)

export default DialogListContainer