import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import usersReducer from "./reducers/usersReducer"
import loginReducer from "./reducers/loginReducer"
import profileReducer from "./reducers/profileReducer"

const rootReducers = combineReducers({
    usersPage: usersReducer,
    auth: loginReducer,
    profile: profileReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store
