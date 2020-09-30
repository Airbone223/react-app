import React from 'react'
import UserProfile from './UserProfile'
import  {compose} from 'redux'
import { connect} from 'react-redux'

import { withRouter } from 'react-router-dom'
import {getUsersProfileThunkCreator} from './../../Redux/userProfile-reducer'


class UsersProfileContainer extends React.Component {
componentDidMount () {
   this.props.getProfile(this.props)
}
    render () {
return (
    <UserProfile userProfile = {this.props.userProfile}/>
)
    }
}


let mapStateToProps = (state) => ( {
userProfile: state.userProfile
})

export default  compose(connect(mapStateToProps, {getProfile: getUsersProfileThunkCreator}), withRouter)(UsersProfileContainer)

