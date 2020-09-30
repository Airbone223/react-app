import React from 'react'
import classes from './MessageMain.module.css'
import avatar1 from './avatar1.jpg'
import logo from './profileLogo.jpg'



function MessageMain (props) {

  

let newMessages  = props.newMessages.map((message) => {
    return (<div className = {classes.answer} >
 
        <div className = {classes.name}> <p>Вы: {message.text} <span> {message.date}</span> </p>
        </div> <div className  = {classes.avatar}> <img className = {classes.mylogo} src ={logo} alt = "avatar"/> </div> </div>
         )
})

let newMessage = React.createRef()

let addMessage = () => {props.addMessage()}


let updateNewMessageText = () => {
    let text = newMessage.current.value
    props.updateNewMessage(text)} 
  let onMessageChange = () => {
      
    updateNewMessageText()
  }



    return ( <div>
        

        <div className = {classes.friend}>
<div className  = {classes.avatar}> <img src ={avatar1} alt = "avatar"/> </div>
<div className = {classes.name}> <p>Юлия Косовец: Привет, как дела? <span> 23.05.2020 в 19.50</span> </p>
</div>
 </div>

 <div className = {classes.answer}>
 
<div className = {classes.name}> <p>Вы: Привет, все хорошо, как ты? <span> 23.05.2020 в 19.55</span> </p>
</div> <div className  = {classes.avatar}> <img src ={logo} alt = "avatar"/> </div> </div>

<div className = {classes.friend}>
<div className  = {classes.avatar}> <img src ={avatar1} alt = "avatar"/> </div>
<div className = {classes.name}> <p>Юлия Косовец: Я тебя люблю! <span> 23.05.2020 в 20.00</span> </p>
</div>
 </div>


 
<div>{newMessages}  </div>

             <div className = {classes.wallCreate}>
              <textarea onChange = {onMessageChange} value = {props.newMessageText} ref = {newMessage}/> 
             <button onClick = {addMessage}> Написать сообщение</button>
             </div>
             </div>
    
    )
}




export default MessageMain