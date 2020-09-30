import React from "react";
import  classes from "./HeaderLogo.module.css";
import logo from './profileLogo.jpg'
import {NavLink} from 'react-router-dom'


function HeaderLogo (props) {
return (
    <div className = {classes.logo}>
    <NavLink to = '/profile'><img src = {logo} alt = "My Logo"/> </NavLink>
    </div>
   
)
}

export default HeaderLogo