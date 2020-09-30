
import MessageMain from './MessageMain'
import {updateNewMessageTextActionCreator, addNewMessageActionCreator} from '../../Redux/message-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    newMessageText: state.messages.newMessageText,
    newMessages: state.messages.newMessages,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
  addMessage: ()=>{dispatch(addNewMessageActionCreator())},
  updateNewMessage: (text)=> {dispatch(updateNewMessageTextActionCreator(text))},
  }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps )(MessageMain)

export default MessagesContainer