import React from 'react'
import classes from './ContentNews.module.css'

function ContentNews(props) {
    let news = props.newsList.map((newsPost)=> {return(
<div className = {classes.news}>
    <div className = {classes.title}>{newsPost.title}</div>
    <div className = {classes.date}>{newsPost.date}</div>
    <div className = {classes.text}> {newsPost.text}
</div> </div>
    )
}
    )

    return (
        <div className = {classes.container}> 

{news}


        </div>
    )
}


export default ContentNews