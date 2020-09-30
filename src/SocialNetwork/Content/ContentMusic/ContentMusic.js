import React from 'react'
import music1 from './music1.mp3'
import music2 from './music2.mp3'
import music3 from './music3.mp3'
import music4 from './music4.mp3'
import music5 from './music5.mp3'
import classes from './ContentMusic.module.css'


function ContentMusic () {
    return (
<div className = {classes.audio}>
<div>Какой-то исполнитель - какая-то песня </div>
    <audio controls preload="metadata">
            <source src= {music1} type="audio/mpeg"/>
          </audio>
            <div>Какой-то исполнитель - какая-то песня </div>
    <audio controls preload="metadata">
            <source src = {music2} type="audio/mpeg"/>
          </audio>
          <div>Какой-то исполнитель - какая-то песня </div>
    <audio controls preload="metadata">
            <source src = {music3} type="audio/mpeg"/>
          </audio>
          <div>Какой-то исполнитель - какая-то песня </div>
    <audio controls preload="metadata">
            <source src = {music4} type="audio/mpeg"/>
          </audio>
          <div>Какой-то исполнитель - какая-то песня </div>
    <audio controls preload="metadata">
            <source src = {music5} type="audio/mpeg"/>
          </audio>
</div>
    )
}

export default ContentMusic