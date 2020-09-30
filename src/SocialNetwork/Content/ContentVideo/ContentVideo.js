import React from 'react'
import classes from './ContentVideo.module.css'
import video1 from './MONATIK1.webm'
import video2 from './MONATIK2.webm'
import video3 from './MONATIK3.webm'

function ContentVideo () {
return( <div className = {classes.video}>
<div>Монатик  - сильно</div>
    <video controls preload="metadata" width="400" height="225">
    <source src={video1} type="video/webm" />
  </video>
  <div>Монатик  - Lve It Ритм</div>
  <video controls preload="metadata" width="400" height="225">
    <source src={video2} type="video/webm" />
  </video>
  <div>Монатик  - Кружит</div>
  <video controls preload="metadata" width="400" height="225">
    <source src={video3} type="video/webm" />
  </video>
  </div>
)
}

export default ContentVideo
