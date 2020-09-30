import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './ContentMessages.module.css'



function ContentMessages (props) {
    let ListOfMessages = props.messageList.map ( (message) => { return (
         <NavLink to = {message.link}> <div className ={classes.friendsList}>
        <div className = {classes.friend}>
        <div className  = {classes.avatar}> <img src ={message.avatar} alt = "avatar"/> </div>
        <div className = {classes.name}> <p>{message.name}: {message.lasttext} <span> {message.lastData}</span> </p>
        <p> Вы : {message.lastAnswer} <span> {message.lastAnswerDate}</span> </p>
        </div> </div>
        </div>  </NavLink>
    )
    })
    return ( <div>

     {ListOfMessages}

</div>
    )

}

export default ContentMessages