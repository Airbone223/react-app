import React from "react";
import {NavLink} from 'react-router-dom'
import classes from "./Navigation.module.css"
function Navigation () {
    return (
       
        <div className={classes.container}>

         <NavLink to = '/profile' className = {classes.nav} activeClassName ={classes.activeLink}> <div>  Мой профиль </div> </NavLink>
 <NavLink to = '/friends' className = {classes.nav} activeClassName ={classes.activeLink}> <div>Мои друзья</div> </NavLink> 
 <NavLink to = '/messages' className = {classes.nav} activeClassName ={classes.activeLink}> <div>Мои сообщения</div> </NavLink>
<NavLink to = '/news' className = {classes.nav} activeClassName ={classes.activeLink}>  <div>Свежие новости</div></NavLink> 
<NavLink to = '/photo' className = {classes.nav} activeClassName ={classes.activeLink}> <div>Мои фотографии </div></NavLink> 
<NavLink to = '/music' className = {classes.nav} activeClassName ={classes.activeLink}> <div>Мои аудиозаписи</div></NavLink> 
 <NavLink to = '/video' className = {classes.nav} activeClassName ={classes.activeLink}> <div>Мои видео</div></NavLink> 
 <NavLink to = '/users' className = {classes.nav} activeClassName ={classes.activeLink}> <div>Поиск пользователя</div></NavLink>
        </div>

    )
}

export default Navigation