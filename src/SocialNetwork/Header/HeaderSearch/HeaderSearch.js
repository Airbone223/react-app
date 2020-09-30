import React from "react";
import  classes from "./HeaderSearch.module.css";




function HeaderSearch (props) {
return (
    <div className = {classes.searchInput}>
<input type = 'text' name = 'search' id = 'search' value ='Поиск' />

    </div>
)
}

export default HeaderSearch