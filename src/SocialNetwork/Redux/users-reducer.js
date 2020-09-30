import {getUsersPages} from './../API/API'



const SET_CURRENT_PAGE ='SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_USERS = 'SET_USERS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
let initialState = {
users: [
],
totalUsersCount: 0,
pageSize:100,
currentPage: 1,
isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_USERS: 
return {...state, users: [...action.users]}
    
case SET_TOTAL_USER_COUNT: 
        return {...state, totalUsersCount: action.totalCount}
     case SET_CURRENT_PAGE: 
        return {...state, currentPage: action.page}
case SET_IS_FETCHING:
    return {...state, isFetching: action.isFetching}    
   default: return state
}
}



export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUserCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
 dispatch(setIsFetching(true))
    getUsersPages(currentPage, pageSize).then(data => {
        dispatch(setIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUserCount(data.totalCount))
     
     })
    }
}



export default usersReducer