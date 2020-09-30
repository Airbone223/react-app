import React from 'react'
import classes from './../Users/Users.module.css'

let Preloader = (props) => {
    return <div className = {classes.preolader}>
    <img src = 'https://sitey.ru/uploads/posts/2016-01/1453290903_poster.gif' alt ='preolader'/>
    </div>
}

export default Preloader