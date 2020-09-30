import React from 'react'
import classes from './AboutMe.module.css'
import image from './profileLogo.jpg'
import Status from './Status'
function AboutMe() {
return (
    <div className={classes.container}>
<div className = {classes.logo}>
<img src ={image} alt= 'avatar' />
</div>
<div className = {classes.info}>
<Status status = 'gagdsgs'/>
<div>Имя : Денис</div>
<div>Фамилия : Косовец</div>
<div>дата рождения: 06. 07. 1995 г.</div>
<div>город : Барановичи</div>
<div>семейное положение : женат</div>

</div>
    </div>
)
}

export default AboutMe