import React from 'react'
import classes from './AboutMe.module.css'


class Status extends React.Component  {
    state = {
        editMode: false
    }

activateEditMode = () => {
 this.setState( {
     editMode: true
 })
}

deactivateEditMode = () => {
    this.setState( {
        editMode: false
    })
   }

    render () {
    return (
    <div onDoubleClick = {this.activateEditMode.bind(this)}> 



    {!this.state.editMode && <div>{this.props.status}</div> }
    {this.state.editMode && <div ><input autoFocus = {true} onBlur = {this.deactivateEditMode.bind(this)} value = {this.props.status}/></div>}
     </div>
    
    )
    }
}
export default Status
