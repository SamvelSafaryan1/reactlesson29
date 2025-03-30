import { socialAPI } from "../../api/api"

const PROFILE = 'profile'

const initState = {
    profile: {}
}

const profileReducer = (state = initState, action) => {
    switch(action.type){
        case PROFILE :
            return{
                ...state,
                profile: action.payload
            }

        default :
            return state
    }
}

export const profileAC = (data) => ({type: PROFILE, payload: data})

export const profileTC = (userId) => {
    return (dispatch) => {
        socialAPI.getProfile(userId)
        .then((res) => dispatch(profileAC(res.data)))
    }
}

export default profileReducer