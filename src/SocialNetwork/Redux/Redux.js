import avatar1 from './../Content/ContentFriends/avatar1.jpg' 
import avatar2 from './../Content/ContentFriends/avatar2.jpg' 
import avatar3 from './../Content/ContentFriends/avatar3.jpg'
import avatar4 from './../Content/ContentFriends/avatar4.jpg' 
import avatar5 from './../Content/ContentFriends/avatar5.jpg' 
import messageReducer from './message-reducer'
import postsReducer from './posts-reducer'




let Store = {
 _state : {
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
,
    messageList: [
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

    ]
, 
newsList: [
    {title: 'Украина вводит пошлины на спички из Беларуси и России' ,
    date: 'Опубликовано 24.05.2020 в 13.30',
    text: `Решение было принято на Межведомственной комиссии по международной торговле, где рассматривали вопрос защиты украинских товаропроизводителей от недобросовестного импорта.
    «По результатам проведения антидемпингового расследования относительно импорта в Украину спичек происхождением из Республики Беларусь и Российской Федерации установить антидемпинговую пошлину для Беларуси в размере 21,32%, для РФ в размере 45,79%», — сообщили в ведомстве.
    Дата, с которой начнут действовать новые ставки пошлины, не указаны.`
   } ,
   {title: `«Наш продукт — любимчик американцев». На Октябрьской открылось кафе с бейглами от 5 до 9,4 рубля` ,
    date: 'Опубликовано 23.05.2020  в 14.05',
    text: `«Ночью и утром 24 мая местами по восточной половине республики ожидаются заморозки 0, -2ºC», — сообщили синоптики.
    Заморозки представляют опасность для сельскохозяйственных растений, в осенне-весенний период — для семян и всходов. Специалисты советуют разные способы защиты растений от заморозков.
    `
   }, 
   {title: `«Наш продукт — любимчик американцев». На Октябрьской открылось кафе с бейглами от 5 до 9,4 рубля` ,
    date: 'Опубликовано 23.05.2020  в 14.05',
    text: `«Ночью и утром 24 мая местами по восточной половине республики ожидаются заморозки 0, -2ºC», — сообщили синоптики.
    Заморозки представляют опасность для сельскохозяйственных растений, в осенне-весенний период — для семян и всходов. Специалисты советуют разные способы защиты растений от заморозков.
    `
   } 
]
,
  post: {posts :
    [
        {date: '21.5.2020 в 00.20',
     text: 'мой первый пост'}, {date: '21.5.2020 в 00.20',
     text: 'мой второй  пост'}, 
    ], 
    newPostText: 'новая запись...'},

    messages: {newMessages: [
        {
            text: 'И я тебя люблю',
            date: '20.5.2020 в 23:50'
        }

    ], 
    newMessageText: 'новое текстовое сообщение...'},
  
},
_callSubscriber() {
        
},
getState () {
    return this._state
},
    
    subscribe(observer) {
         this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.post = postsReducer (this._state.post, action)
        this._state.messages = messageReducer(this._state.messages, action)


    
            this._callSubscriber(this._state)
}
}



  

   
   
        
    
    export default Store