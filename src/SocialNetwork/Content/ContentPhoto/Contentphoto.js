import React from 'react'
import photo1 from './photo1.jpg'

import photo2 from './photo2.jpg'
import photo3 from './photo3.jpg'
import photo4 from './photo4.jpg'
import photo5 from './photo5.jpg'
import photo6 from './photo6.jpg'
import photo7 from './photo7.jpg'
import classes from './ContentPhoto.module.css'
function Contentphoto() {
    return (
        <div className={classes.container}>
        <div> <img src={photo1} alt='photo'/></div>
        <div> <img src={photo2} alt='photo'/></div>
        <div> <img src={photo3} alt='photo'/></div>
        <div> <img src={photo4} alt='photo'/></div>
        <div> <img src={photo5} alt='photo'/></div>
        <div> <img src={photo6} alt='photo'/></div>
        <div> <img src={photo7} alt='photo'/></div>
        </div>
    )   
 }



    export default Contentphoto