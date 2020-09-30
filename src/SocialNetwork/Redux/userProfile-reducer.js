import {getUsers} from './../API/API'

const SET_USER = 'SET_USER'


let initialState = {

}

const userProfileReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER: {
            return {...action.profile }
    }
    default: return {...state}
    }
}



export const setUserProfile = (profile) => ({
type: SET_USER, profile
})


export const getUsersProfileThunkCreator = (props) => {
    return (dispatch) => {
    getUsers(props).then(data=>{
        dispatch(setUserProfile(data))
    })
}
}


export default userProfileReducer