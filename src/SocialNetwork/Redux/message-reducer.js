const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
let initialState = {newMessages: [
    {
        text: 'И я тебя люблю',
        date: '20.5.2020 в 23:50'
    }

], 
newMessageText: 'новое текстовое сообщение...'}
const messageReducer = (state = initialState, action) =>{ 
    
switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:   
    return {
        ...state,
        newMessageText: action.newText,
    }
    
    case ADD_MESSAGE: 
    let date = new Date()
    let messageDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} в ${date.getHours()}.${date.getMinutes()}`
    return {
        ...state,
        newMessages: [...state.newMessages, {date: `${messageDate}`,
        text:  state.newMessageText} ],
        newMessageText: 'новое текстовое сообщение...',
    }
    
         default: return state
}


}

export const addNewMessageActionCreator = () => {
    return {
        type:ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => { return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}}

export default messageReducer;