import { socialAPI } from "../../api/api"

const LOGIN = 'login'

const initState = {
    userID: null,
    session: false
}

const loginReducer = (state = initState, action) => {
    switch(action.type){
        case LOGIN :
            return{
                ...state,
                userID: action.payload,
                session: true
            }

        default :
            return state
    }
}

export const loginAC = (data) => ({type: LOGIN, payload: data})

export const loginTC = (email, password) => {
    return (dispatch) => {
        socialAPI.login(email, password)
        .then((res) => dispatch(loginAC(res.data.data.userId)))
        .catch((err) => console.error(err))
    }
}

export default loginReducer