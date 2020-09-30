import React from 'react'
import Preloader from './../../preolader/preolader'

let UserProfile = (props) => {
if (!props.userProfile.fullName) {
    return <Preloader/>
} else 
    {return <div><div>{props.userProfile.fullName}
   
    <img src ={props.userProfile.photos.large} alt= 'ava'/> 
        <img src ='https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png' alt= 'ava'/>
        
   </div>

    </div>}
    
   
}

export default UserProfile