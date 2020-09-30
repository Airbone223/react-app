import {connect} from 'react-redux' 
import ContentFriends from './ContentFriends'


let mapStateToProps = (state) => {
    return {
        friendsList: state.friendsList.friendsList,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const ContentFriendsContainer = connect(mapStateToProps, mapDispatchToProps) (ContentFriends)

export default ContentFriendsContainer