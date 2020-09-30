import React from 'react'
import classes from './ContentProfile.module.css'
import AboutMe from './AboutMe/AboutMe'

function ContentProfile(props) {
 
    let newPost = React.createRef();

  let wallPosts = props.postList.map( (post)=> {
      return <div className = {classes.postList}>
          <div>
{post.date}
          </div>
          <div> 
          {post.text}
          </div>
      </div>
  })
  let addPosts = () => {
    props.addPosts()}
let updateNewPostText = () => {
    let text = newPost.current.value
    props.updateNewPost(text)} 
  let onPostChange = () => {
      updateNewPostText()
  }
return (
    <div>
        <div className = {classes.aboutme}> <AboutMe /> </div>
        <div className = {classes.wallCreate}> <textarea onChange = {onPostChange} value = {props.newPostText} ref={newPost}/> <button onClick ={addPosts}>Написать на стене</button></div>
        <div className = {classes.profilewall}> 
        
        </div> 
        <div > {wallPosts}</div>
        
    </div>
)
}

export default ContentProfile