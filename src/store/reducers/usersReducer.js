import { socialAPI } from "../../api/api"

const GET_USERS = 'get-users'

const initState = {
    users: []
}

const usersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_USERS :
            return{
                ...state,
                users: action.payload
            }

        default :
            return state
    }
}

const getUsersAC = (users) => ({type: GET_USERS, payload: users})

export const getUsersTC = () => {
    return (dispatch) => {
        socialAPI.getUsers()
        .then((res) => dispatch(getUsersAC(res.data.items)))
    }
}

export default usersReducer
