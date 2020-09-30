import avatar1 from './../Content/ContentFriends/avatar1.jpg' 
import avatar2 from './../Content/ContentFriends/avatar2.jpg' 
import avatar3 from './../Content/ContentFriends/avatar3.jpg'
import avatar4 from './../Content/ContentFriends/avatar4.jpg' 
import avatar5 from './../Content/ContentFriends/avatar5.jpg' 

let initialState = {messageList: [
        {link: '/messages/ylia',
        avatar: avatar1, 
    name: "Юлия Косовец",
lasttext: 'Люблю тебя!' , 
lastData: '23.05.2020 в 20.00',
lastAnswer: 'И я люблю тебя!',
lastAnswerDate: '23.05.2020 в 20.01'} , 
{link: '/messages',
avatar: avatar3, 
name: "Иван Мицкевич",
lasttext: 'До завтра' , 
lastData: '23.05.2020 в 20.00',
lastAnswer: 'Договорились!',
lastAnswerDate: '23.05.2020 в 20.01'}, 
{link: '/messages',
avatar: avatar5, 
name: "Ян Луковский",
lasttext: 'Привет! Как дела?' , 
lastData: '23.05.2020 в 20.00',
lastAnswer: 'Привет, хорошо! как твои?',
lastAnswerDate: '23.05.2020 в 20.01'} ,
{link: '/messages',
avatar: avatar2, 
name: "Андрей Сугако",
lasttext: 'Прикольная тема!' , 
lastData: '23.05.2020 в 20.00',
lastAnswer: 'Ну, а я о чем!',
lastAnswerDate: '23.05.2020 в 20.01'} ,{link: '/messages',
avatar: avatar4, 
name: "Анастасия Косовец",
lasttext: 'Позвоню завтра.' , 
lastData: '23.05.2020 в 20.00',
lastAnswer: 'Хорошо, до завтра!',
lastAnswerDate: '23.05.2020 в 20.01'} ,
    ]}
    const messageListReducer = (state = initialState, action) => {
        return state
    }

    export default messageListReducer