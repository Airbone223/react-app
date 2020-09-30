import {connect} from 'react-redux'
import ContentProfile from './ContentProfile'
import {addPostActionCreator, updateNewTextActionCreator} from './../../Redux/posts-reducer'

let mapStateToProps = (state) => {
    
    return {
postList: state.post.posts,
newPostText:state.post.newPostText,
    }
}

let mapDispatchToProps = (dispatch)=>  {
    return {
        addPosts: ()=> {dispatch(addPostActionCreator())},
        updateNewPost:(text) => {dispatch(updateNewTextActionCreator(text))},
    }
}

const ContentProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ContentProfile)

export default ContentProfileContainer