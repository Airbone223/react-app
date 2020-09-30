import React from 'react'
import classes from './Users.module.css'
import {NavLink} from "react-router-dom"


let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)
    let pages  = []
    for (let i=1; i<pagesCount; i++) {
      pages.push(i)
    }
    
       return  <div>
    
    <div>
      {pages.map(p=> {return <span
      className = {props.currentPage === p && classes.active}
       onClick ={()=>{props.onPageChanged(p)}}>_{p}_</span>})}
    </div>
    
    
    <div className = {classes.container} > <textarea className = {classes.searchBar} value = 'Введите имя пользователя'></textarea> <button className = {classes.button}>Найти</button></div>
    { props.users.map (  (user) => {
         let isFollow = ''
         let backgroundColor={}
         if (user.followed === true) {
            isFollow = 'подписаны'
             backgroundColor = {backgroundColor: 'white'}
         } else { isFollow = 'подписаться'
         backgroundColor = {backgroundColor: 'red'}
        }
    
        let url
    if (user.photos.small === null) {
      url = 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png'
    } else {url = user.photos.small}
        
            return      <div >
         <div className = {classes.friend}>
         <div className  = {classes.avatar}> <NavLink to = {'/usersprofile/' + user.id}><img className = {classes.img} src ={url} alt = "avatar"/> </NavLink> </div>
         <div className = {classes.name}> {user.name}</div>
        <button style = {backgroundColor}  className = {classes.followButton}>{isFollow}</button>
         </div>
         </div> 
     }) }
    <div className = {classes.buttonShow} >Показать еще</div></div>
        
    

}

export default Users