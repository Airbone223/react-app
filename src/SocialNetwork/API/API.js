import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})
export const getUsers = (props) => {
  
    return  instance.get(`profile/`+ props.match.params.userId)
    .then(response=>response.data)
    
}


export const getUsersPages = (currentPage, pageSize) => {
    return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response=>response.data)
}

