import React from "react";
import  classes from "./Header.module.css";

import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderSearch from './HeaderSearch/HeaderSearch'


function Header (props) {
return (
    <div className = {classes.container}>
<div className = {classes.logo}>
<HeaderLogo />
</div>
<div className = {classes.search}>
<HeaderSearch /> 
</div>
    </div>
)
}

export default Header