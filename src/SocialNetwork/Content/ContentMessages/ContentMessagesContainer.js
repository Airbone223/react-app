import { connect } from "react-redux"
import ContentMessages from './ContentMessages'

let mapStateToProps = (state) => {
    return {
    messageList: state.messageList.messageList
}
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


const ContentMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(ContentMessages)
export default ContentMessagesContainer