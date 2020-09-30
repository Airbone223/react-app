const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'


let initialState = {posts :
    [
        {date: '21.5.2020 в 00.20',
     text: 'мой первый пост'}, {date: '21.5.2020 в 00.20',
     text: 'мой второй  пост'}, 
    ], 
    newPostText: 'новая запись...'}
const postsReducer = (state = initialState, action) => {

    
switch(action.type) {
    case ADD_POST: 
       
        let date = new Date()
let postDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} в ${date.getHours()}.${date.getMinutes()}`
return {
    ...state,
    posts: [...state.posts, {date: `${postDate}`,
    text:  state.newPostText}],
    newPostText:'новая запись...'
}
   case UPDATE_NEW_TEXT:
     return   {
           ...state,
           newPostText: action.newText
       }
    
   default: return state
}}

export const addPostActionCreator = () => {
    return {
        type:ADD_POST
    }
}

export const updateNewTextActionCreator = (text) => { return {type: UPDATE_NEW_TEXT, newText: text}}
export default postsReducer