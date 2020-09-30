import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './ContentFriends.module.css'



function ContentFriends (props) {

    let List = props.friendsList.map ( function (friend) { return <NavLink to = {friend.link}> <div className ={classes.friendsList}>
    <div className = {classes.friend}>
    <div className  = {classes.avatar}> <img src ={friend.avatar} alt = "avatar"/> </div>
    <div className = {classes.name}> {friend.name}</div></div>
    </div> </NavLink> })
   return ( <div>

     {List}

</div>
    )

}

export default ContentFriends