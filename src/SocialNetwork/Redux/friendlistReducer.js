import avatar1 from './../Content/ContentFriends/avatar1.jpg' 
import avatar2 from './../Content/ContentFriends/avatar2.jpg' 
import avatar3 from './../Content/ContentFriends/avatar3.jpg'
import avatar4 from './../Content/ContentFriends/avatar4.jpg' 
import avatar5 from './../Content/ContentFriends/avatar5.jpg' 


let initialState = {
    friendsList: [
        {name: "Юлия Косовец" ,
        link:  '/messages/ylia' ,
        avatar: avatar1 ,} ,
         {name: "Андрей Сугако" ,
        link:  '/messages' ,
        avatar: avatar2 ,}, 
        {name: "Иван Мицкевич" ,
        link:  '/messages' ,
        avatar: avatar3 ,} ,
        {name: "Анастасия Косовец" ,
        link:  '/messages' ,
        avatar: avatar4 ,} ,
        {name: "Ян Луковский" ,
        link:  '/messages' ,
        avatar: avatar5,}
    ]
}

const friendlistReducer = (state=initialState, action) =>  state
export default friendlistReducer