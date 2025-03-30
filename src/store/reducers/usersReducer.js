import { socialAPI } from "../../api/api"

const GET_USERS = 'get-users'
const CHANGE_PAGE = 'change-page'

const initState = {
    users: [],
    totalUsersCount: 1000,
    totalPageCount: 100,
    page: 1
}

const usersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USERS :
            return{
                ...state,
                users: action.payload
            }
        case CHANGE_PAGE :
            return{
                ...state,
                page: action.payload
            }

        default :
            return state
    }
}

const getUsersAC = (users) => ({type: GET_USERS, payload: users})
export const changePageAC = (pageNumber) => ({type: CHANGE_PAGE, payload: pageNumber})

export const getUsersTC = (page) => {
    return (dispatch) => {
        socialAPI.getUsers(page)
        .then((res) => dispatch(getUsersAC(res.data.items)))
    }
}

export default usersReducer
