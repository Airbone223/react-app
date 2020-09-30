
import {connect} from 'react-redux'


import {getUsersThunkCreator} from './../Redux/users-reducer'
import Users from './Users'

import React from 'react'
import Preloader from './../preolader/preolader'



class UsersAPI extends React.Component {

  
componentDidMount() {

 this.props.getUsers(this.props.currentPage, this.props.pageSize );
}

onPageChanged = (page) => {
   
  this.props.getUsers(page, this.props.pageSize )
}

render () {
  return <>
  {this.props.isFetching ? 
  <Preloader />: null}
   <Users 
totalUsersCount = {this.props.totalUsersCount}
pageSize = {this.props.pageSize}
currentPage = {this.props.currentPage}
users = {this.props.users}
onPageChanged = {this.onPageChanged}     
  />
  </>
}
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    }
}

const UsersContainer = connect(mapStateToProps, 
  { getUsers: getUsersThunkCreator}) (UsersAPI)

export default UsersContainer


